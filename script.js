function calcularIMC() {
    let height = parseFloat(document.getElementById('height').value);
    let weight = parseFloat(document.getElementById('weight').value);
    let showOutput = document.getElementById('output');
    let classification;

    //Cálculo de IMC
    let bmiRange = weight / (height / 100) ** 2; // Fórmula IMC
    bmiRange = bmiRange.toFixed(2);

    if (bmiRange < 16) {
        classification = 'Delgadez severa';
    } else if (bmiRange > 16 && bmiRange < 17) {
        classification = 'Delgadez moderada';
    } else if (bmiRange > 17 && bmiRange < 18.5) {
        classification = 'Delgadez leve';
    } else if (bmiRange > 18.5 && bmiRange < 25) {
        classification = 'Normal';
    } else if (bmiRange > 25 && bmiRange < 30) {
        classification = 'Sobrepeso';
    } else if (bmiRange > 30 && bmiRange < 34) {
        classification = 'Obesidad grado I';
    } else if (bmiRange > 35 && bmiRange < 40) {
        classification = 'Obesidad grado II';
    } else if (bmiRange > 40) {
        classification = 'Obesidad grado III';
    }
    showOutput.innerHTML = `Rango de IMC: ${bmiRange} | ${classification} `;
}