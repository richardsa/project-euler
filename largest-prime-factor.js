/*

Project Euler - Problem 3 (from https://projecteuler.net/)

Adapted to find largest prime number for numbers up to 1000

*/

var number = prompt("Enter a number to find its largest prime factor");
var prime = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31];
var answer = 0; 
var x = 0; 

for (var i = 0; i < prime.length; i++)
{
    if(number % prime[i] === 0)
    {
       answer = prime[i];          
    }    
}

if(answer === 0)
{
    console.log(number + " is a prime number.");
}
else
{
console.log("The largest prime factor of " + number + " is " + answer + ".");
}