let students = JSON.parse(localStorage.getItem("students")) || [];

const form = document.getElementById("studentForm");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const student = {
        name: document.getElementById("name").value,
        registerNo: document.getElementById("registerNo").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        course: document.getElementById("course").value,
        year: document.getElementById("year").value,
        dob: document.getElementById("dob").value
    };

    students.push(student);

    localStorage.setItem("students", JSON.stringify(students));

    alert("Student enrolled successfully!");

    form.reset();

    displayStudents();
});


function displayStudents(list = students) {

    const table = document.getElementById("studentTable");

    table.innerHTML = "";

    list.forEach((student, index) => {

        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${student.name}</td>
            <td>${student.registerNo}</td>
            <td>${student.email}</td>
            <td>${student.phone}</td>
            <td>${student.course}</td>
            <td>${student.year}</td>
            <td>
                <button class="delete-btn"
                    onclick="deleteStudent(${index})">
                    Delete
                </button>
            </td>
        `;

        table.appendChild(row);
    });
}


function deleteStudent(index) {

    if (confirm("Are you sure you want to delete this student?")) {

        students.splice(index, 1);

        localStorage.setItem("students", JSON.stringify(students));

        displayStudents();
    }
}


function searchStudents() {

    const searchValue =
        document.getElementById("search").value.toLowerCase();

    const filteredStudents = students.filter(student =>
        student.name.toLowerCase().includes(searchValue) ||
        student.registerNo.toLowerCase().includes(searchValue)
    );

    displayStudents(filteredStudents);
}


displayStudents();