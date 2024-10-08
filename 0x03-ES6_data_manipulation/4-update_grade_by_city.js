export default function updateStudentGradeByCity(Students, city, newGrades) {
  const result = Students.filter((student) => student.location === city);
  for (const student of result) {
    student.grade = 'N/A';
  }
  const newStudents = result.map((student) => {
    const single = student;
    for (const grade of newGrades) {
      if (single.id === grade.studentId) {
        single.grade = grade.grade;
      }
    }
    return single;
  });
  return newStudents;
}
