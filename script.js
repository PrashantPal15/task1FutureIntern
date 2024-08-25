document.addEventListener('DOMContentLoaded', function() {
    // Get the contact link and contact section
    const contactLink = document.getElementById('contactLink');
    const contactSection = document.getElementById('contactSection');
     
    // Define the contact information
    const contactInfo = `
        <h2>Contact Us</h2>
        <p>Email: <a href="mailto:support@thegreatkart.com">support@thegreatkart.com</a></p>
        <p>Phone: <a href="tel:911234567890">+1 0751 567-890</a></p>
        <p>X: @X.Kartgraet</p>
    `;

    // Add click event listener to the contact link
    contactLink.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior

        // Display the contact information
        contactSection.innerHTML = contactInfo;
        contactSection.style.display = 'block'; // Show the contact section

        // Optionally, scroll to the contact section
        contactSection.scrollIntoView({ behavior: 'smooth' });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    // Get the contact link and contact section
    const aboutLink = document.getElementById('aboutLink');
    const aboutLinkt = document.getElementById('abouttSection');
     
    // Define the contact information
    const contactInfo = `
        <h2>Contact Us</h2>
        <p>Email: <a href="mailto:support@thegreatkart.com">support@thegreatkart.com</a></p>
        <p>Phone: <a href="tel:911234567890">+1 0751 567-890</a></p>
        <p>X: @X.Kartgraet</p>
    `;
    

});

