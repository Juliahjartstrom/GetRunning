// Detta körs när provträningsformuläret skickas in
document.getElementById("bookingForm").addEventListener("submit", function(event) {

    // Inputfält och felmeddelanden
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

    // Kollar om formuläret är giltigt
    let isValid = true;

    // Kontrollerar namn, epost och mobilnummer
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

    // Stoppar formuläret om någon input är felaktig
    if (!isValid) {
        event.preventDefault();
    }

});