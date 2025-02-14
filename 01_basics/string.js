const str1 = 'Mahabaleshwar is nice city';
const str2 = "Pune";
// Length() - Get string length
console.log(str1.length)

// toUpperCase ()
console.log(str1.toUpperCase());

// toLowerCase()
console.log(str1.toLowerCase());

// charAt() - Return character at given position
console.log(str1.charAt(2));

// charCodeAt ()
console.log(str1.charCodeAt(2));

// stringAt()
console.log(str1[0]);

// Slice() - Returns substring from main string
console.log(str1.slice( 0, 3 ));
console.log(str1);

// substring() - Returns substring from main string
console.log(str1.substring(0, 4));
console.log(str1);

// concat() - Concat two string into new one
console.log(str1.concat(` Hello ${str2}`));

// trim() - Remove white spaces from the begining & tailing part of the string
console.log(str1.length);
console.log(str1.trim().length);

// split() - Split string on the basis of passed argument and returns an array
console.log(str1.split(' '));
const totalWords = str1.split(' ');
console.log(totalWords.length);


// repeat() - 
console.log(str1.repeat(3));







