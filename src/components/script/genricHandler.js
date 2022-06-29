// Select last word of the given string
/**
 * 
 * @param {array} val total word of the notes 
 */


const selectLastWord = (val) => {
    let word = val.split(' ');
    return word[word.length - 1];
}

// Select specified number of words of the given word
/**
 * 
 * @param {array} val total word of the notes 
 */

const selectWords = (val, num) => {
    let word = val.split(' ');
    for (var i = 0; i < num; i++) word.pop();
    console.log(word);
    return word;
}

export { selectLastWord, selectWords }