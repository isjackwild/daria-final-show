import MobileDetect from 'mobile-detect';
const md = new MobileDetect(window.navigator.userAgent);
const mobile = md.mobile() ? true : false;

export const SKYBOX_RADIUS = 60;
export const SKYBOX_SEGS = 30;

export const CAMERA_FOV = 95;
export const CAMERA_ORBIT_OFFSET = 0.1;
export const CAMERA_MOVE_STEP = -0.00066;


// export const SPHEREMAP_SRC = 'assets/maps/Nicopanda_360_V05--compressed.jpg';
// export const BUBBLE_SRC = 'assets/maps/bubbles/BUBBLE-all-transparent.png';
// export const BUBBLE_PINK_SRC = 'assets/maps/bubbles/BUBBLE-pink.png';
// export const ICON_LINK_SRC = 'assets/maps/bubbles/Icon-LINK.png';
// export const ICON_PLUS_SRC = 'assets/maps/bubbles/Icon-NICOPANDA.png';
// export const ICON_PLAY_SRC = 'assets/maps/bubbles/Icon-PLAY.png';
// export const VIDEO_SRC_SD = 'assets/video/OKgrl_x_Nicopanda-SD.mp4';
// export const VIDEO_SRC_HD = 'assets/video/OKgrl_x_Nicopanda-HD.mp4';
// export const GEOM_SRC = 'assets/geom/Nicopanda-objects5.dae';

export const MAPS_PATH = 'assets/maps/';
export const ENV_MAP_SRCS = {};
ENV_MAP_SRCS['corridor'] = 'corridor.jpg';
ENV_MAP_SRCS['outside'] = 'outside.jpg';
ENV_MAP_SRCS['bathroom'] = 'bathroom.jpg';
ENV_MAP_SRCS['kitchen'] = 'kitchen.jpg';
ENV_MAP_SRCS['livingroom'] = 'livingroom.jpg';