const tables = document.getElementsByTagName("table");
const input = document.getElementById("myInput");
let SearchWord;
function fault() {
  const fault = document.getElementById("fault");
  SearchWord = 0;
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
  SearchWord = 1;
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
  SearchWord = 2;
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

function searchTable() {
  var rows = tables[SearchWord].getElementsByTagName("tr");
  for (var i = 0; i < rows.length; i++) {
    var cells = rows[i].getElementsByTagName("td");

    for (var j = 0; j < cells.length; j++) {
      if (cells[j].innerHTML.includes(input.value)) {
        rows[i].style.display = "grid";
        break;
      } else {
        rows[i].style.display = "none";
      }
    }
  }
}
