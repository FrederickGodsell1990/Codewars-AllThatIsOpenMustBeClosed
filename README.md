# Codewars---All-that-is-open-must-be-closed...

Please find my solution to the below Codewars kyu 5 kata;

    Background
    We all know about "balancing parentheses" (plus brackets, braces and chevrons) and even balancing characters that are identical.

    Read that last sentence again, I balanced different characters and identical characters twice and you didn't even notice... :)

    Kata
    Your challenge in this kata is to write a piece of code to validate that a supplied string is balanced.

    You must determine if all that is open is then closed, and nothing is closed which is not already open!

    You will be given a string to validate, and a second string, where each pair of characters defines an opening and closing sequence that needs balancing.

    You may assume that the second string always has an even number of characters.

    Example
    // In this case '(' opens a section, and ')' closes a section
    isBalanced("(Sensei says yes!)", "()")       // => True
    isBalanced("(Sensei says no!", "()")         // => False

    // In this case '(' and '[' open a section, while ')' and ']' close a section
    isBalanced("(Sensei [says] yes!)", "()[]")   // => True
    isBalanced("(Sensei [says) no!]", "()[]")    // => False

    // In this case a single quote (') both opens and closes a section
    isBalanced("Sensei says 'yes'!", "''")       // => True
    isBalanced("Sensei say's no!", "''")         // => False
