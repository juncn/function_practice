/**
 * Convert a string to spinal case. 
 * Spinal case is all-lowercase-words-joined-by-dashes.
 * 
 * spinalCase("This Is Spinal Tap") should return "this-is-spinal-tap"
 * spinalCase("thisIsSpinalTap") should return "this-is-spinal-tap"
 * spinalCase("The_Andy_Griffith_Show") should return "the-andy-griffith-show"
 * spinalCase("Teletubbies say Eh-oh") should return "teletubbies-say-eh-oh"
 * spinalCase("AllThe-small Things") should return "all-the-small-things"
 *
 */

function spinalCase(str) {
    // Create regex that match spaces and underscores
    var regex = /\s+|_+/g;

    // Replace 'lowerUppercase' to 'lower Uppercase'
    str = str.replace(/([a-z])([A-Z])/g, '$1 $2');

    // Replace spaces and underscore with dash
    // and convert to lower case
    str = str.replace(regex, '-').toLowerCase();
    return str;
}

spinalCase("This Is Spinal Tap");
spinalCase("thisIsSpinalTap");
spinalCase("The_Andy_Griffith_Show");
spinalCase("Teletubbies say Eh-oh");
spinalCase("AllThe-small Things");