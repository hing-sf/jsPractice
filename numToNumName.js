// convert a given number into words
// example input 1234 = output "one thousand two hundred thirty four"

function convertedStr(str){
    const splitStr = str.split('');
    const convertedStrArray = [];
    let twoDigit = parseInt((splitStr[splitStr.length -2] + splitStr[splitStr.length -1] ))
    const underTwenty = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'forteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'ninteen'];
    const tenth = ['twenty', 'thirty', 'fourty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninty'];
    const hundredPlus = ['hundred', 'thousand', 'million']

    if( twoDigit < 20 ){
        splitStr.splice(-2,4)
        let j = 0;
        for(let i = splitStr.length; i >= 0; i-- ){
            if(j === 0){
                convertedStrArray.push(underTwenty[twoDigit -1])
            } else {
                convertedStrArray.unshift( underTwenty[splitStr[i] - 1], hundredPlus[j - 1] )
            }
            j++
        }
    } else {
        let j = 0;
        for(let i = splitStr.length -1; i >= 0; i-- ){
            if(j === 0){
                convertedStrArray.unshift( underTwenty[splitStr[i] - 1] )
            } else if (j === 1){
                convertedStrArray.unshift( tenth[splitStr[i] - 2] )
            } else {
                convertedStrArray.unshift( underTwenty[splitStr[i] - 1], hundredPlus[j - 2] )
            }
            j++
        }
    }
    console.log(convertedStrArray.toString().replace(/,/g, ' '));
}
convertedStr('9901')