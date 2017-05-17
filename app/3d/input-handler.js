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

let ignoreClick = false;
let overlayShown = false;

export const init = () => {
	addEventListeners();
	PubSub.subscribe('item.show', () => overlayShown = true);
	PubSub.subscribe('item.hide', () => overlayShown = false);
	PubSub.subscribe('about.show', () => overlayShown = true);
	PubSub.subscribe('about.hide', () => overlayShown = false);
}

const addEventListeners = () => {
	if (window.mobile) {
		window.addEventListener('deviceorientation', _.throttle(onDeviceOrientation, 33));
		window.addEventListener('click', onClick);
	} else {
		window.addEventListener('mousemove', _.throttle(onMouseMove, 33));
		window.addEventListener('click', onClick);
		window.addEventListener('mousedown', onMouseDown);
	}
}

const onMouseMove = ({ clientX, clientY }) => {
	if (overlayShown) return;
	const x = 2 * (clientX / window.innerWidth) - 1;
	const y = 1 - 2 * (clientY / window.innerHeight);
	mouseVector.set(x, y, camera.position.z);
	raycaster.setFromCamera(mouseVector, camera);
	castFocus();
	ignoreClick = true;
}

const onDeviceOrientation = ({ clientX, clientY }) => {
	if (overlayShown) return;
	raycaster.setFromCamera(zeroVec, camera);
	castFocus();
}

const onMouseDown = () => {
	ignoreClick = false;
}

const onClick = ({ clientX, clientY, touches }) => {
	if (ignoreClick || overlayShown) return;
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
		const intersects = raycaster.intersectObject( target, false );
		if (intersects.length) {
			found = target;
			target.onFocus();
			return;
		}
		target.onBlur();
	});
	if (found) return PubSub.publish('target.focus', { title: found.title });
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
