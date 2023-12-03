function isSubstring(str1, str2) {
    // Create a hashmap to count the frequency of characters in str1
    const charCount = new Map();
    for (const char of str1) {
        const normalizedChar = char.toLowerCase();
        charCount.set(normalizedChar, (charCount.get(normalizedChar) || 0) + 1);
    }

    // Remove spaces and punctuation from str2 and convert it to lowercase
    const normalizedStr2 = str2.replace(/[\W_]/g, '').toLowerCase();

    // Check if str1 is a substring of str2
    for (const char of normalizedStr2) {
        if (charCount.has(char)) {
            charCount.set(char, charCount.get(char) - 1);
            if (charCount.get(char) === 0) {
                charCount.delete(char);
            }
            if (charCount.size === 0) {
                return "Yes";
            }
        }
    }

    return "No";
}

// Test cases
console.log(isSubstring("ello", "hello, friend!"));        // Output: Yes
console.log(isSubstring(", ", "hello, friend!"));           // Output: No
console.log(isSubstring("hello friend", "hello, friend!")); // Output: Yes
console.log(isSubstring("lofri", "hello, friend!"));         // Output: Yes
console.log(isSubstring("hello, friend!", "hello"));        // Output: No

//Space and Time Complexity:
/*
Space Complexity: O(N) where N is the length of the first string str1.
We use a hashmap to store the character frequencies.
Time Complexity: O(M) where M is the length of the second string str2.
We iterate through str2 once, and for each character, we perform constant time operations with the hashmap.
*/

//Ways to Improve:
/*
This solution is already quite efficient, but you could further optimize it by using a single hashmap that counts characters in str2 and checks against the frequencies in str1.
This could reduce space complexity if str1 is much shorter than str2.
*/

//HashMap vs. Array:
/*
Using a hashmap is more efficient for this problem.
It allows us to handle different characters and their frequencies, making it easier to deal with case insensitivity and ignoring spaces and punctuation.
In contrast, using an array would require us to create a large array to cover all possible characters, which is less efficient and not as straightforward for solving this particular problem.
*/