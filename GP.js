// Get elements
const coursesDiv = document.getElementById("courses");
const addCourseBtn = document.getElementById("addCourseBtn");
const calcBtn = document.getElementById("calcBtn");
const resultBox = document.getElementById("result");


// --- FUNCTION: Add a new course row ---
function addCourse() {

    // Create a container for one course
    const row = document.createElement("div");
    row.className = "course-row";

    // HTML inside the row
    row.innerHTML = `
        <input type="text" class="course-name" placeholder="Course Name">

        <select class="grade">
            <option value="">Grade</option>
            <option value="5">A</option>
            <option value="4">B</option>
            <option value="3">C</option>
            <option value="2">D</option>
            <option value="1">E</option>
            <option value="0">F</option>
        </select>

        <select class="unit">
            <option value="">Unit</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
        </select>

        <button class="remove">x</button>
    `;

    // Remove row when remove button is clicked
    row.querySelector(".remove").onclick = () => {
        row.remove();
    };

    // Add row to the page
    coursesDiv.appendChild(row);
}


// --- FUNCTION: Calculate CGPA ---
function calculateCGPA() {
    const grades = document.querySelectorAll(".grade");
    const units = document.querySelectorAll(".unit");

    let totalPoints = 0;
    let totalUnits = 0;

    for (let i = 0; i < grades.length; i++) {
        const grade = Number(grades[i].value);
        const unit = Number(units[i].value);

        if (!grade && grade !== 0) continue;
        if (!unit) continue;

        totalPoints += grade * unit;
        totalUnits += unit;
    }

    if (totalUnits === 0) {
        resultBox.innerHTML = "Enter valid inputs";
        return;
    }

    const cgpa = (totalPoints / totalUnits).toFixed(2);
    resultBox.innerHTML = "Your CGPA: <strong>" + cgpa + "</strong>";
}


// --- BUTTON EVENTS ---
addCourseBtn.onclick = addCourse;
calcBtn.onclick = calculateCGPA;