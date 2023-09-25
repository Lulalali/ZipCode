// Function to validate inputs and reveal the secret message
function validateInputs() {
    // Get the inputs by their IDs
    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const zipCode = document.getElementById("zipCode").value.trim();
    
    const messageContainer = document.getElementById("messageContainer");
    
    // Combine the first and last names
    const fullName = firstName + " " + lastName;
    
    // Check if the full name is more than 20 characters
    if (fullName.length > 20) {
        messageContainer.textContent = "Warning: Name and Last Name should be less than 20 characters!";
        return;
    }
    
    // Validate zip code - must be 5 digits
    if (!/^\d{5}$/.test(zipCode)) {
        messageContainer.textContent = "Invalid Zip Code. Must be 5 digits!";
        return;
    }
    
    // If validations pass, show the secret message
    messageContainer.textContent = "Secret Message: You're awesome!";
}

// Keeping the previous palindrome code for reference.
