const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.onclick = () => {
    navMenu.classList.toggle("active");
};


// Open Social Media Link
function openLink(platform) {
    const links = {
        github: "https://github.com/ladvaparth",
        linkedin: "https://www.linkedin.com/in/parth-ladva-9028a2315/",
        instagram: "https://instagram.com/parth_ladva_1704",

    };

    window.open(links[platform], "_blank");
}

const form = document.getElementById("contactForm");
const statusTxt = document.getElementById("formStatus");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    let data = new FormData(form);

    statusTxt.innerHTML = "Sending...";

    fetch(form.action, {
        method: "POST",
        body: data,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            statusTxt.innerHTML = "Message sent successfully! 🎉";
            form.reset();
        } else {
            statusTxt.innerHTML = "Oops! Something went wrong.";
        }
    }).catch(error => {
        statusTxt.innerHTML = "Network error. Try again.";
    });
});
