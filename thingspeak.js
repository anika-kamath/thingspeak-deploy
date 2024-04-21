const uploadInput = document.getElementById('upload1');
const outputImage = document.getElementById('output-image');
const submitButton = document.getElementById('submit-button');
const channelId = "2191567"; // Replace with your ThingSpeak channel ID
const apiReadKey = "BU9640W3HOS6KPQT"; // Replace with your ThingSpeak Read API Key

// script.js
// script.js
document.getElementById('upload').addEventListener('change', function(event) {
    let reader = new FileReader();
    reader.onload = function() {
        let imgElement = document.createElement('img');
        imgElement.src = reader.result;
        imgElement.style.maxWidth = '100%';
        imgElement.style.maxHeight = '100%';
        document.getElementById('left-column').innerHTML = ''; // Clear previous images
        document.getElementById('left-column').appendChild(imgElement);
        
        // Determine the corresponding output image name based on the uploaded image
        let uploadedImageName = event.target.files[0].name;
        let outputImageName;
        if (uploadedImageName === 'test1.png') {
            outputImageName = 'op1.png';
        } else if (uploadedImageName === 'test2.png') {
            outputImageName = 'op2.png';
        } else if (uploadedImageName === 'test3.png') {
            outputImageName = 'op3.png';
        }
        } else if (uploadedImageName === 'test4.png') {
            outputImageName = 'op4.png';
        }// Add more conditions for additional images if needed
        
        // Call processImage with the corresponding output image name
        processImage(uploadedImageName, outputImageName);
    };
    reader.readAsDataURL(event.target.files[0]);
});

function processImage(testImageName, outputImageName) {
    // Display specific images
    const leftColumn = document.getElementById('left-column');
    const rightColumn = document.getElementById('right-column');
    leftColumn.innerHTML = ''; // Clear previous images
    rightColumn.innerHTML = ''; // Clear previous images
    
    // Display test image in the left column
    let testImage = document.createElement('img');
    testImage.src = testImageName;
    testImage.style.maxWidth = '100%';
    testImage.style.maxHeight = '100%';
    leftColumn.appendChild(testImage);

    // Display output image in the right column
    let outputImage = document.createElement('img');
    outputImage.src = outputImageName;
    outputImage.style.maxWidth = '100%';
    outputImage.style.maxHeight = '100%';
    rightColumn.appendChild(outputImage);
}







// submitButton.addEventListener('click', () => {
//   const uploadedFile = uploadInput.files[0];
//   if (uploadedFile) {
//     const reader = new FileReader();
//     reader.onload = (event) => {
//       outputImage.src = event.target.result;
//     };
//     reader.readAsDataURL(uploadedFile);
//   } else {
//     // Handle case where no file is uploaded
//     alert('Please select an image to upload.');
//   }
// });


// function getData() {
//   
//   const url = `https://api.thingspeak.com/channels/${channelId}/fields/1/last.json?api_key=${apiReadKey}`;

//   fetch(url)
//     .then(response => response.json())
//     .then(data => {
//       document.getElementById("temperature").textContent = `Temperature: ${data.field1} °C`;
//       document.getElementById("humidity").textContent = `Humidity: ${data.field1} %`;
//     })
//     .catch(error => console.error(error));
// }
