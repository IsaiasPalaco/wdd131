document.addEventListener("DOMContentLoaded", function() {
    const currentYear = new Date().getFullYear();
    document.getElementById("currentyear").textContent = currentYear;
    const lastModified = document.lastModified;
    document.getElementById("lastModified").textContent = `Last Modified: ${lastModified}`;
});

function calculateWindChill(temperature, windSpeed) {
    if (temperature < 10 && windSpeed > 4.8) {
        let windChill = 13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16);
        return windChill.toFixed(2);
    } else {
        return "N/A";
    }
}

document.addEventListener('DOMContentLoaded', () => {
    let temperature = 10;
    let windSpeed = 5;
    let windChill = calculateWindChill(temperature, windSpeed);
    document.getElementById('windChill').textContent = windChill + '℃';
});
