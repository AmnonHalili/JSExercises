const num1=111, num2=222, num3=333;

let sum = 0

sum+=Math.floor(num1%10)
+Math.floor((num1/10)%10)+Math.floor((num1/100));

sum+=Math.floor(num2%10)
+Math.floor((num2/10)%10)+Math.floor((num2/100));

sum+=Math.floor(num3%10)
+Math.floor((num3/10)%10)+Math.floor((num3/100));

console.log(sum);
