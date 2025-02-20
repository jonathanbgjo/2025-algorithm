/** VERY INEFFICIENT SOLUTION TO FIND THE LONGEST PALINDROMIC SUBSTRING LOL
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(str) {
    let palindromicSubstrings = [];
   
       // Helper function to check if a string is a palindrome
       function isPalindrome(s) {
           return s === s.split('').reverse().join('');
       }
   
       // Generate all possible substrings
       for (let i = 0; i < str.length; i++) {
           for (let j = i + 1; j <= str.length; j++) {
               let substring = str.slice(i, j);
               if (isPalindrome(substring)) {
                   palindromicSubstrings.push(substring);
               }
           }
       }
       let longestPalindrome = "";
       for (let palindrome of palindromicSubstrings) {
           if (palindrome.length > longestPalindrome.length) {
               longestPalindrome = palindrome;
           }
       }
   
       return longestPalindrome;
   };
   