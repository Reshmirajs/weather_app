const API_KEY = "f9a7475fe9554444b30163106252612";

function getWeather() {
    const city = document.getElementById("cityInput").value;
    const resultDiv = document.getElementById("weatherResult");

    if (city === "") {
        resultDiv.innerHTML = "Please enter a city name.";
        return;
    }

    const url = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                resultDiv.innerHTML = "City not found.";
            } else {
                resultDiv.innerHTML = `
                    <p><strong>City:</strong> ${data.location.name}</p>
                    <p><strong>Temperature:</strong> ${data.current.temp_c} °C</p>
                    <p><strong>Condition:</strong> ${data.current.condition.text}</p>
                `;
            }
        })
        .catch(() => {
            resultDiv.innerHTML = "Error fetching weather data.";
        });
}
