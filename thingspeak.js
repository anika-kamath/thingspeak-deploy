const uploadInput = document.getElementById('upload1');
const outputImage = document.getElementById('output-image');
const submitButton = document.getElementById('submit-button');
const channelId = "2191567"; // Replace with your ThingSpeak channel ID
const apiReadKey = "BU9640W3HOS6KPQT"; // Replace with your ThingSpeak Read API Key

submitButton.addEventListener('click', () => {
  const uploadedFile = uploadInput.files[0];
  if (uploadedFile) {
    const reader = new FileReader();
    reader.onload = (event) => {
      outputImage.src = event.target.result;
    };
    reader.readAsDataURL(uploadedFile);
  } else {
    // Handle case where no file is uploaded
    alert('Please select an image to upload.');
  }
});


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
