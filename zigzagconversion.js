/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    let arr = [];
    for(let i=0;i<numRows;i++){
        arr[i] = [];
    }
    let runner = 0;
    while(runner < s.length){
        for(let i =0;i<numRows;i++){
            arr[i].push(s[runner])
            runner++;
        }
        for(let i =numRows-2;i>0;i--){
            if(s[runner]){
                arr[i].push(s[runner])
                runner++;
            }
        }
    }
    let str = ''
    for(let i=0;i<numRows;i++){
        str += arr[i].join("")
    }

    return str;
};