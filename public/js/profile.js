document.addEventListener("DOMContentLoaded", function () {


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
    var updateUserModel = () => {
        console.log('works here chief')
        const username = localStorage.getItem("username")
        const email = localStorage.getItem("email")
        let newUsername = document.querySelector('#name-input').value
        if (!newUsername || newUsername === username) {
            newUsername = username
            // return newUsername
        }
        let newEmail = document.querySelector('#email-input').value
        if (!newEmail || newEmail === email) {
            newEmail = email
            // return newEmail
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
            })
            .catch(error => console.error("Error updating profile:", error))
            
    }

    // Calls showProfileInfo() when update btn clicked on the profile-update page
    // if (updateBtn) {
        updateBtn.addEventListener("click", function (event) {
            event.preventDefault()
            updateUserModel();
            showProfileInfo();
            setTimeout(() => {
                window.location.reload()
            }, 100);
        });
    // }

    // Calls showProfileInfo() when cancel btn clicked on the profile-update page
    if (cancelBtn) {
        cancelBtn.addEventListener("click", function (event) {
            event.preventDefault()
            console.log("herheyrehe")
            showProfileInfo();
        });
    }
    showProfileInfo()

});
