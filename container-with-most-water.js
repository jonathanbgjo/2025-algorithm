/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left=0 , max=0, right = 0;
    while(left < height.length-1){
        right = left+1;
        while(right < height.length){
            if(max != 0 && max / height[right] <= height[left]){
                let temp = calc(height,left,right)
                if( temp > max){
                    max = temp;
                    }
            }else if (max == 0){
                let temp = calc(height,left,right)
                if( temp > max){
                    max = temp;
                }
            }

            right++
        }
        left++;
    }
    return max;
return 0
};
function calc(arr,left, right){
    let base = right - left ;
    let height = arr[left] < arr[right] ? arr[left] : arr[right];
    console.log("base " + base)
    console.log("height " + height)
    return base * height;
}
//so ideally its a sliding window 
//two different pointers
//one keeps the left length and then we get the max as we keep moving right pointer.