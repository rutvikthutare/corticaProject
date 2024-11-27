/**
 * 
 */
document.getElementById("viewAttendance").addEventListener("click", async () => {
    const response = await fetch('/api/teacher/attendance', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
        const attendance = await response.json();
        const attendanceTableBody = document.querySelector("#attendanceTable tbody");
        attendanceTableBody.innerHTML = "";

        attendance.forEach(record => {
            const row = `
                <tr>
                    <td>${record.studentName}</td>
                    <td>${record.date}</td>
                    <td>${record.time}</td>
                    <td><img src="${record.selfieUrl}" alt="Selfie" width="50"></td>
                </tr>
            `;
            attendanceTableBody.innerHTML += row;
        });

        document.getElementById("attendanceList").style.display = "block";
    } else {
        alert("Failed to fetch attendance.");
    }
});

document.getElementById("viewStudents").addEventListener("click", async () => {
    const response = await fetch('/api/teacher/students', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
        const students = await response.json();
        const studentsTableBody = document.querySelector("#studentsTable tbody");
        studentsTableBody.innerHTML = "";

        students.forEach(student => {
            const row = `
                <tr>
                    <td>${student.name}</td>
                    <td>${student.email}</td>
                </tr>
            `;
            studentsTableBody.innerHTML += row;
        });

        document.getElementById("studentList").style.display = "block";
    } else {
        alert("Failed to fetch students.");
    }
});

document.getElementById("logout").addEventListener("click", () => {
    localStorage.clear();
    window.location.href = "/login.html";
});
