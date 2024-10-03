import ClassRoom from './0-classroom.js'

axport default function initializeRooms(){
	const sizes = [9,20,34];
	return sizes.map((el: number) => new ClassRoom(el));
}
