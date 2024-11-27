/**
 * 
 */
document.getElementById("viewUsers").addEventListener("click", async () => {
    const response = await fetch('/api/admin/users', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
        const users = await response.json();
        const usersTableBody = document.querySelector("#usersTable tbody");
        usersTableBody.innerHTML = "";

        users.forEach(user => {
            const row = `
                <tr>
                    <td>${user.name}</td>
                    <td>${user.email}</td>
                    <td>${user.role}</td>
                    <td><button onclick="disableUser(${user.id})">Disable</button></td>
                </tr>
            `;
            usersTableBody.innerHTML += row;
        });

        document.getElementById("usersList").style.display = "block";
    } else {
        alert("Failed to fetch users.");
    }
});

async function disableUser(userId) {
    const response = await fetch(`/api/admin/users/${userId}/disable`, {
        method: 'PUT',
    });

    if (response.ok) {
        alert("User disabled successfully.");
        document.getElementById("viewUsers").click(); // Refresh user list
    } else {
        alert("Failed to disable user.");
    }
}

document.getElementById("logout").addEventListener("click", () => {
    localStorage.clear();
    window.location.href = "/login.html";
});
