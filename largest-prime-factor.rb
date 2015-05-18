#Project Euler - Problem 3 (from https://projecteuler.net/)
#Adapted to find largest prime number for numbers up to 1000
 
 
puts "Enter a number to find its largest prime factor"
number = gets.chomp.to_i
prime = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31]
answer = 0
x = 0
 
prime.each do |i|
    if(number % i === 0)
       answer = i;          
    end   
end

if(answer === 0)
    puts "#{number} is a prime number."
else
    puts "The largest prime factor of #{number} is #{answer}."
end
