
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

        // Generate a new div for the new data set
        var newDiv = $('<div>').addClass('dataDiv');
        var usernamePara = $('<p>').text('Username: ' + newData.username);
        var titlePara = $('<p>').text('Title: ' + newData.title);
        var contentPara = $('<p>').text('Content: ' + newData.content);

        newDiv.append(usernamePara, titlePara, contentPara);
        $('#dataContainer').append(newDiv);

        window.location.href = 'blog.html'; // Redirect to the blog.html page
    });
});