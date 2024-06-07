
function retriveAndDisplay(){
    var savedData = JSON.parse(localStorage.getItem('savedData')) || [];

    // Loop through the saved data and display it in the order it was saved
    savedData.forEach(function(data) {
        var listItem = $('<div>').addClass('listItems')
    
       
        var userTitle = $('<p>').addClass('titleStyle').text(data.title);
        var hrElement = $('<hr>');
        var userContent = $('<p>').addClass('contentStyle').text(data.content);
        var userName = $('<p>').addClass('nameStyle').text('Posted By: ' + data.username);
        
        listItem.append(userTitle, hrElement, userContent, userName);
        
        $('#dataList').append(listItem);
    });}

//         var elementsArray = [];

// // Create and add elements to the array
// var userName = $('<p>').addClass('nameStyle').text(data.username);
// elementsArray.push(userName);

// var userTitle = $('<p>').addClass('titleStyle').text(data.title);
// elementsArray.push(userTitle);

// var userContent = $('<p>').addClass('contentStyle').text(data.content);
// elementsArray.push(userContent);

// // Append the array to a div
// var div = $('<div>');

// for (var i = 0; i < elementsArray.length; i++) {
//     div.append(elementsArray[i]);
// }

// // Append the div to a specific element in your HTML
// $('#dataList').append(div);
//     };
retriveAndDisplay()
// $(document).ready(function() {
//     // Retrieve the saved data from local storage
//     var savedData = JSON.parse(localStorage.getItem('savedData')) || [];

//     // Loop through the saved data and display it in the order it was saved
//     savedData.forEach(function(data) {
//         var newDiv = $('<div>').addClass('dataDiv');
//         var username = $('<p>').text('Username: ' + data.username);
//         var title = $('<p>').text('Title: ' + data.title);
//         var content = $('<p>').text('Content: ' + data.content);

//         newDiv.append(username, title, content);
//         $('#dataContainer').append(newDiv);
//     });
// });