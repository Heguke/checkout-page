// Validate Form
const submit = document.getElementById("submit");

submit.addEventListener('click', validate);

function validate(e) {
    e.preventDefault();

    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const name = document.getElementById("name");
    let valid = true;

    if (!email.value && !phone.value && !name.value) {
        const nameError = document.getElementById("nameError");
        nameError.classList.add("visible");
        email.classList.add("invalid");
        phone.classList.add("invalid");
        name.classList.add("invalid");
        nameError.setAttribute("aria-hidden", false);
        nameError.setAttribute("aria-invalid", true);
    }
    return valid;
}