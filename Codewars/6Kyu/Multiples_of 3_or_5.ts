/*
Codewars: 6Kyu
Link: https://www.codewars.com/kata/514b92a657cdc65150000006
Description:
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.
Additionally, if the number is negative, return 0.
Note: If the number is a multiple of both 3 and 5, only count it once.
*/

export class Challenge {
  static solution(number: number): number {
    // If the number is negative, return 0
    if (number < 0) {
      return 0;
    }

    let sum = 0;
    
    // Loop through all numbers from 1 to number-1
    for (let i = 1; i < number; i++) {
      // If the number is divisible by 3 or 5, add it to the sum
      if (i % 3 === 0 || i % 5 === 0) {
        sum += i;
      }
    }
    return sum;
  }
}
