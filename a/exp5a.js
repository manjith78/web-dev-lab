document.getElementById("calculateBtn").addEventListener("click", function () {
    // Get input values
    let weight = parseFloat(document.getElementById("weight").value);
    let height = parseFloat(document.getElementById("height").value);

    // Convert height from cm to meters
    height = height / 100;

    // Validate input
    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        alert("Please enter valid values for weight and height.");
        return;
    }

    // Calculate BMI
    let bmi = weight / (height * height);
    bmi = bmi.toFixed(1); // round to 1 decimal

    // Determine BMI category
    let category = "";
    if (bmi < 18.5) {
        category = "Underweight";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category = "Normal weight";
    } else if (bmi >= 25 && bmi < 29.9) {
        category = "Overweight";
    } else {
        category = "Obesity";
    }

    // Update results on page
    document.getElementById("bmiValue").textContent = bmi;
    document.getElementById("bmiCategory").textContent = category;
});