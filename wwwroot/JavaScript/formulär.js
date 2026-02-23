document.getElementById("bookingForm").addEventListener("submit", function(event) {

    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let phone = document.getElementById("phone");

    let nameError = document.getElementById("nameError");
    let emailError = document.getElementById("emailError");
    let phoneError = document.getElementById("phoneError");

    nameError.textContent = "";
    emailError.textContent = "";
    phoneError.textContent = "";

    name.classList.remove("input-error");
    email.classList.remove("input-error");
    phone.classList.remove("input-error");

    let isValid = true;

    if (name.value.trim() === "") {
        nameError.textContent = "Vänligen fyll i ditt namn.";
        name.classList.add("input-error");
        isValid = false;
    }

    if (email.value.trim() === "") {
        emailError.textContent = "Vänligen fyll i din e-postadress.";
        email.classList.add("input-error");
        isValid = false;
    } else if (!email.value.includes("@")) {
        emailError.textContent = "Ogiltig e-postadress.";
        email.classList.add("input-error");
        isValid = false;
    }

    if (phone.value.trim() === "") {
        phoneError.textContent = "Vänligen fyll i ditt telefonnummer.";
        phone.classList.add("input-error");
        isValid = false;
    }

    if (!isValid) {
        event.preventDefault();
    }

});