function gradeElseIf(marks) {
  if (marks >= 76 && marks <= 100) return "A";
  else if (marks >= 61 && marks <= 75) return "B";
  else if (marks >= 56 && marks <= 60) return "C";
  else if (marks >= 41 && marks <= 56) return "D";
  else return "Failed";
}

function gradeSwitch(marks) {
  switch (true) {
    case marks >= 76 && marks <= 100:
      return "A";
    case marks >= 61 && marks <= 75:
      return "B";
    case marks >= 56 && marks <= 60:
      return "C";
    case marks >= 41 && marks <= 56:
      return "D";
    default:
      return "Failed";
  }
}

console.log(gradeElseIf(78));
console.log(gradeSwitch(35));