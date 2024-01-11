document.addEventListener("DOMContentLoaded", function () {
    const updateProfileBtn = document.getElementById("update-profile-btn");
    const updateBtn = document.getElementById("update-btn");
    const cancelBtn = document.getElementById("cancel-btn");

    // Shows the profile-info partial on profile.handlebars
    const showProfileInfo = () => {
        const profileInfo = document.getElementById("profile-info");
        const profileUpdate = document.getElementById("profile-update");
        if (profileInfo && profileUpdate) {
            profileInfo.style.display = "flex";
            profileUpdate.style.display = "none";
        }
    };

    // Shows the profile-update partial on profile.handlebars
    const showProfileUpdate = () => {
        const profileInfo = document.getElementById("profile-info");
        const profileUpdate = document.getElementById("profile-update");
        if (profileInfo && profileUpdate) {
            profileInfo.style.display = "none";
            profileUpdate.style.display = "flex";
        }
    };

    // Calls showProfileUpdate() when update profile btn clicked on the profile-info page
    if (updateProfileBtn) {
        updateProfileBtn.addEventListener("click", function (event) {
            event.preventDefault()
            showProfileUpdate();
        });
    }

    // Calls showProfileInfo() when update btn clicked on the profile-update page
    if (updateBtn) {
        updateBtn.addEventListener("submit", function (event) {
            event.preventDefault()
            showProfileInfo();
        });
    }

    // Calls showProfileInfo() when cancel btn clicked on the profile-update page
    if (cancelBtn) {
        cancelBtn.addEventListener("click", function () {
            showProfileInfo();
        });
    }
    showProfileInfo()

    // Function to handle updating the profile
    const updateProfile = () => {
        const profileUpdateForm = document.getElementById("profile-update-form");
        const formData = new FormData(profileUpdateForm);

        // Make an AJAX request to send the updated data to the server
        fetch("/rooms/users/update-profile", {
            method: "POST",
            body: {
                name: document.querySelector('#name-input').value,
                email: document.querySelector('#email-input').value
            },
        })
            .then(response => response.json())
            .then(data => {
                // Handle the response from the server, e.g., show success or error messages
                console.log(data);
                if (data.success) {
                    showProfileInfo();
                    // Optionally update the displayed information on profile-info page
                    // You might need to fetch the updated user data and update the DOM
                } else {
                    // Display an error message to the user
                    const errorMessageElement = document.getElementById("error-message");
                    if (errorMessageElement) {
                        errorMessageElement.textContent = data.message;
                    }
                }
            })
            .catch(error => console.error("Error updating profile:", error));
    };

});
