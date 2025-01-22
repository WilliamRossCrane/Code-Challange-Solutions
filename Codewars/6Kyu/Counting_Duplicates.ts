/*
Codewars: 6Kyu
Link: https://www.codewars.com/kata/54bf1c2cd5b56cc47f000
Description:
Count the number of Duplicates
Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.
Example
"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice
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
