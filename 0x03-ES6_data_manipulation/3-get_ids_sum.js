export default function getStudentIdsSum(students = getListStudents()){
	const sum = students.reduce((acc, c) => acc + c.id, 0);
	return sum;
}

