export default function getStudentsByLocation(city){
	let students = getListStudents()
	const result = students.filter((el) => el.location == city);
	return result;
}
