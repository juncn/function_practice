
/**
 * pairElement("ATCGA") should return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]]
 * pairElement("TTGAG") should return [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]]
 * pairElement("CTCTA") should return [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]]
 */

function pairElement(str) {
    var elArray = str.split('');
    var resultArray = [];
    for(var i = 0; i < elArray.length; i++){
        if(elArray[i] === 'A'){
            resultArray.push(['A', 'T']);
        } else if(elArray[i] === 'T'){
            resultArray.push(['T', 'A']);
        } else if(elArray[i] === 'C'){
            resultArray.push(['C', 'G']);
        } else if(elArray[i] === 'G'){
            resultArray.push(['G', 'C']);
        }
    }
    return resultArray;
}

pairElement("ATCGA");