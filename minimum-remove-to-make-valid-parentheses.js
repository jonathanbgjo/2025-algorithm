/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function(s) {
    if (s.length <= 0) return ''
    let array = s.split(""), parentheses = 0, indexToRemove = [], count = 0;
    for(let i =0;i<array.length;i++){
        if(array[i] == "(" || array[i] == ")"){
            if(array[i] == ")"){
                parentheses -= 1;
                if(parentheses < 0){
                    indexToRemove.push(i)
                    parentheses += 1;
                }else{
                    indexToRemove.pop();
                }
            }else{
                parentheses += 1;
                if(parentheses > 0){
                    indexToRemove.push(i)
                }else{
                    indexToRemove.pop();
                }
            }
        }
    }
    for(let j=0;j<indexToRemove.length;j++){
        array.splice(indexToRemove[j]-count, 1)
        count++;
    }
    return array.join("");
};