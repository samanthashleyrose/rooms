document.addEventListener("DOMContentLoaded", function () {

    const userInfo = () => fetch("/rooms/users/", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
    })
        .then(userInfo => userInfo.json())
        .then(userObject => {
            console.log(userObject)
            return userObject
        })
    userInfo()


    const updateProfileBtn = document.getElementById("edit-profile-btn");
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

    //function to update user model in the db
    const updateUserModel = () => {
        console.log('works here chief')
        const newUsername = document.querySelector('#name-input').value
        if (!newUsername || newUsername === userObject.name) {
            newUsername = userObject.name
            return newUsername
        }
        const newEmail = document.querySelector('#email-input').value
        if (!newEmail || newEmail === userObject.email) {
            newEmail = userObject.name
            return newEmail
        }
        fetch("/rooms/users/update-profile", {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: newUsername,
                email: newEmail
            }),
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                if (data.success) {
                    showProfileInfo();
                } else {
                    const errorMessageElement = document.getElementById("error-message");
                    if (errorMessageElement) {
                        errorMessageElement.textContent = data.message;
                    }
                }
            })
            .catch(error => console.error("Error updating profile:", error))
    }

    // Calls showProfileInfo() when update btn clicked on the profile-update page
    if (updateBtn) {
        console.log("workshere420!")
        updateBtn.addEventListener("click", function (event) {
            event.preventDefault()
            console.log("workshere69!")
            updateUserModel();
            showProfileInfo();
        });
    }

    // Calls showProfileInfo() when cancel btn clicked on the profile-update page
    if (cancelBtn) {
        cancelBtn.addEventListener("click", function (event) {
            event.preventDefault()
            console.log("herheyrehe")
            showProfileInfo();
        });
    }
    showProfileInfo()

    // Function to handle updating the profile
    // const updateProfile = () => {
    //     const profileUpdateForm = document.getElementById("profile-update-form");
    //     const formData = new FormData(profileUpdateForm);

    //     // Make an AJAX request to send the updated data to the server
    // };

});
// console.log(user)