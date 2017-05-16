const THREE = require('three');
import PubSub from 'pubsub-js';
import 'gsap';

import { textures } from './loader.js';
import { DOOR_DATA, OBJECT_DATA } from './constants.js';

const up = new THREE.Vector3(0, 1, 0);
const zero = new THREE.Vector3(0, 0, 0);

class Room extends THREE.Object3D {
	constructor({ id, isActive, objects, doors, items }) {
		super();

		this._rId = `room--${id}`;

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
		// this.envMap.minFilter = THREE.LinearFilter;
		// this.envMap.magFilter = THREE.LinearFilter;
		const geometry = new THREE.SphereGeometry( 5, 32, 32 );
		const material = new THREE.MeshLambertMaterial( { color: 0xffffff, map: this.envMap, wireframe: false });
		material.side = THREE.BackSide;

		this.env = new THREE.Mesh( geometry, material );
		if (!this.isActive) {
			this.env.visible = false;
			this.env.material.transparent = true;
			this.env.material.opacity = 0;
		}

		this.add( this.env );
	}

	initDoors() {
		this.doors.forEach(roomId => {
			const geometry = new THREE.PlaneGeometry( 2, 4 );
			const material = new THREE.MeshLambertMaterial( { color: 0xff0000, wireframe: false });
			const door = new THREE.Mesh( geometry, material );
			door.roomId = roomId;
			door.title = DOOR_DATA[roomId].title;
			
			door.onFocus = () => {}
			door.onBlur = () => {}
			door.onClick = () => { PubSub.publish('room.goto', { id: roomId }) }

			if (!this.isActive) {
				door.visible = false;
				door.material.transparent = true;
				door.material.opacity = 0;
			}

			door.position.set(0, 0, 4);
			door.position.applyAxisAngle(up, Math.random() * Math.PI * 2);
			door.lookAt(zero);
			this.add(door);
			this.intersectableObjects.push(door);
		});
	}

	initItems() {
		this.items.forEach(objectId => {
			const geometry = new THREE.PlaneGeometry( 2, 4 );
			const material = new THREE.MeshLambertMaterial( { color: 0x000000, wireframe: false });
			const item = new THREE.Mesh( geometry, material );
			item.objectId = objectId;
			item.title = OBJECT_DATA[objectId].title;
			
			item.onFocus = () => {}
			item.onBlur = () => {}
			item.onClick = () => { PubSub.publish('item.show', { id: objectId }) }

			if (!this.isActive) {
				item.visible = false;
				item.material.transparent = true;
				item.material.opacity = 0;
			}

			item.position.set(0, 0, 4);
			item.position.applyAxisAngle(up, Math.random() * Math.PI * 2);
			item.lookAt(zero);
			this.add(item);
			this.intersectableObjects.push(item);
		});
	}

	onEnterRoom() {
		this.isActive = true;
		this.children.forEach(c => {
			c.visible = true;
			c.material.transparent = true;
			TweenLite.to(c.material, 0.8, { opacity: 1, onComplete: () => c.material.transparent = false });
		});
	}

	onLeaveRoom() {
		this.isActive = false;
		this.children.forEach(c => {
			c.material.transparent = true;
			TweenLite.to(c.material, 0.8, { opacity: 0, onComplete: () => {
				c.visible = false;
				c.material.transparent = false;
			}});
		});
	}
}

export default Room;
