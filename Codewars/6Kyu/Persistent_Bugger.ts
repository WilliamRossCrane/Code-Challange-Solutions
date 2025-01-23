/*
Codewars: 6Kyu
Link: https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec
Description:
Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

For example (Input --> Output):
39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit, there are 3 multiplications)
999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2, there are 4 multiplications)
4 --> 0 (because 4 is already a one-digit number, there is no multiplication)
*/

export function persistence(num: number): number {
    let count = 0;
    
    // Keep multiplying digits until num becomes a single digit
    while (num >= 10) {
        let product = 1;
        // Multiply all digits of num
        while (num > 0) {
            product *= num % 10;  // Multiply the last digit
            num = Math.floor(num / 10);  // Remove the last digit
        }
        num = product;  // Set num to the product of its digits
        count++;  // Increment the count of multiplications
    }
    
    return count; 
}
