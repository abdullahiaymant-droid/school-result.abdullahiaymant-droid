async function showResult() {
  const name = document.getElementById("studentName").value.trim();
  const resultDiv = document.getElementById("result");

  if(!name) {
    resultDiv.innerHTML = "<p>Please enter your name</p>";
    return;
  }

  // Fetch students from data.json
  const response = await fetch('data.json');
  const students = await response.json();

  const student = students.find(s => s.name.toLowerCase() === name.toLowerCase());

  if(student) {
    resultDiv.innerHTML = `
      <h2>Result for ${student.name}</h2>
      <p>Class: ${student.class}</p>
      <p>Math: ${student.math}</p>
      <p>English: ${student.english}</p>
      <p>Science: ${student.science}</p>
    `;
  } else {
    resultDiv.innerHTML = "<p>Student not found</p>";
  }
}
