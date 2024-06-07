$(document).ready(function() {
    // Retrieve the saved data from local storage
    var savedData = JSON.parse(localStorage.getItem('savedData')) || [];

    // Loop through the saved data and display it in the order it was saved
    savedData.forEach(function(data) {
        var listItem = $('<li>').text(data.username + ' - ' + data.title + ' - ' + data.content);
        $('#dataList').append(listItem);
    });
});