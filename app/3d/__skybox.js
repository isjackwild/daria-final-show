const THREE = require('three');
import TweenLite from 'gsap';

export let mesh, material;

export const init = (_mesh, texture) => {
	texture.minFilter = THREE.LinearFilter;
	texture.magFilter = THREE.LinearFilter;
	texture.generateMipmaps = false;
	texture.wrapS = THREE.RepeatWrapping;
	// texture.repeat.x = -1;

	material = new THREE.MeshLambertMaterial({
		map: texture,
	});
	material.side = THREE.BackSide;

	mesh = _mesh;
	mesh.material = material;
	mesh.frustrumCulled = false;
}