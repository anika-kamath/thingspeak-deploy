const sensorDataDiv = document.getElementById('sensor-data');

fetch('/data')
    .then(response => response.json())
    .then(data => {
        sensorDataDiv.innerHTML = `
            <h2>Temperature: ${data.temperature}°C</h2>
            <h2>Humidity: ${data.humidity}%</h2>
        `;
    })
    .catch(error => console.error(error));
