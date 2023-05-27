const tempValue = document.querySelector("#temp-value").textContent;
const windSpeed = document.querySelector("#wind-speed").textContent;
const windChill = document.querySelector("#wind0-chill");
const tempCtoF = (tempValue * 9/5) + 32;
const windSpeedMph = (windSpeed/1.609344)

if (tempCtoF <= 50 && windSpeedMph > 3) {
    const windChillFormula = (35.74 + (0.6215 * tempCtoF )) - (35.75 * (windSpeedMph ** 0.16)) + (0.4275 * tempCtoF * (windSpeedMph ** 0.16));
    const windChillWatt = (12.1452 + (11.6222 * (Math.sqrt(windSpeedMph))) - (1.16222 * windSpeedMph)) * (33 - tempCtoF);
    const windChilltoC = (windChillFormula - 32) * 5/9;
    console.log();
    document.querySelector("#wind-chill").textContent = windChilltoC.toFixed(2);
} else {
    document.querySelector("#wind-chill").textContent = "N/A";
}

