function temperature() {
    let celsius = document.getElementById("c").value;

    let fahrenheit = (celsius * 9/5) + 32;

    document.getElementById("f").value = fahrenheit;
}

function weight() {
    let kilograms = document.getElementById("kg").value;

    let pounds = kilograms * 2.2;

    document.getElementById("lbs").value = pounds;
}

function distance() {
    let kilometers = document.getElementById("km").value;

    let miles = kilometers * 0.62137;

    document.getElementById("m").value = miles;
}