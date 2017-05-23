const THREE = require('three');
import PubSub from 'pubsub-js';

export let scene;
import { init as initCamera, camera, controls } from './camera.js';
import { lights } from './lighting.js';
import Room from './Room.js';

const TWO_PI = Math.PI * 2;
const FOUR_PI = Math.PI * 4;

const rooms = [];
export let currentRoom;

export const init = (geometries, textures) => {
	initCamera();
	setupScene();
	addEventListeners();
}

const setupScene = () => {
	scene = new THREE.Scene();
	scene.add(camera);

	rooms['corridor'] = new Room({ id: 'corridor', isActive: true, doors: ['outside', 'bathroom', 'kitchen', 'livingroom'] });
	scene.add(rooms['corridor']);

	rooms['outside'] = new Room({ id: 'outside', doors: ['corridor'], items: [] });
	scene.add(rooms['outside']);

	rooms['bathroom'] = new Room({ id: 'bathroom', doors: ['corridor'], items: ['bathtab', 'window'] });
	scene.add(rooms['bathroom']);

	rooms['kitchen'] = new Room({ id: 'kitchen', doors: ['corridor'], items: ['lightpillars', 'nothernlights'] });
	scene.add(rooms['kitchen']);

	rooms['livingroom'] = new Room({ id: 'livingroom', doors: ['corridor'], items: ['bluehour', 'greenflash', 'mirage'] });
	scene.add(rooms['livingroom']);

	currentRoom = rooms['corridor'];
	console.log(currentRoom, '<<')

	lights.forEach((light) => {
		scene.add(light);
	});

	scene.add(new THREE.AxisHelper(0.3));
}

const addEventListeners = () => {
	PubSub.subscribe('room.goto', goToRoom);
}

const goToRoom = (e, { id }) => {
	currentRoom.onLeaveRoom();
	currentRoom = rooms[id];
	currentRoom.onEnterRoom();
}


export const update = (delta) => {
	if (controls) controls.update(delta);
}