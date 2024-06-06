
const inputElements = document.querySelectorAll('input, textarea');

inputElements.forEach(input => {
    input.style.boxShadow = '2px 2px 5px rgba(0, 0, 0, 0.1)'; 
});
// Added box shadow to all imput boxes.
const textarea = document.getElementById('content');

// Apply 3D styling to the textarea
textarea.style.border = '1px solid #ccc';
textarea.style.boxShadow = '1px 1px 1px #888';
textarea.style.padding = '5px';

const circleBox = document.getElementById('myCircleBox');

circleBox.style.color = 'white';
circleBox.style.fontSize = '60px';
circleBox.style.fontWeight = 'bold'; 
circleBox.style.fontFamily = 'Arial, sans-serif'; 
circleBox.style.textShadow = '2px 2px 10px rgba(0, 0, 0, 0.5)';
// Added font style to circle-box.

const h2 = document.querySelector('.input-box-container h2');

h2.style.fontSize = '40px';
h2.style.fontFamily = 'Arial, sans-serif'; 
h2.style.textAlign = 'center';
// added font style to h2.

const modeToggle = document.getElementById('mode-toggle');
const body = document.body;

modeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    updateButtonContent();
});

function updateButtonContent() {
    const currentMode = body.classList.contains('dark-mode') ? 'dark' : 'light';
    modeToggle.textContent = currentMode === 'dark' ? '🌞' : '🌙';
}
// added light and dark mode functions.

$(document).ready(function() {
    // Event listener for form submission
    $('#blogForm').submit(function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Get the values from the input fields
        var username = $('#title').val();
        var title = $('#author').val();
        var content = $('#content').val();

        // Create an object to store the form data
        var formData = {
            username: username,
            title: title,
            content: content
        };

        // Store the form data in local storage
        localStorage.setItem('blogData', JSON.stringify(formData));

        // Clear the form fields after storing the data
        $('#blogForm')[0].reset();

        // Redirect to the blog.html page
        window.location.href = 'blog.html'; // Redirect to the blog.html page
    });
});