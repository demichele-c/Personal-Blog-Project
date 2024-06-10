// Added box shadow to all imput boxes.
const inputElements = document.querySelectorAll('input, textarea');

inputElements.forEach(input => {
    input.style.boxShadow = '2px 2px 5px rgba(0, 0, 0, 0.1)'; 
});

const textarea = document.getElementById('content');

// Apply 3D styling to the textarea
textarea.style.border = '1px solid #ccc';
textarea.style.boxShadow = '1px 1px 1px #888';
textarea.style.padding = '5px';

const circleBox = document.getElementById('myCircleBox');

// Added font style to circle-box.
circleBox.style.color = 'white';
circleBox.style.fontSize = '65px';
circleBox.style.fontFamily = 'DM Serif Display, serif'; 
circleBox.style.textShadow = '2px 2px 10px rgba(0, 0, 0, 0.5)';


const h2 = document.querySelector('.input-box-container h2');
// added font style to h2.
h2.style.fontSize = '40px';
h2.style.fontFamily = 'DM Serif Display, serif'; 
h2.style.textAlign = 'center';


function collectUserData() {
// Prevent the default form submission
    $('#blogForm').submit(function(event) {
        event.preventDefault(); 
        
        
                // Get the input values
                var username = $('#title').val();
                var title = $('#author').val();
                var content = $('#content').val();
        
                // Created a new object with the input values
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
                 // Redirect to the blog.html page
                window.location.href = 'blog.html'; 
            });
        };
        collectUserData()
