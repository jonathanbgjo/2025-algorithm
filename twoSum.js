//given an array of integers, find if two numbers add up to the target value, if so, return the indices, otherwise return false.

const array = [1,2,3,4,5,6,10]

function twoSum(arr, target){
    let dict = {};
    for(let i = 0; i<arr.length; i++){
        if(target-arr[i] in dict){
            return [dict[target-arr[i]], i]
        }
        dict[arr[i]] = i;
    }
    return false;
}

console.log(twoSum(array, 15))
console.log(twoSum(array, 1))
console.log(twoSum(array, 5))
console.log(twoSum(array, 11))
console.log(twoSum(array, 13))
