document.addEventListener("DOMContentLoaded", function () {
    // Initialize Telegram Web App
    const tg = window.Telegram.WebApp;

    // Function to display user information
    function displayUserInfo(user) {
        const userInfoDiv = document.getElementById("user-info");
        userInfoDiv.innerHTML = `
            <h2>User Information</h2>
            <p><strong>ID:</strong> ${user.id}</p>
            <p><strong>First Name:</strong> ${user.first_name}</p>
            <p><strong>Last Name:</strong> ${user.last_name || "N/A"}</p>
            <p><strong>Username:</strong> @${user.username || "N/A"}</p>
            <p><strong>Language Code:</strong> ${user.language_code || "N/A"}</p>
            <p><strong>Photo URL:</strong> ${user.photo_url || "N/A"}</p>
            ${user.photo_url ? `<img src="${user.photo_url}" alt="User Photo" width="100">` : ""}
        `;
    }

    // Ensure the Web App is initialized
    tg.ready();

    // Get user information
    const user = tg.initDataUnsafe?.user;

    if (user) {
        displayUserInfo(user);
    } else {
        const userInfoDiv = document.getElementById("user-info");
        userInfoDiv.innerHTML = `
            <p>Failed to load user information. Make sure you are accessing this app from within Telegram.</p>
        `;
    }
});
