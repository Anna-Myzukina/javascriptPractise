/*Conditional Statements: Switch

3 more challenges to get your next star!
Points: 14/17
Days of JS
*/

function getLetter(s) {
    
    // Write your code here
    
    switch (s[0].toLowerCase()) {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
            return 'A';
        case 'b':
        case 'c':
        case 'd':
        case 'f':
        case 'g':
            return 'B';
        case 'h':
        case 'j':
        case 'k':
        case 'l':
        case 'm':
            return 'C';
        default:
            return 'D';
    }
    
    
}
