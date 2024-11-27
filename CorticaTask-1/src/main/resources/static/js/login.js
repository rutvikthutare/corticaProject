/**
 * 
 */
document.getElementById("loginForm").addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {
        const response = await fetch('/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password }),
        });

        if (response.ok) {
            const user = await response.json();
            localStorage.setItem("user", JSON.stringify(user));
            alert("Login successful!");
            if (user.role === "STUDENT") {
                window.location.href = "/student_dashboard.html";
            } else if (user.role === "TEACHER") {
                window.location.href = "/teacher_dashboard.html";
            } else if (user.role === "ADMIN") {
                window.location.href = "/admin_dashboard.html";
            }
        } else {
            alert("Login failed! Check your credentials.");
        }
    } catch (error) {
        console.error("Error during login:", error);
        alert("An error occurred. Please try again later.");
    }
});

