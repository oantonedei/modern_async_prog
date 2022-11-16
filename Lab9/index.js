window.onload = function () {
  refreshEmp();
};

async function refreshEmp() {
  document.getElementById("display").innerHTML = "";
  const response = await fetch("https://randomuser.me/api/?results=5");
  const employee = await response.json();

  let html = `<h2 style="text-align: center;">Employee List</h2>`;
  employee.results.forEach((emp) => {
    html += `
        <div class="display-container">
          <img class="img" src="${emp.picture.large}" alt="dog" />
          <div class="container">
            <h2>${emp.name.first} ${emp.name.last}</h2>
            <p>
              Phone: ${emp.phone}<br />
              ${emp.email}
            </p>
          </div>
        </div>
        `;
  });
  html += `<button class="btn" onclick="refreshEmp();">
      Refresh
    </button>`;
  document.getElementById("display").innerHTML += html;
}
