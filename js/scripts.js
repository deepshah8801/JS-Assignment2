// Constants for DOM elements
const numInput = document.getElementById('customNumber');
const colorButton = document.querySelector('.custColor');
const randColorButton = document.querySelector('.randColor');
const imgSelect = document.getElementById('imageSelect');
const imgContainer = document.getElementById('images');
const studentId = document.getElementById('myStudentId');

// Array of image source locations
const imgSrcs = ['img/img1.jpg', 'img/img2.jpg', 'img/img3.jpg', 'img/img4.jpg', 'img/img5.jpg'];

// Function to change background color based on input value
function changeColor() {
    const value = parseInt(numInput.value);
    studentId.textContent = "200549992"; // Display student ID
    // Set background color based on value range
    if (value < 0 || value > 100) {
        document.body.style.backgroundColor = 'red';
    } else if (value < 20) {
        document.body.style.backgroundColor = 'green';
    } else if (value < 40) {
        document.body.style.backgroundColor = 'blue';
    } else if (value < 60) {
        document.body.style.backgroundColor = 'orange';
    } else if (value < 80) {
        document.body.style.backgroundColor = 'purple';
    } else {
        document.body.style.backgroundColor = 'yellow';
    }
}

// Function to generate random number and change background color
function changeRandColor() {
    const randValue = Math.floor(Math.random() * 100) + 1; // Generate random number between 1 and 100
    numInput.value = randValue; // Set input value to the random number
    changeColor(); // Call changeColor function to change background color
}

// Function to populate select list options with image names
function addOptions() {
    for (let i = 0; i < imgSrcs.length; i++) {
        const option = document.createElement('option');
        option.textContent = `Image ${i + 1}`;
        option.value = i;
        imgSelect.appendChild(option);
    }
}

// Function to change displayed image based on selected option
function changeImg() {
    const selectedIndex = imgSelect.value;
    if (selectedIndex !== "") {
        imgContainer.src = imgSrcs[selectedIndex];
    } else {
        imgContainer.src = ""; // Clear image if no option selected
    }
}

// Event listeners for button clicks and select change
colorButton.addEventListener('click', changeColor);
randColorButton.addEventListener('click', changeRandColor);
imgSelect.addEventListener('change', changeImg);

// Generate select list options on page load
addOptions();
