const THREE = require('three');
import PubSub from 'pubsub-js';
import 'gsap';

const up = new THREE.Vector3(0, 1, 0);

class Room extends THREE.Object3D {
	constructor({ id, isActive, envMap, objects, doors }) {
		super();

		this._rId = `room--${id}`;

		this.doors = doors;

		this.envMap = envMap;
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
		const material = new THREE.MeshLambertMaterial( { color: Math.random() * 0xffffff, map: this.envMap, wireframe: true });
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
			const geometry = new THREE.SphereGeometry( 1, 10, 10 );
			const material = new THREE.MeshLambertMaterial( { color: 0xff0000, map: this.envMap, wireframe: true });
			const door = new THREE.Mesh( geometry, material );
			door.roomId = roomId;
			door.onFocus = () => {
				PubSub.publish('target.focus');
			}

			door.onBlur = () => {
				PubSub.publish('target.blur');
			}

			door.onClick = () => {
				PubSub.publish('room.goto', { id: roomId });
			}

			if (!this.isActive) {
				door.visible = false;
				door.material.transparent = true;
				door.material.opacity = 0;
			}

			door.position.set(0, 0, 4);
			door.position.applyAxisAngle(up, Math.random() * Math.PI * 2);
			this.add( door );
			this.intersectableObjects.push(door);
		});
	}

	initItems() {
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
