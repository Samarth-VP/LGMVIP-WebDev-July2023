const registrations = [];

document.getElementById("regForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const gender = document.getElementById("gender").value;
  const skills = document.getElementById("skills").value;

  const registrationData = {
    name,
    email,
    gender,
    skills,
  };

  registrations.push(registrationData);

  const outputHTML = registrations
    .map(
      (data, index) => `
        <div class="registration-entry">
          <h3>Registration ${index + 1}:</h3>
          <p><strong>Name:</strong> <span>${data.name}</span></p>
          <p><strong>Email:</strong> <span>${data.email}</span></p>
          <p><strong>Gender:</strong> <span>${data.gender}</span></p>
          <p><strong>Skills:</strong> <span>${data.skills}</span></p>
        </div>
      `
    )
    .join("");

  const outputSection = document.getElementById("outputSection");
  outputSection.innerHTML = `<h2>Registration Data:</h2>${outputHTML}`;

  document.getElementById("regForm").reset();
});
