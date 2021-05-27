const add = document.querySelector("#add");
const courseCode = document.querySelector("#course-code");
const unitLoad = document.querySelector("#unit-load");
const grade = document.querySelector("#grade");
const tbody = document.querySelector("#tbody");
const tfoot = document.querySelector("#tfoot");
const table = document.querySelector("#table");
const calcGp = document.querySelector("#calc-gp");
const clear = document.querySelector("#clear");

let gpArry = [];

add.addEventListener("click", () => {
  if (
    courseCode.selectedIndex === 0 ||
    unitLoad.selectedIndex === 0||
    grade.selectedIndex === 0
  ) {
    alert("Please Fill All Fields");
  } else {
    const tr = document.createElement("tr");
    const tdCourseCode = document.createElement("td");
    tdCourseCode.innerHTML = courseCode.value;
    const tdUnitLoad = document.createElement("td");
    tdUnitLoad.innerHTML = unitLoad.value;
    const tdGrade = document.createElement("td");
    tdGrade.innerHTML = grade.options[grade.selectedIndex].text;
    tr.appendChild(tdCourseCode);
    tr.appendChild(tdUnitLoad);
    tr.appendChild(tdGrade);
    tbody.appendChild(tr);
    table.classList.remove("display-none");
    calcGp.classList.remove("display-none");
    clear.classList.remove("display-none");
    gpArry.push({
      unitLoad: unitLoad.options[unitLoad.selectedIndex].value,
      grade: grade.options[grade.selectedIndex].value,
    });
    console.log(gpArry);
    courseCode.selectedIndex = "0";
    unitLoad.selectedIndex = "0";
    grade.selectedIndex = "0";
  }
});

calcGp.addEventListener("click", () => {
  let unitLoads = 0,
  gradesAverage=gpArry.length,
    productGrades = 0;
    

  gpArry.forEach((result) => {
    unitLoads += parseInt(result.unitLoad);

    productGrades += parseInt(result.grade);
   
  });
  const tr = document.createElement("tr");

  tdTotalUnitLoad = document.createElement("td");
  tdTotalUnitLoad.innerHTML = `your total credit is ${unitLoads}`;

  tdGpa = document.createElement("td");
  tdGpa.setAttribute("colspan", "2");
  tdGpa.innerHTML = `your Average is ${(productGrades/gradesAverage).toFixed(2)} `;

  tr.appendChild(tdTotalUnitLoad);
  tr.appendChild(tdGpa);
    if (tfoot.querySelector("tr") !== null) {
        tfoot.querySelector("tr").remove();
    }
  tfoot.appendChild(tr);
});

clear.addEventListener("click", () => {
  gpArry = [];
  tbody.querySelectorAll("*").forEach((child) => child.remove());
  if (tfoot.querySelector("tr") !== null) {
    tfoot.querySelector("tr").remove();
  }

  table.classList.add("display-none");
  calcGp.classList.add("display-none");
  clear.classList.add("display-none");
});
