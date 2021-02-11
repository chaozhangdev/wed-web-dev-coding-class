function calculation() {
  // step 1: get data from html
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;

  // step 2: calculate the BMI
  let bmi = weight / (height * height);

  // step 3: show the result
  if (bmi < 18.5) {
    alert("Underweight !");
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    alert("Normal !");
  } else if (bmi >= 25 && bmi <= 29.9) {
    alert("Overweight !");
  } else if (bmi >= 30 && bmi <= 34.9) {
    alert("Obese !");
  } else {
    alert("Extremely Obese !");
  }
}
