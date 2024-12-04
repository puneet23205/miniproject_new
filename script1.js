function switchSemester(semesterId) {
  const allSemesters = document.querySelectorAll('.semester-container');
  const buttons = document.querySelectorAll('.sidebar button');

  allSemesters.forEach(semester => semester.classList.add('hidden'));
  buttons.forEach(button => button.classList.remove('active'));

  document.getElementById(semesterId).classList.remove('hidden');
  document.querySelector(`.sidebar button[onclick="switchSemester('${semesterId}')"]`).classList.add('active');

  document.getElementById('result').textContent = '';
}

function comingSoon() {
  document.getElementById('result').textContent = 'This semester feature is coming soon!';
}

function calculateGrade(marks) {
  if (marks >= 90) return 10;
  if (marks >= 80) return 9;
  if (marks >= 70) return 8;
  if (marks >= 60) return 7;
  if (marks >= 50) return 6;
  if (marks >= 45) return 5;
  if (marks >= 40) return 4;
  return 0; // Fail
}

function calculateCGPA(semester) {
  const subjects = semester === 1 ? [
      { marks: parseFloat(document.getElementById('math1').value), credits: 4 },
      { marks: parseFloat(document.getElementById('physics').value), credits: 4 },
      { marks: parseFloat(document.getElementById('electrical').value), credits: 3 },
      { marks: parseFloat(document.getElementById('evs').value), credits: 3 },
      { marks: parseFloat(document.getElementById('pps').value), credits: 3 },
      { marks: parseFloat(document.getElementById('graphics_lab').value), credits: 2 },
      { marks: parseFloat(document.getElementById('physics_lab').value), credits: 1 },
      { marks: parseFloat(document.getElementById('electrical_lab').value), credits: 1 },
      { marks: parseFloat(document.getElementById('pps_lab').value), credits: 1 }
  ] : [
      { marks: parseFloat(document.getElementById('math2').value), credits: 4 },
      { marks: parseFloat(document.getElementById('chemistry').value), credits: 4 },
      { marks: parseFloat(document.getElementById('electronics').value), credits: 3 },
      { marks: parseFloat(document.getElementById('mechanical').value), credits: 3 },
      { marks: parseFloat(document.getElementById('soft_skill').value), credits: 3 },
      { marks: parseFloat(document.getElementById('chemistry_lab').value), credits: 1 },
      { marks: parseFloat(document.getElementById('workshop_lab').value), credits: 2 },
      { marks: parseFloat(document.getElementById('electronics_lab').value), credits: 1 },
      { marks: parseFloat(document.getElementById('soft_skill_lab').value), credits: 1 }
  ];

  // Validate input
  for (const subject of subjects) {
      if (isNaN(subject.marks) || subject.marks < 0 || subject.marks > 100) {
          document.getElementById('result').textContent = 'Please enter valid marks (0-100) for all subjects.';
          return;
      }
  }

  // Calculate grade points for each subject
  const totalCredits = subjects.reduce((sum, subject) => sum + subject.credits, 0);
  const totalGradePoints = subjects.reduce((sum, subject) => {
      const grade = calculateGrade(subject.marks);
      return sum + (grade * subject.credits);
  }, 0);

  // Compute CGPA
  const cgpa = totalGradePoints / totalCredits;

  // Display CGPA
  document.getElementById('result').textContent = `Your CGPA for Semester ${semester} is: ${cgpa.toFixed(2)}`;
}

