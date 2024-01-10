document.addEventListener("DOMContentLoaded", function () {
    const updateProfileBtn = document.getElementById("update-profile-btn");
    const updateBtn = document.getElementById("update-btn");
    const cancelBtn = document.getElementById("cancel-btn");

    // Shows the profile-info partial on profile.handlebars
    const showProfileInfo = () => {
        const profileInfo = document.getElementById("profile-info");
        const profileUpdate = document.getElementById("profile-update");
        if (profileInfo && profileUpdate) {
            profileInfo.style.display = "block";
            profileUpdate.style.display = "none";
        }
    };

    // Shows the profile-update partial on profile.handlebars
    const showProfileUpdate = () => {
        const profileInfo = document.getElementById("profile-info");
        const profileUpdate = document.getElementById("profile-update");
        if (profileInfo && profileUpdate) {
            profileInfo.style.display = "none";
            profileUpdate.style.display = "block";
        }
    };

    // Calls showProfileUpdate() when update profile btn clicked on the profile-info page
    if (updateProfileBtn) {
        updateProfileBtn.addEventListener("click", function () {
            showProfileUpdate();
        });
    }

    // Calls showProfileInfo() when update btn clicked on the profile-update page
    if (updateBtn) {
        updateBtn.addEventListener("submit", function () {
            showProfileInfo();
        });
    }

    // Calls showProfileInfo() when cancel btn clicked on the profile-update page
    if (cancelBtn) {
        cancelBtn.addEventListener("click", function () {
            showProfileInfo();
        });
    }
});

const goHomeLoser = () => document.location.replace("/home")
document.querySelector("#home-btn").addEventListener("click", goHomeLoser)