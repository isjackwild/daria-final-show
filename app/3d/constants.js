import MobileDetect from 'mobile-detect';
const md = new MobileDetect(window.navigator.userAgent);
const mobile = md.mobile() ? true : false;

export const SKYBOX_RADIUS = 60;
export const SKYBOX_SEGS = 30;

export const CAMERA_FOV = 95;
export const CAMERA_ORBIT_OFFSET = 0.01;
export const CAMERA_MOVE_STEP = -0.00066;


export const MAPS_PATH = 'assets/maps/';
export const ENV_MAP_SRCS = {};
ENV_MAP_SRCS['corridor'] = 'corridor.jpg';
ENV_MAP_SRCS['outside'] = 'outside.jpg';
ENV_MAP_SRCS['bathroom'] = 'bathroom.jpg';
ENV_MAP_SRCS['kitchen'] = 'kitchen.jpg';
ENV_MAP_SRCS['livingroom'] = 'livingroom.jpg';
ENV_MAP_SRCS['bluehour'] = 'items/blue_hour.png';
ENV_MAP_SRCS['door'] = 'items/door.png';
ENV_MAP_SRCS['greenflash'] = 'items/greenflash.png';
ENV_MAP_SRCS['mirage'] = 'items/mirage.png';

export const GEOMS_PATH = 'assets/geom/';
export const GEOM_SRCS = {};
GEOM_SRCS['bathroom'] = '3d-scene_bathroom.dae';
GEOM_SRCS['livingroom'] = '3d-scene_livingroom.dae';
GEOM_SRCS['corridor'] = '3d-scene_corridor.dae';
GEOM_SRCS['kitchen'] = '3d-scene_kitchen.dae';
GEOM_SRCS['outside'] = '3d-scene_outside.dae';


export const DOOR_DATA = {};
DOOR_DATA['corridor'] = { title: 'Back to Corridor' };
DOOR_DATA['outside'] = { title: 'Outside' };
DOOR_DATA['bathroom'] = { title: 'Bathroom' };
DOOR_DATA['kitchen'] = { title: 'Kitchen' };
DOOR_DATA['livingroom'] = { title: 'Living Room' };

export const IMAGES_PATH = 'assets/images/';
export const VIDEOS_PATH = 'assets/videos/';
export const OBJECT_DATA = {};
OBJECT_DATA['bathtab'] = {
	title: 'Bathtab',
	leftText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget massa commodo, semper turpis non, auctor eros. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris dignissim pretium fringilla.',
	rightText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget massa commodo, semper turpis non, auctor eros. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris dignissim pretium fringilla.',
	leftImgSrc: 'http://placehold.it/800x500',
	rightImgSrc: 'http://placehold.it/800x500',
	objectImgSrc: 'http://placehold.it/800x500',
	videoSrc: '',
	angleX: Math.PI * 0.2,
	angleY: 0,
	scale: 1,
};
OBJECT_DATA['window'] = {
	title: 'Window',
	leftText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget massa commodo, semper turpis non, auctor eros. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris dignissim pretium fringilla.',
	rightText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget massa commodo, semper turpis non, auctor eros. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris dignissim pretium fringilla.',
	leftImgSrc: 'http://placehold.it/800x500',
	rightImgSrc: 'http://placehold.it/800x500',
	objectImgSrc: 'http://placehold.it/800x500',
	videoSrc: '',
	angleX: Math.PI * 0.2,
	angleY: 0,
	scale: 1,
};
OBJECT_DATA['lightpillars'] = {
	title: 'Light Pillars',
	leftText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget massa commodo, semper turpis non, auctor eros. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris dignissim pretium fringilla.',
	rightText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget massa commodo, semper turpis non, auctor eros. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris dignissim pretium fringilla.',
	leftImgSrc: 'http://placehold.it/800x500',
	rightImgSrc: 'http://placehold.it/800x500',
	objectImgSrc: 'http://placehold.it/800x500',
	videoSrc: '',
	angleX: Math.PI * 0.2,
	angleY: 0,
	scale: 1,
};
OBJECT_DATA['nothernlights'] = {
	title: 'Northern Lights',
	leftText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget massa commodo, semper turpis non, auctor eros. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris dignissim pretium fringilla.',
	rightText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget massa commodo, semper turpis non, auctor eros. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris dignissim pretium fringilla.',
	leftImgSrc: 'http://placehold.it/800x500',
	rightImgSrc: 'http://placehold.it/800x500',
	objectImgSrc: 'http://placehold.it/800x500',
	videoSrc: '',
	angleX: Math.PI * 0.2,
	angleY: 0,
	scale: 1,
};
OBJECT_DATA['bluehour'] = {
	title: 'Blue Hour',
	leftText: 'Green flashes and green rays are optical phenomena that sometimes occur right before sunset or right after sunrise. When the conditions are right, a green spot is visible above the upper rim of the disk of the sun. The green appearance usually lasts for no more than a second or two.',
	rightText: 'A fluorescent lamp or a fluorescent tube is a low pressure mercury-vapor gas-discharge lamp that uses fluorescence to produce visible light. An electric current in the gas excites mercury vapor which produces short-wave ultraviolet light that then causes a phosphor coating on the inside of the lamp to glow.',
	leftImgSrc: IMAGES_PATH + 'blue_hour_nature.jpg',
	rightImgSrc: IMAGES_PATH + 'blue_hour_technology.jpg',
	objectImgSrc: MAPS_PATH + 'items/blue_hour.png',
	videoSrc: '',
	angleX: Math.PI * 0.01,
	angleY: Math.PI * 0.08,
	scale: 1,
};
OBJECT_DATA['greenflash'] = {
	title: 'Green Flash',
	leftText: 'Green flashes and green rays are optical phenomena that sometimes occur right before sunset or right after sunrise. When the conditions are right, a green spot is visible above the upper rim of the disk of the sun. The green appearance usually lasts for no more than a second or two.',
	rightText: 'A fluorescent lamp or a fluorescent tube is a low pressure mercury-vapor gas-discharge lamp that uses fluorescence to produce visible light. An electric current in the gas excites mercury vapor which produces short-wave ultraviolet light that then causes a phosphor coating on the inside of the lamp to glow.',
	leftImgSrc: IMAGES_PATH + 'mirage_nature.jpg',
	rightImgSrc: IMAGES_PATH + 'mirage_technology.jpg',
	objectImgSrc: MAPS_PATH + 'items/greenflash.png',
	videoSrc: '',
	angleX: Math.PI * 0.133,
	angleY: Math.PI * 0.5,
	scale: 1.5,
};
OBJECT_DATA['mirage'] = {
	title: 'Mirage',
	leftText: 'Green flashes and green rays are optical phenomena that sometimes occur right before sunset or right after sunrise. When the conditions are right, a green spot is visible above the upper rim of the disk of the sun. The green appearance usually lasts for no more than a second or two.',
	rightText: 'A fluorescent lamp or a fluorescent tube is a low pressure mercury-vapor gas-discharge lamp that uses fluorescence to produce visible light. An electric current in the gas excites mercury vapor which produces short-wave ultraviolet light that then causes a phosphor coating on the inside of the lamp to glow.',
	leftImgSrc: IMAGES_PATH + 'mirage_nature.jpg',
	rightImgSrc: IMAGES_PATH + 'mirage_technology.jpg',
	objectImgSrc: MAPS_PATH + 'items/mirage.png',
	videoSrc: '',
	angleX: Math.PI * 0.145,
	angleY: Math.PI * 1.1,
	scale: 2.6,
};





