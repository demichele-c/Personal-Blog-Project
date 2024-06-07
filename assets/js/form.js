
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
        
        
                // Get the input values
                var username = $('#title').val();
                var title = $('#author').val();
                var content = $('#content').val();
        
                // Create a new object with the input values
                var newData = {
                    username: username,
                    title: title,
                    content: content
                };
                console.log(newData);
                // Retrieve existing data from local storage or initialize an empty array
                var savedData = JSON.parse(localStorage.getItem('savedData')) || [];
        
                // Add the new data object to the array
                savedData.push(newData);
        
                // Save the updated array back to local storage
                localStorage.setItem('savedData', JSON.stringify(savedData));
        
                // Clear the form fields
                $('#title').val('');
                $('#author').val('');
                $('#content').val('');
                window.location.href = 'blog.html'; // Redirect to the blog.html page
            });
        });
        
