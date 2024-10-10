import { constructCdnUrl } from '../../../utils';

export const SKYBOX_TEXTURE_URL: string[] = [
	'/public/background/px.jpg',
	'/public/background/nx.jpg',
	'/public/background/py.jpg',
	'/public/background/ny.jpg',
	'/public/background/pz.jpg',
	'/public/background/nz.jpg',
].map(url => constructCdnUrl(url));

export const SKYBOX_BLURRINESS = 0.022;
export const SKYBOX_RESOLUTION = 1024;
