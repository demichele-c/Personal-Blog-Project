
const inputElements = document.querySelectorAll('input, textarea');

inputElements.forEach(input => {
    input.style.boxShadow = '2px 2px 5px rgba(0, 0, 0, 0.1)'; 
});
// Added box shadow to all imput boxes.


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