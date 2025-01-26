export default function createIteratorObject(report) {
  let Employees = [];
  for (const item of Object.values(report.Employees)) {
    Employees = [
      ...Employees,
      ...item,
    ];
  }
  return Employees;
}

