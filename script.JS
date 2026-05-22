function scrollToBooking(){

    document.getElementById("booking")
    .scrollIntoView({
        behavior: "smooth"
    });

}

const form =
document.getElementById("bookingForm");

form.addEventListener("submit", function(e){

    e.preventDefault();

    let name =
    document.getElementById("name").value;

    let email =
    document.getElementById("email").value;

    let phone =
    document.getElementById("phone").value;

    let date =
    document.getElementById("date").value;

    let message =
    document.getElementById("message");

    if(name === "" ||
       email === "" ||
       phone === "" ||
       date === ""){

        message.innerHTML =
        "Please fill all fields";

        message.style.color = "red";
    }

    else{

        message.innerHTML =
        "Appointment Booked Successfully";

        message.style.color = "green";

        form.reset();
    }

});