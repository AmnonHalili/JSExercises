const d=1, b=5, c=6; 
let solutionA = solutionB = 0
solutionA= ((-1 * b + (Math.sqrt(Math.pow(b, 2) - (4 * d * c)))) / (2 * d));
solutionB= ((-1 * b - (Math.sqrt(Math.pow(b, 2) - (4 * d * c)))) / (2 * d));
console.log(solutionA, solutionB);