const THREE = require('three');
require('../vendor/ColladaLoader.js');
export const loadingManager = new THREE.LoadingManager();

export const textureLoader = new THREE.TextureLoader(loadingManager);
export const colladaLoader = new THREE.ColladaLoader(loadingManager);

export const textures = {};
export const objectMeshes = {};