import GraphemeSplitter from 'grapheme-splitter';
import letters from '../src/Letters';
import { randomEmoji, randomPoop, randomCool, randomFunny } from '../src/Emoji';

const splitter = new GraphemeSplitter();

// Immutable function resolving
String.prototype.replaceAt = function(index, replacement) {
    return this.substr(0, index) + replacement + this.substr(index + replacement.length);
}

// Misc
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
    
        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
  
    return array;
}

// Declare effect functions 
// (Making functions for clearer code.(i know they are one line functions))
// Spaces
function Spaces(input) {
    return splitter.splitGraphemes(input).join(" ");
}

// Uppercase
function Uppercase(input) {
    return input.toUpperCase();
}

// Lowercase
function Lowercase(input) {
    return input.toLowerCase();
}

// Preachify
function Preachify(input) {
    return input.split(" ").join(" 👏 ")
}

// Codeify
function Codeify(input) {
    return "<Code>" + input + "</Code>"
}

// Morseify
function Morseify(input) {
    var morse = input.toLowerCase();
    for (const letter in letters) {
        morse = morse.split(letter).join(letters[letter].morse + "\xa0")
    }
    return morse;
}

// Pirateify
function Pirateify(input) {
    var pirate = input;
    for (const letter in letters) {
        if (letters[letter].type === "consonant") {
            if (letters[letter].case == "upper") {
                pirate = pirate.split(letter).join(letter + "O" + letter);
            }
            if (letters[letter].case == "lower") {
                pirate = pirate.split(letter).join(letter + "o" + letter);
            }
        }
        else {
            continue;
        }
    }
    return pirate;
}

// Backwards
function Backwards(input) {
    return splitter.splitGraphemes(input).reverse().join("");
}

// Scramble
function Scramble(input) {
    return shuffle(input.split(" ")).join(" ");
}

// Randomify
function Randomify(input) {
    return shuffle(splitter.splitGraphemes(input)).join("");
}

// Vowels
function Vowels(input) {
    var vowels = input;
    for (const letter in letters) {
        if (letters[letter].type == "consonant") {
            vowels = vowels.split(letter).join("");
        }
        else {
            continue;
        }
    }
    return vowels;
}

// Consonants
function Consonants(input) {
    var consonants = input;
    for (const letter in letters) {
        if (letters[letter].type == "vowel") {
            consonants = consonants.split(letter).join("");
        }
        else {
            continue;
        }
    }
    return consonants;
}

// Funny
function Funny(input) {
    var splitted = input.split(" ")
    for (var word = 0; word < splitted.length; word++) {
        splitted[word] = splitted[word] + randomFunny() + " ";
    }
    return splitted.join("");
}

// Poop
function Poop(input) {
    var splitted = input.split(" ")
    for (var word = 0; word < splitted.length; word++) {
        splitted[word] = splitted[word] + randomPoop() + " ";
    }
    return splitted.join("");
}

// Cool
function Cool(input) {
    var splitted = input.split(" ")
    for (var word = 0; word < splitted.length; word++) {
        splitted[word] = splitted[word] + randomCool() + " ";
    }
    return splitted.join("");
}

// Random Emoji
function Emoji(input) {
    var splitted = input.split(" ")
    for (var word = 0; word < splitted.length; word++) {
        splitted[word] = splitted[word] + randomEmoji() + " ";
    }
    return splitted.join("");
}

//// Handling the main input
function HandleInput(input, effects) {
    console.log(effects);
    var processedInput = input;

    // Random Emoji
    if (effects.includes("emoji spam")) {
        processedInput = Emoji(processedInput);
    }

    // Cool
    if (effects.includes("cool")) {
        processedInput = Cool(processedInput);
    }

    // Funny
    if (effects.includes("funny")) {
        processedInput = Funny(processedInput);
    }

    // Poop
    if (effects.includes("poop")) {
        processedInput = Poop(processedInput);
    }

    // Vowels & Consonants
    if (effects.includes("vowels")) {
        processedInput = Vowels(processedInput);
    }
    else if (effects.includes("consonants")) {
        processedInput = Consonants(processedInput);
    }

    // Scramble
    if (effects.includes("scramble")) {
        processedInput = Scramble(processedInput);
    }

    // Randomify
    if (effects.includes("randomify")) {
        processedInput = Randomify(processedInput);
    }

    // Backwards
    if (effects.includes("backwards")) {
        processedInput = Backwards(processedInput);
    }

    // Uppercase
    if (effects.includes("uppercase")) {
        processedInput = Uppercase(processedInput);
    }

    // Lowercase
    if (effects.includes("lowercase")) {
        processedInput = Lowercase(processedInput);
    }

    // Preachify
    if (effects.includes("preachify")) {
        processedInput = Preachify(processedInput);
    }

    // Pirateify
    if (effects.includes("pirateify")) {
        processedInput = Pirateify(processedInput);
    }

    // Morseify
    if (effects.includes("morseify")) {
        processedInput = Morseify(processedInput);
    }

    // Spaces
    if (effects.includes("spaces")) {
        processedInput = Spaces(processedInput);
    }

    // Codeify
    if (effects.includes("codeify")) {
        processedInput = Codeify(processedInput);
    }

    

    return processedInput;
}

export default HandleInput;