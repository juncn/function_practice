/**
 * Return true if the passed string is a valid US phone number.
 * The following are examples of valid formats for US numbers:
 * 555-555-5555
 * (555)555-5555
 * (555) 555-5555
 * 555 555 5555
 * 5555555555
 * 1 555 555 5555
 */

function telephoneCheck(str){
    // Remove any characters that is not a number from str
    str = str.replace(/\D/g, '');
    console.log(str);

    if(str.length === 11){
        if(str.charAt(0) !== '1'){
            return false;
        } else {
            return true;
        }
    }
}

telephoneCheck('(555)555-5555');