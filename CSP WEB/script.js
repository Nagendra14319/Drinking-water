document.getElementById("submit-btn").addEventListener("click", function() {
    let ph = document.getElementById("ph").value;
    let turbidity = document.getElementById("turbidity").value;
    let tds = document.getElementById("tds").value;
    let temperature = document.getElementById("temperature").value;

    alert("Data Submitted Successfully:\n" +
        "pH: " + ph + "\nTurbidity: " + turbidity + "\nTDS: " + tds + "\nTemperature: " + temperature);
});