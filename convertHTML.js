/**
 * Convert the characters &, <, >, " (double quote), and ' (apostrophe), 
 * in a string to their corresponding HTML entities.
 */

function convertHTML(str) {
    var strArray = str.split('');
    strArray.forEach(function(curEl, index, array){
        switch (curEl) {
            case '&':
                array[index] = '&amp;';
                break;
            case '<':
                array[index] = '&lt;';
                break;
            case '>': 
                array[index] = '&gt;';
                break;
            case '\'':
                array[index] = '&apos;';
                break;
            case '\"':
                array[index] = '&quot;';
                break;
            default:
                break;
        }
    });
    str = strArray.join('');
    console.log(str);
    return str;
}

convertHTML("Dolce & Gabbana");
convertHTML("Hamburgers < Pizza < Tacos");
convertHTML("Sixty > twelve");
convertHTML('Stuff in "quotation marks"');
convertHTML("Shindler's List");
convertHTML("<>");



/**
 * convertHTML("Dolce & Gabbana") should return Dolce &​amp; Gabbana
 * convertHTML("Hamburgers < Pizza < Tacos") should return Hamburgers &​lt; Pizza &​lt; Tacos
 * convertHTML("Sixty > twelve") should return Sixty &​gt; twelve
 * convertHTML('Stuff in "quotation marks"') should return Stuff in &​quot;quotation marks&​quot;
 * convertHTML("Shindler's List") should return Shindler&​apos;s List
 * convertHTML("<>") should return &​lt;&​gt;
 */