const THREE = require('three');
import _ from 'lodash';
import PubSub from 'pubsub-js';

import { camera } from './camera.js';
import { currentRoom } from './scene.js';

const mouseVector = new THREE.Vector3();
const raycaster = new THREE.Raycaster();
export const ray = raycaster.ray;
// export const intersectableObjects = [];
const tmpPos = new THREE.Vector3();
const zeroVec = new THREE.Vector2(0, 0);


export const init = () => {
	addEventListeners();
}

const addEventListeners = () => {
	if (window.mobile) {
		window.addEventListener('deviceorientation', _.throttle(onDeviceOrientation, 33));
		window.addEventListener('touchstart', onClick);
	} else {
		window.addEventListener('mousemove', _.throttle(onMouseMove, 33));
		window.addEventListener('click', onClick);
	}
}

const onMouseMove = ({ clientX, clientY }) => {
	const x = 2 * (clientX / window.innerWidth) - 1;
	const y = 1 - 2 * (clientY / window.innerHeight);
	mouseVector.set(x, y, camera.position.z);
	raycaster.setFromCamera(mouseVector, camera);
	castFocus();
}

const onDeviceOrientation = ({ clientX, clientY }) => {
	raycaster.setFromCamera(zeroVec, camera);
	castFocus();
}

const onClick = ({ clientX, clientY, touches }) => {
	let x, y;
	if (touches) {
		x = 2 * (touches[0].clientX / window.innerWidth) - 1;
		y = 1 - 2 * (touches[0].clientY / window.innerHeight);
	} else {
		x = 2 * (clientX / window.innerWidth) - 1;
		y = 1 - 2 * (clientY / window.innerHeight);
	}
	mouseVector.set(x, y, camera.position.z);
	raycaster.setFromCamera(mouseVector, camera);
	castClick();
}

const castFocus = () => {
	let found = false;
	currentRoom.intersectableObjects.forEach((target) => {
		const intersects = raycaster.intersectObject( target, true );
		if (intersects.length) {
			found = true;
			target.onFocus();
			return;
		}
		target.onBlur();
	});
	if (found) return PubSub.publish('target.focus', false);
	return PubSub.publish('target.blur', false);
}

const castClick = () => {
	currentRoom.intersectableObjects.forEach((target) => {
		const intersects = raycaster.intersectObject( target, false );
		if (intersects.length) return target.onClick ? target.onClick() : null;
	});
}


export const update = () => {
}
