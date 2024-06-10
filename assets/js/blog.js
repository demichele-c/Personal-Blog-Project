// retrive data imputed on index.html from local storage.
function retriveAndDisplay(){
    var savedData = JSON.parse(localStorage.getItem('savedData')) || [];

 
    savedData.forEach(function(data) {
    // created a new div 
        var listItem = $('<div>').addClass('listItems')
    
    //    created new elements for imput collected from local storage and a line.
        var userTitle = $('<p>').addClass('titleStyle').text(data.title);
        var hrElement = $('<hr>').addClass('hrStyle');
        var userContent = $('<p>').addClass('contentStyle').text(data.content);
        var userName = $('<p>').addClass('nameStyle').text('Posted by: ' + data.username);
    //    created an array and added it to list item div. 
        listItem.append(userTitle, hrElement, userContent, userName);
        // append listitem to exsisting div in html.
        $('#dataList').append(listItem);
        
    });}
// call function.
retriveAndDisplay()

const backButton = document.getElementById('back-button');
// added logic to go back to last page on click of the back button.
backButton.addEventListener('click', () => {
    window.history.back();
});