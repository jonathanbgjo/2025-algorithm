/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    if(nums.length <= 0) return []
    let result = [], dict = {};
    for(let i = 0;i<nums.length-2;i++){
        for(let j = i+1;j<nums.length-1;j++){
            for(let k=j+1;k<nums.length;k++){
                if(nums[i] + nums[j] + nums[k] == 0){
                    if(result.length == 0){
                        result.push([nums[i],nums[j],nums[k]])
                    }
                    let flag = true;
                    for(let m=0;m<result.length;m++){
                        if(JSON.stringify(result[m].sort()) == JSON.stringify([nums[i],nums[j],nums[k]].sort())){
                            flag = false
                        }
                    }
                    if(flag){
                        result.push([nums[i],nums[j],nums[k]])
                    }
                }
            }
        }
    }
    return result;
};