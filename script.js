document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault();

    // Corrected: Use .value to get the input values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const templateParams = {
        from_name: name,
        from_email: email,
        message: message,  // Corrected: Use "message" instead of "massage"
    };

    // Corrected: Ensure correct capitalization and prevent duplicate code
    emailJs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", templateParams).then(
        function (response) {
            console.log("SUCCESS!", response.status, response.text);
            document.getElementById("responseMessage").innerText = "Message sent successfully!";
            document.getElementById("contactForm").reset();  // Corrected: Ensure correct spelling
        },
        function (error) {
            console.log("FAILED...", error);
            document.getElementById("responseMessage").innerText = "Failed to send message. Please try again.";
        }
    );
});
