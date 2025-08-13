//find all unique triplets in an array that sum to zero
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let pointer= 0, pointer2 = 0,result=[];
    for(let i = 0;i<nums.length;i++){
        pointer=i+1;
        while(pointer<nums.length-1){
            pointer2=pointer+1;
            while(pointer2<nums.length){
                if(nums[i]+nums[pointer]+nums[pointer2] == 0){
                    result.push([nums[i],nums[pointer],nums[pointer2]]);
                }
                pointer2++;
            }
            pointer++;
        }
    }
    let s = new Set();
    for(let i =0;i<result.length;i++){
        s.add(result[i].sort((a, b) => a - b).toString());
    }
    return Array.from(s, str =>str.split(",").map(Number));
};


let trip1= [-1, 0, 1, 2, -1, -4]
// console.log(threeSum(trip1))
//[-1, -1, 2]
//[-1, 0, 1]
let trip2=[1, 2, 3, 4, 5]
// console.log(threeSum(trip2))

//[]
let trip3=[-5, -4, -3, -2, -1]
// console.log(threeSum(trip3))

//[]
let trip4=[0, 0, 0, 0]
// console.log(threeSum(trip4))

//[0,0,0]
let trip5=[-2, 0, 1, 1, 2, -1, -4]
// console.log(threeSum(trip5))

// [-2, 0, 2]
// [-2, 1, 1]
// [-1, 0, 1]
let trip6=[-2, -2, 0, 0, 2, 2]
console.log(threeSum(trip6))

// [-2, 0, 2]

let trip7=[-10, -7, -3, 0, 1, 2, 3, 8, 9]
console.log(threeSum(trip7))
// [-10, 1, 9]
// [-10, 2, 8]
// [-3, 0, 3]
// [-3, 1, 2]