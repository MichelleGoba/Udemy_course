function bmiCalculator(weight, height){
    var bmi = weight / Math.pow(height, 2); 
    return Math.round(bmi);
}

// if my weight is 65kg and my height is 1.8m, i should be able to call the function like this:
var bmi = bmiCalculator(65, 1.8)
console.log(bmi);