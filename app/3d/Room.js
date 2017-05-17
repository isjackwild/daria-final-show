const THREE = require('three');
import PubSub from 'pubsub-js';
import 'gsap';

import { textures, objectMeshes } from './loader.js';
import { DOOR_DATA, OBJECT_DATA } from './constants.js';

const up = new THREE.Vector3(0, 1, 0);
const zero = new THREE.Vector3(0, 0, 0);

class Room extends THREE.Object3D {
	constructor({ id, isActive, objects, doors, items }) {
		super();

		this._rId = id;

		this.doors = doors || [];
		this.items = items || [];

		this.envMap = textures[id];
		this.env = null;

		this.isActive = isActive || false;

		this.onEnterRoom = this.onEnterRoom.bind(this);
		this.onLeaveRoom = this.onLeaveRoom.bind(this);

		this.intersectableObjects = [];

		this.init();
	}

	init() {
		this.initEnv();
		this.initDoors();
		this.initItems();
	}

	initEnv() {
		this.envMap.minFilter = THREE.LinearFilter;
		this.envMap.magFilter = THREE.LinearFilter;
		// const geometry = new THREE.SphereGeometry( 0.5, 32, 32 );
		const material = new THREE.MeshLambertMaterial( { color: 0xffffff, map: this.envMap, wireframe: false });
		material.side = THREE.BackSide;

		this.env = objectMeshes[this._rId]['ENV'];
		// this.env.material.side = THREE.BackSide;
		this.env.children[0].material = material;
		
		// this.env = new THREE.Mesh(geometry, material);

		if (!this.isActive) {
			this.env.visible = false;
			this.env.children[0].material.transparent = true;
			this.env.children[0].material.opacity = 0;
		}

		this.add( this.env );
	}

	initDoors() {
		this.doors.forEach(roomId => {
			// const geometry = new THREE.PlaneGeometry( 0.3, 0.3 );
			// const material = new THREE.MeshLambertMaterial( { color: 0xff0000, wireframe: true });
			// const door = new THREE.Mesh( geometry, material );
			const door = this._rId === 'corridor' ? objectMeshes[this._rId][`door--${roomId}`] : objectMeshes[this._rId][`door--${this._rId}`];
			if (!door) console.log(this._rId, roomId);
			door.roomId = roomId;
			door.title = DOOR_DATA[roomId].title;
			
			door.onFocus = () => {}
			door.onBlur = () => {}
			door.onClick = () => { PubSub.publish('room.goto', { id: roomId }) }

			if (!this.isActive) {
				door.visible = false;
				door.children[0].material.transparent = true;
				door.children[0].material.opacity = 0;
			}

			// door.position.set(0, 0, 0.45);
			// door.position.applyAxisAngle(up, Math.random() * Math.PI * 2);
			// door.lookAt(zero);
			this.add(door);
			this.intersectableObjects.push(door);
		});
	}

	initItems() {
		this.items.forEach(objectId => {
			// const geometry = new THREE.PlaneGeometry( 0.3, 0.3 );
			// const material = new THREE.MeshLambertMaterial( { color: 0x000000, wireframe: false });
			// const item = new THREE.Mesh( geometry, material );
			
			const item = objectMeshes[this._rId][objectId];
			item.children[0].material = new THREE.MeshLambertMaterial( { color: 0x000000, wireframe: true });
			
			item.objectId = objectId;
			item.title = OBJECT_DATA[objectId].title;
			
			item.onFocus = () => {}
			item.onBlur = () => {}
			item.onClick = () => { PubSub.publish('item.show', { id: objectId }) }

			if (!this.isActive) {
				item.visible = false;
				item.children[0].material.transparent = true;
				item.children[0].material.opacity = 0;
			}

			// item.position.set(0, 0, 0.8);
			// item.position.applyAxisAngle(up, Math.random() * Math.PI * 2);
			// item.lookAt(zero);
			this.add(item);
			this.intersectableObjects.push(item);
		});
	}

	onEnterRoom() {
		this.isActive = true;
		this.children.forEach(c => {
			c.visible = true;
			c.children[0].material.transparent = true;
			TweenLite.to(c.children[0].material, 0.8, { opacity: 1, onComplete: () => c.material.transparent = false });
		});
		if (this._rId === 'outside') PubSub.publish('about.show');
	}

	onLeaveRoom() {
		this.isActive = false;
		this.children.forEach(c => {
			c.children[0].material.transparent = true;
			TweenLite.to(c.children[0].material, 0.8, { opacity: 0, onComplete: () => {
				c.children[0].visible = false;
				c.children[0].material.transparent = false;
			}});
		});
	}
}

export default Room;
