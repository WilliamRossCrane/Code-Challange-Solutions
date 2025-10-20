/* 
Jaden Smith, the son of Will Smith, is the star of 
films such as *The Karate Kid* (2010) and *After Earth* (2013). 
Jaden is also known for sharing philosophical thoughts on Twitter. 
When writing on Twitter, he is known for capitalizing almost every word. 
Your task is to capitalize each word in a string in the same style.
Contractions should also be handled correctly, as shown in the example below.
*/

/*
We want to be able to call 'toJadenCase()' directly on a string like this:
'most trees are blue'.toJadenCase(); // returns 'Most Trees Are Blue'

To achieve this, we add a method to the String prototype.
*/

Object.defineProperty(
  String.prototype,
  'toJadenCase',
  {
    value: function toJadenCase() {
      return this
        // Split the string into words using space as a delimiter
        .split(' ')
        // Capitalize the first letter of each word
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        // Join the capitalized words back into a single string
        .join(' ');
    }
  }
);
