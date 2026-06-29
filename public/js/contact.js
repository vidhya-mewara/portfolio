const form = document.getElementById("contactForm");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const subjectInput = document.getElementById("subject");
const messageInput = document.getElementById("message");

const submitBtn = document.getElementById("submitBtn");
const charCount = document.getElementById("charCount");

function validateName() {
    if(nameInput.value.trim().length >=3){
        nameInput.classList.remove("is-invalid");
        nameInput.classList.add("is-valid");
        return true;
    }else{
        nameInput.classList.remove("is-valid");
        nameInput.classList.add("is-invalid");
        return false;
    }
}
function validateEmail() {

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailPattern.test(emailInput.value.trim())) {

        emailInput.classList.remove("is-invalid");
        emailInput.classList.add("is-valid");

        return true;

    } else {

        emailInput.classList.remove("is-valid");
        emailInput.classList.add("is-invalid");

        return false;
    }

}
function validateSubject(){
    if(subjectInput.value.trim() !== ""){
        subjectInput.classList.remove("is-invalid");
        subjectInput.classList.add("is-valid");
        return true;
    } else {
        subjectInput.classList.remove("is-valid");
        subjectInput.classList.add("is-invalid");
        return false;
    }
}
function validateMessage() {

    charCount.textContent = `${messageInput.value.length} / 300`;

    if (messageInput.value.trim().length >= 20) {

        messageInput.classList.remove("is-invalid");
        messageInput.classList.add("is-valid");

        return true;

    } else {

        messageInput.classList.remove("is-valid");
        messageInput.classList.add("is-invalid");

        return false;
    }

}
function validateForm() {

    const valid =
        validateName() &&
        validateEmail() &&
        validateSubject() &&
        validateMessage();

    submitBtn.disabled = !valid;

}
nameInput.addEventListener("input", validateForm);

emailInput.addEventListener("input", validateForm);

subjectInput.addEventListener("input", validateForm);

messageInput.addEventListener("input", validateForm);

form.addEventListener("submit", (event) => {

    if (!validateName() ||
        !validateEmail() ||
        !validateSubject() ||
        !validateMessage()) {

        event.preventDefault();

    }

});