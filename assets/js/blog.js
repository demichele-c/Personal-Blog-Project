
function retriveAndDisplay(){
    var savedData = JSON.parse(localStorage.getItem('savedData')) || [];

 
    savedData.forEach(function(data) {
        var listItem = $('<div>').addClass('listItems')
    
       
        var userTitle = $('<p>').addClass('titleStyle').text(data.title);
        var hrElement = $('<hr>').addClass('hrStyle');
        var userContent = $('<p>').addClass('contentStyle').text(data.content);
        var userName = $('<p>').addClass('nameStyle').text('Posted by: ' + data.username);
        
        listItem.append(userTitle, hrElement, userContent, userName);
        
        $('#dataList').append(listItem);
        
    });}
retriveAndDisplay()
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
const backButton = document.getElementById('back-button');
        
backButton.addEventListener('click', () => {
    // Add functionality to go back to the previous page
    window.history.back();
});