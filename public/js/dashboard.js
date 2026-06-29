// ===============================
// Dashboard Counter Animation
// ===============================

function animateCounter(id, target) {

    const counter = document.getElementById(id);

    let count = 0;

    const speed = 40;

    const interval = setInterval(() => {

        count++;

        counter.textContent = count;

        if (count >= target) {

            clearInterval(interval);

        }

    }, speed);

}

animateCounter("projectCount", 4);
animateCounter("skillCount", 15);


// ===============================
// Greeting Message
// ===============================

const greeting = document.getElementById("greeting");

if (greeting) {

    const hour = new Date().getHours();

    let message = "";

    if (hour < 12) {

        message = "Good Morning ☀️";

    } else if (hour < 18) {

        message = "Good Afternoon 🌤️";

    } else {

        message = "Good Evening 🌙";

    }

    greeting.textContent = message;

}


// ===============================
// Current Date
// ===============================

const today = document.getElementById("today");

if (today) {

    const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    };

    today.textContent = new Date().toLocaleDateString("en-US", options);

}