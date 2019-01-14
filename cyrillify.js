// А is ASCII xn--80a
// В is ASCII xn--b1a
// С is ASCII xn--q1a
// Е is ASCII xn--e1a
// Н is ASCII xn--m1a
// І is ASCII xn--c2a
// Ј is ASCII xn--e2a
// К is ASCII xn--j1a
// М is ASCII xn--l1a
// О is ASCII xn--n1a
// Р is ASCII xn--p1a
// Ѕ is ASCII xn--b2a
// Т is ASCII xn--r1a
// Х is ASCII xn--u1a
// Ү is ASCII xn--v4a
// а is ASCII xn--80a
// с is ASCII xn--q1a
// е is ASCII xn--e1a
// о is ASCII xn--n1a
// р is ASCII xn--p1a
// х is ASCII xn--u1a
// у is ASCII xn--s1a

module.exports = function(string) {

    const cyrillifiedArray = []; //Initialize an array of characters to output.

    const english = ['A', 'B', 'C', 'E', 'H', 'I', 'J', 'K', 'M', 'O', 'P', 'S', 'T', 'X', 'Y', 'a', 'c', 'e', 'o', 'p', 'x', 'y']; //Array of English characters with Cyrillic homoglyphs.
    const cyrillic = ['А', 'В', 'С', 'Е', 'Н', 'І', 'Ј', 'К', 'М', 'О', 'Р', 'Ѕ', 'Т', 'Х', 'Ү', 'а', 'с', 'е', 'о', 'р', 'х', 'у']; //Parallel array of Cyrillic characters with English homoglyphs.

    const stringArray = string.split(''); //Split input into an array of individual characters.

    for (i = 0; i < stringArray.length; i++) { //Loop over the array of input characters.

        for (j = 0; j < english.length; j++) { //For each character, loop over the array of English characters with Cyrillic homoglyphs to see if the input character has a Cyrillic homoglyph in the parallel array.

            if (stringArray[i] == english[j]) { //If the input character has a Cyrillic homoglyph push it to the array of characters to output, if not, push the original input character to the array of characters to output.
                cyrillifiedArray.push(cyrillic[j]);
                j = english.length;
            } else if (stringArray[i] !== english[j] && j+1 == english.length) {
                cyrillifiedArray.push(stringArray[i]);
            }
        };
    };

    const cyrillified = cyrillifiedArray.join(''); //Join the array of characters to output into a string.

    return cyrillified;
};
