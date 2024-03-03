function myFunction() {
  const input = document.getElementById("myInput");
  const table = document.getElementById("fault");
  const request = document.getElementById("request");
  const acc = document.getElementById("acc");

  const filter = input.value.toUpperCase();
  const rows = table.getElementsByTagName("tr");

  for (let i = 0; i < rows.length; i++) {
    const td = rows[i].getElementsByTagName("td")[0]; // Assuming you want to search by the first column (Name)
    if (td) {
      const txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        rows[i].style.display = ""; // Show matching rows
      } else {
        rows[i].style.display = "none"; // Hide non-matching rows
      }
    }
  }
}

const tables = document.getElementsByTagName("table");
const input = document.getElementById("myInput");

function fault() {
  const fault = document.getElementById("fault");
  for (let i = 0; i < tables.length; i++) {
    if (tables[i] == fault) {
      tables[i].style.display = "block";
      input.style.backgroundColor = "#bb2d3b";
      input.style.color = "white";
    } else {
      tables[i].style.display = "none";
    }
  }
}
function request() {
  const request = document.getElementById("request");
  for (let i = 0; i < tables.length; i++) {
    if (tables[i] == request) {
      tables[i].style.display = "block";
      input.style.backgroundColor = "#ffc107";
      input.style.color = "#000";
    } else {
      tables[i].style.display = "none";
    }
  }
}
function acc() {
  const acc = document.getElementById("acc");
  for (let i = 0; i < tables.length; i++) {
    if (tables[i] == acc) {
      tables[i].style.display = "block";
      input.style.backgroundColor = "#198754";
      input.style.color = "white";
    } else {
      tables[i].style.display = "none";
    }
  }
}
