// Pop form functions (Open/ Close)

function openContactForm() {
    // Display the form when the button is clicked
    document.getElementById("contactForm").style.display = "block";
    
    // Hide the button
    document.getElementById("contactButton").style.display = "none";
    document.getElementById("contactImage").style.display = "none";
    document.getElementById("headingForm").style.display = "none";
}

document.querySelector("#contactForm form").addEventListener("submit", function() {
    // Hide the form when the user submits
    closeContactForm();
});

function closeContactForm() {
    // Hide the form when the user submits or closes it
    document.getElementById("contactForm").style.display = "none";
    
    // Show the button
    document.getElementById("contactButton").style.display = "block";
    document.getElementById("contactImage").style.display = "block";
    document.getElementById("headingForm").style.display = "block";
}

 