setInterval(function() {
    fetch('/data')
        .then(response => response.text())
        .then(data => {
            const values = JSON.parse(data);
            document.getElementById('temperature').textContent = `Temperature: ${values.temperature}°C`;
            document.getElementById('humidity').textContent = `Humidity: ${values.humidity}%`;
        })
        .catch(error => console.error(error));
}, 5000); // Update every 5 seconds
