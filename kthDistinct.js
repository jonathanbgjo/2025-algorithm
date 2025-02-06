/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
var kthDistinct = function(arr, k) {
    let dict = {};
    let result = [];
    if(k <= 0){
        return "";
    }
    for(let i = 0; i <arr.length; i++){
        if(!dict[arr[i]]){
           dict[arr[i]] = 1;
        }else{
            dict[arr[i]] +=1;
        }
    }
    for(let i =0;i<arr.length;i++){
        if(dict[arr[i]] == 1){
            result.push(arr[i]);
        }
    }
    console.log(dict);
    console.log(result);
    if(k> result.size() || result[k-1] != null){
        return result[k-1]
    } else{
        return ""
    }
};