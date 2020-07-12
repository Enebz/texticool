const letters = {
    " ": {
        morse: '\xa0\xa0',
        type : 'space',
        case : 'none',
    },
    "a": {
        morse: '. _',
        type : 'vowel',
        case : 'lower',
    },
    "b": {
        morse: '_ . . .',
        type : 'consonant',
        case : 'lower',
    },
    "c": {
        morse: '_ . _ .',
        type : 'consonant',
        case : 'lower',
    },
    "d": {
        morse: '_ . .',
        type : 'consonant',
        case : 'lower',
    },
    "e": {
        morse: '.',
        type : 'vowel',
        case : 'lower',
    },
    "f": {
        morse: '. . _ .',
        type : 'consonant',
        case : 'lower',
    },
    "g": {
        morse: '_ _ .',
        type : 'consonant',
        case : 'lower',
    },
    "h": {
        morse: '. . . .',
        type : 'consonant',
        case : 'lower',
    },
    "i": {
        morse: '. .',
        type : 'vowel',
        case : 'lower',
    },
    "j": {
        morse: '. _ _ _',
        type : 'consonant',
        case : 'lower',
    },
    "k": {
        morse: '_ . _',
        type : 'consonant',
        case : 'lower',
    },
    "l": {
        morse: '. _ . .',
        type : 'consonant',
        case : 'lower',
    },
    "m": {
        morse: '_ _',
        type : 'consonant',
        case : 'lower',
    },
    "n": {
        morse: '_ .',
        type : 'consonant',
        case : 'lower',
    },
    "o": {
        morse: '_ _ _',
        type : 'vowel',
        case : 'lower',
    },
    "p": {
        morse: '. _ _ .',
        type : 'consonant',
        case : 'lower',
    },
    "q": {
        morse: '_ _ . _',
        type : 'consonant',
        case : 'lower',
    },
    "r": {
        morse: '. _ .',
        type : 'consonant',
        case : 'lower',
    },
    "s": {
        morse: '. . .',
        type : 'consonant',
        case : 'lower',
    },
    "t": {
        morse: '_',
        type : 'consonant',
        case : 'lower',
    },
    "u": {
        morse: '. . _',
        type : 'vowel',
        case : 'lower',
    },
    "v": {
        morse: '. . . _',
        type : 'consonant',
        case : 'lower',
    },
    "w": {
        morse: '. _ _',
        type : 'consonant',
        case : 'lower',
    },
    "x": {
        morse: '_ . . _',
        type : 'consonant',
        case : 'lower',
    },
    "y": {
        morse: '_ . _ _',
        type : 'vowel',
        case : 'lower',
    },
    "z": {
        morse: '_ _ . .',
        type : 'consonant',
        case : 'lower',
    },
    "A": {
        morse: '. _',
        type : 'vowel',
        case : 'upper',
    },
    "B": {
        morse: '_ . . .',
        type : 'consonant',
        case : 'upper',
    },
    "C": {
        morse: '_ . _ .',
        type : 'consonant',
        case : 'upper',
    },
    "D": {
        morse: '_ . .',
        type : 'consonant',
        case : 'upper',
    },
    "E": {
        morse: '.',
        type : 'vowel',
        case : 'upper',
    },
    "F": {
        morse: '. . _ .',
        type : 'consonant',
        case : 'upper',
    },
    "G": {
        morse: '_ _ .',
        type : 'consonant',
        case : 'upper',
    },
    "H": {
        morse: '. . . .',
        type : 'consonant',
        case : 'upper',
    },
    "I": {
        morse: '. .',
        type : 'vowel',
        case : 'upper',
    },
    "J": {
        morse: '. _ _ _',
        type : 'consonant',
        case : 'upper',
    },
    "K": {
        morse: '_ . _',
        type : 'consonant',
        case : 'upper',
    },
    "L": {
        morse: '. _ . .',
        type : 'consonant',
        case : 'upper',
    },
    "M": {
        morse: '_ _',
        type : 'consonant',
        case : 'upper',
    },
    "N": {
        morse: '_ .',
        type : 'consonant',
        case : 'upper',
    },
    "O": {
        morse: '_ _ _',
        type : 'vowel',
        case : 'upper',
    },
    "P": {
        morse: '. _ _ .',
        type : 'consonant',
        case : 'upper',
    },
    "Q": {
        morse: '_ _ . _',
        type : 'consonant',
        case : 'upper',
    },
    "R": {
        morse: '. _ .',
        type : 'consonant',
        case : 'upper',
    },
    "S": {
        morse: '. . .',
        type : 'consonant',
        case : 'upper',
    },
    "T": {
        morse: '_',
        type : 'consonant',
        case : 'upper',
    },
    "U": {
        morse: '. . _',
        type : 'vowel',
        case : 'upper',
    },
    "V": {
        morse: '. . . _',
        type : 'consonant',
        case : 'upper',
    },
    "W": {
        morse: '. _ _',
        type : 'consonant',
        case : 'upper',
    },
    "X": {
        morse: '_ . . _',
        type : 'consonant',
        case : 'upper',
    },
    "Y": {
        morse: '_ . _ _',
        type : 'vowel',
        case : 'upper',
    },
    "Z": {
        morse: '_ _ . .',
        type : 'consonant',
        case : 'upper',
    },
    "1": {
        morse: '. _ _ _ _',
        type : 'number',
    },
    "2": {
        morse: '. . _ _ _',
        type : 'number',
    },
    "3": {
        morse: '. . . _ _',
        type : 'number',
    },
    "4": {
        morse: '. . . . _',
        type : 'number',
    },
    "5": {
        morse: '. . . . .',
        type : 'number',
    },
    "6": {
        morse: '_ . . . .',
        type : 'number',
    },
    "7": {
        morse: '_ _ . . .',
        type : 'number',
    },
    "8": {
        morse: '_ _ _ . .',
        type : 'number',
    },
    "9": {
        morse: '_ _ _ _ .',
        type : 'number',
    },
    "0": {
        morse: '_ _ _ _ _',
        type : 'number',
    },
}

export default letters;