$(document).ready(function() {
    // Retrieve the stored data from local storage
    var storedData = localStorage.getItem('blogData');
    
    if (storedData) {
        var formData = JSON.parse(storedData);

        // Display the data in text boxes
        var dataDisplay = $('#dataDisplay');
        $.each(formData, function(key, value) {
            dataDisplay.append(`
                <div>
                    <label>${key}</label>
                    <input type="text" value="${value}" readonly>
                </div>
            `);
        });
    }
});