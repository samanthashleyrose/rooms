// Assuming you have an array of logo filenames
const logoVariations = [
    "rooms-logo-angry.PNG",
    "rooms-logo-bday.PNG",
    "rooms-logo-big-smile1.PNG",
    "rooms-logo-glasses.PNG",
    "rooms-logo-harry-potter.PNG",
    "rooms-logo-meh.PNG",
    "rooms-logo-og.PNG",
    "rooms-logo-P1.PNG",
    "rooms-logo-P2.PNG",
    "rooms-logo-silly.PNG",
    "rooms-logo-smile1.PNG",
    "rooms-logo-smile2.PNG",
    "rooms-logo-smile3.PNG",
    "rooms-logo-sunglasses.PNG",
    "rooms-logo-XXP.PNG"
];

// Function to get a random logo from the array
function getRandomLogo() {
    const randomIndex = Math.floor(Math.random() * logoVariations.length);
    return logoVariations[randomIndex];
}

// Function to set the logo on page load or redirect
function setRandomLogo() {
    const logoImg = document.getElementById("logo-img");
    const randomLogo = getRandomLogo();
    logoImg.src = `/assets/imgs/logos/${randomLogo}`;
}

// Call setRandomLogo when the page loads or on page redirect
document.addEventListener("DOMContentLoaded", setRandomLogo);

const goHomeLoser = () => document.location.replace("/home")
document.querySelector("#home-btn").addEventListener("click", goHomeLoser)