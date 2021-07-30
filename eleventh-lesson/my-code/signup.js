const registration = document.querySelector("#registration_form")
registration.addEventListener("submit", function(e) {
    // window.location.href = "checkout.html?firstname=" + document.getElementsByName("first_name")[0].value + "lastname=" + document.getElementsByName("last_name")[0].value;

    alert(document.getElementsByName("first_name")[0].value + "lastname=" + document.getElementsByName("last_name")[0].value);
    e.preventDefault();
})

const lastNameInput = document.getElementsByName("last_name")[0].value