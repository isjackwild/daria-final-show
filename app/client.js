import React from 'react';
import PubSub from 'pubsub-js';
import { render } from 'react-dom';
import _ from 'lodash';
import MobileDetect from 'mobile-detect';
import { textureLoader, colladaLoader, loadingManager, textures, geometries } from './3d/loader.js';
import { ENV_MAP_SRCS, MAPS_PATH } from './3d/constants.js';

import Master from './ui/layouts/Master.js';

import { init as initLoop, onResize as onResizeRenderer, onFocus as onFocusLoop, renderer } from './3d/loop.js';
import { init as initScene } from './3d/scene.js';
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
	}
}

const load = () => {
	console.log(ENV_MAP_SRCS);
	// ENV_MAP_SRCS.forEach((src, i, keys) => {
	// 	console.log(src, i, keys);
	// 	textures[keys[i]] = textureLoader.load()
	// });

	for (let key in ENV_MAP_SRCS) {
		console.log(ENV_MAP_SRCS[key]);
		textures[key] = textureLoader.load(MAPS_PATH + ENV_MAP_SRCS[key])
	}
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