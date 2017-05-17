const THREE = require('three');
import React from 'react';
import PubSub from 'pubsub-js';
import { render } from 'react-dom';
import _ from 'lodash';
import MobileDetect from 'mobile-detect';
import { textureLoader, colladaLoader, loadingManager, textures, objectMeshes } from './3d/loader.js';
import { ENV_MAP_SRCS, MAPS_PATH, GEOM_SRCS, GEOMS_PATH } from './3d/constants.js';

import Master from './ui/layouts/Master.js';

import { init as initLoop, onResize as onResizeRenderer, onFocus as onFocusLoop, renderer } from './3d/loop.js';
import { init as initScene, scene } from './3d/scene.js';
import { init as initCamera, onResize as onResizeCamera, camera } from './3d/camera.js';
import { init as initInput } from './3d/input-handler.js';


const kickIt = () => {
	console.log('kickIt');

	const md = new MobileDetect(window.navigator.userAgent);
	window.mobile = md.mobile() ? true : false;
	window.firefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
	if (window.firefox) document.body.classList.add('firefox');
	if (window.mobile) document.body.classList.add('mobile');
	addEventListeners();
	
	load();

	loadingManager.onLoad = () => {
		console.log('all loaded');
		initScene();
		initLoop();
		initInput();
		initUI();

		// for (let key in GEOM_SRCS) {
		// 	colladaLoader.load(GEOMS_PATH + GEOM_SRCS[key], collada => {
		// 		collada.scene.children.forEach(c => {
		// 			c.children[0].material.color = new THREE.Color(Math.random() * 0xffffff);
		// 			c.children[0].material.wireframe = true;
		// 		});
		// 		collada.scene.children.forEach(c => {
		// 			scene.add(c);
		// 		});
		// 	});
		// }
	}
}

const load = () => {
	// ENV_MAP_SRCS.forEach((src, i, keys) => {
	// 	console.log(src, i, keys);
	// 	textures[keys[i]] = textureLoader.load()
	// });

	for (let key in ENV_MAP_SRCS) {
		textures[key] = textureLoader.load(MAPS_PATH + ENV_MAP_SRCS[key])
	}

	for (let key in GEOM_SRCS) {
		objectMeshes[key] = {};
		colladaLoader.load(GEOMS_PATH + GEOM_SRCS[key], collada => {
			collada.scene.children.forEach(c => {
				// const mesh = c.children[0];
				// mesh.position.copy(c.position);
				// mesh.rotation.copy(c.rotation);
				// mesh.quaternion.copy(c.quaternion);
				// mesh.matrix.copy(c.matrix);
				// mesh.matrixWorld.copy(c.matrixWorld);
				// mesh.scale.copy(c.scale);
				// console.log(c);
				objectMeshes[key][c.name] = c;
			});
		});
	}
	console.log(objectMeshes, '<<<');
}


const initUI = () => {
	render((
		<Master/>
	), document.getElementById('react-root'));
} 

const onResize = () => {
	onResizeCamera();
	onResizeRenderer();
	PubSub.publish('resize');
}

const addEventListeners = () => {
	window.addEventListener('resize', _.throttle(onResize, 16.666));
	window.addEventListener('focus', onFocusLoop);
}


document.addEventListener('DOMContentLoaded', kickIt);