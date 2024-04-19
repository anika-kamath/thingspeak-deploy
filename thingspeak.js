function getData() {
  const channelId = "YOUR_CHANNEL_ID"; // Replace with your ThingSpeak channel ID
  const apiReadKey = "24ZW1FNGPT26S71C"; // Replace with your ThingSpeak Read API Key
  const url = `https://api.thingspeak.com/channels/${channelId}/fields/1/last.json?api_key=${apiReadKey}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      document.getElementById("temperature").textContent = `Temperature: ${data.field1} °C`;
      document.getElementById("humidity").textContent = `Humidity: ${data.field1} %`;
    })
    .catch(error => console.error(error));
}
