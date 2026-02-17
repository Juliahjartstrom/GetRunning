document.getElementById("bookingForm").addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();

    let nameError = document.getElementById("nameError");
    let emailError = document.getElementById("emailError");
    let phoneError = document.getElementById("phoneError");
    let successMessage = document.getElementById("successMessage");

    nameError.textContent = "";
    emailError.textContent = "";
    phoneError.textContent = "";
    successMessage.textContent = "";

    let isValid = true;

    if (name === "") {
        nameError.textContent = "Namn är obligatoriskt.";
        isValid = false;
    }

    if (email === "") {
        emailError.textContent = "E-post är obligatoriskt.";
        isValid = false;
    } else if (!email.includes("@")) {
        emailError.textContent = "Ogiltig e-postadress.";
        isValid = false;
    }

    if (phone === "") {
        phoneError.textContent = "Telefonnummer är obligatoriskt.";
        isValid = false;
    }

    if (isValid) {
        successMessage.textContent = "Tack! Din bokning har skickats. Vi återkommer inom 24 timmar.";
        document.getElementById("bookingForm").reset();
    }

});
