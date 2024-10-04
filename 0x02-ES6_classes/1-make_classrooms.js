import ClassRoom from './0-classroom.js';

export default function initializeRooms(){
	const sizes = [9,20,34];
	return sizes.map((el) => new ClassRoom(el));
}
