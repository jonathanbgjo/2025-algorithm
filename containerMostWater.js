/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let area = 0, disregard = 0;
    if(height.length <= 1) return 0;
    
    for(let i =0;i<height.length;i++){
        let min = height[i];
        for(let j =0;j<height.length;j++){
            if(height[i] <= height[j]){
                min = height[i]
            }else{
                min = height[j]
            }
            if(area < (min * (j-i))){
                disregard = Math.floor(area/j);
                area = (min * (j-i))
            }
        }
    }

    return area;
};