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

export const GEOMS_PATH = 'assets/geom/';
export const GEOM_SRCS = {};
GEOM_SRCS['livingroom'] = 'livingroom.dae';


export const DOOR_DATA = {};
DOOR_DATA['corridor'] = { title: 'Back to Corridor' };
DOOR_DATA['outside'] = { title: 'Outside' };
DOOR_DATA['bathroom'] = { title: 'Bathroom' };
DOOR_DATA['kitchen'] = { title: 'Kitchen' };
DOOR_DATA['livingroom'] = { title: 'Living Room' };

export const IMAGES_PATH = 'assets/images/';
export const VIDEOS_PATH = 'assets/videos/';
export const OBJECT_DATA = {};
OBJECT_DATA['bathtap'] = {
	title: 'Bathtap',
	leftText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget massa commodo, semper turpis non, auctor eros. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris dignissim pretium fringilla.',
	rightText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget massa commodo, semper turpis non, auctor eros. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris dignissim pretium fringilla.',
	leftImgSrc: 'http://placehold.it/800x600',
	rightImgSrc: 'http://placehold.it/800x600',
	objectImgSrc: 'http://placehold.it/800x600',
	videoSrc: '',
};
OBJECT_DATA['window'] = {
	title: 'Window',
	leftText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget massa commodo, semper turpis non, auctor eros. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris dignissim pretium fringilla.',
	rightText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget massa commodo, semper turpis non, auctor eros. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris dignissim pretium fringilla.',
	leftImgSrc: 'http://placehold.it/800x600',
	rightImgSrc: 'http://placehold.it/800x600',
	objectImgSrc: 'http://placehold.it/800x600',
	videoSrc: '',
};
OBJECT_DATA['lightpillars'] = {
	title: 'Light Pillars',
	leftText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget massa commodo, semper turpis non, auctor eros. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris dignissim pretium fringilla.',
	rightText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget massa commodo, semper turpis non, auctor eros. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris dignissim pretium fringilla.',
	leftImgSrc: 'http://placehold.it/800x600',
	rightImgSrc: 'http://placehold.it/800x600',
	objectImgSrc: 'http://placehold.it/800x600',
	videoSrc: '',
};
OBJECT_DATA['northernlights'] = {
	title: 'Northern Lights',
	leftText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget massa commodo, semper turpis non, auctor eros. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris dignissim pretium fringilla.',
	rightText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget massa commodo, semper turpis non, auctor eros. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris dignissim pretium fringilla.',
	leftImgSrc: 'http://placehold.it/800x600',
	rightImgSrc: 'http://placehold.it/800x600',
	objectImgSrc: 'http://placehold.it/800x600',
	videoSrc: '',
};
OBJECT_DATA['bluehour'] = {
	title: 'Blue Hour',
	leftText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget massa commodo, semper turpis non, auctor eros. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris dignissim pretium fringilla.',
	rightText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget massa commodo, semper turpis non, auctor eros. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris dignissim pretium fringilla.',
	leftImgSrc: 'http://placehold.it/800x600',
	rightImgSrc: 'http://placehold.it/800x600',
	objectImgSrc: 'http://placehold.it/800x600',
	videoSrc: '',
};
OBJECT_DATA['greenflash'] = {
	title: 'Green Flash',
	leftText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget massa commodo, semper turpis non, auctor eros. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris dignissim pretium fringilla.',
	rightText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget massa commodo, semper turpis non, auctor eros. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris dignissim pretium fringilla.',
	leftImgSrc: 'http://placehold.it/800x600',
	rightImgSrc: 'http://placehold.it/800x600',
	objectImgSrc: 'http://placehold.it/800x600',
	videoSrc: '',
};
OBJECT_DATA['mirage'] = {
	title: 'Mirage',
	leftText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget massa commodo, semper turpis non, auctor eros. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris dignissim pretium fringilla.',
	rightText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget massa commodo, semper turpis non, auctor eros. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris dignissim pretium fringilla.',
	leftImgSrc: 'http://placehold.it/800x600',
	rightImgSrc: 'http://placehold.it/800x600',
	objectImgSrc: 'http://placehold.it/800x600',
	videoSrc: '',
};





