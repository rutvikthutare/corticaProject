/**
 * 
 */
document.getElementById("markAttendance").addEventListener("click", async () => {
    const response = await fetch('/api/attendance/mark', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId: localStorage.getItem("userId") })
    });

    if (response.ok) {
        alert("Attendance marked successfully!");
    } else {
        alert("Failed to mark attendance.");
    }
});

document.getElementById("viewHistory").addEventListener("click", async () => {
    const userId = JSON.parse(localStorage.getItem("user")).id;
    const response = await fetch(`/api/attendance/history/${userId}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
        const history = await response.json();
        const historyTableBody = document.querySelector("#historyTable tbody");
        historyTableBody.innerHTML = "";

        history.forEach(record => {
            const row = `
                <tr>
                    <td>${record.date}</td>
                    <td>${record.time}</td>
                    <td><img src="${record.selfieUrl}" alt="Selfie" width="50"></td>
                </tr>
            `;
            historyTableBody.innerHTML += row;
        });

        document.getElementById("attendanceHistory").style.display = "block";
    } else {
        alert("Failed to fetch attendance history.");
    }
});

document.getElementById("logout").addEventListener("click", () => {
    localStorage.clear();
    window.location.href = "/login.html";
});
