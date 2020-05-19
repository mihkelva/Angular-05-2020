

function submitForm(event) {
    event.preventDefault();
    var formFirstName = document.forms["nameForm"]["firstname"].value;
    console.log(formFirstName);
    var formLastName = document.forms["nameForm"]["lastname"].value;
    console.log(formLastName);

    localStorage.setItem("firstname", formFirstName);
    localStorage.setItem("lastname", formLastName);

    window.location.href = "review.html"; 
}