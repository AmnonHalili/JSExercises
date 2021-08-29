const d, b, c; 
let solutionA = solutionB = 0
solutionA= ((-1 * b + (Math.sqrt(Math.pow(b, 2) - (4 * d * c)))) / (2 * d));
solutionB= ((-1 * b - (Math.sqrt(Math.pow(b, 2) - (4 * d * c)))) / (2 * d));
console.log(solutionA, solutionB);