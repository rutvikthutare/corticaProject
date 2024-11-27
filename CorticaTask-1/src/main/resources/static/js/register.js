/**
 * 
 */
document.getElementById("registerForm").addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const role = document.getElementById("role").value;

    try {
        const response = await fetch('/api/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email, password, role }),
        });

        if (response.ok) {
            alert("Registration successful! You can now log in.");
            window.location.href = "/login.html";
        } else {
            alert("Registration failed! Please try again.");
        }
    } catch (error) {
        console.error("Error during registration:", error);
        alert("An error occurred. Please try again later.");
    }
});
