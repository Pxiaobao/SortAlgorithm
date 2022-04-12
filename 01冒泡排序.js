const arr = [23,451,66,5,65,965,12,0,43,621]
const len = arr.length
function bubble(arr){
    for(let i=0;i<len-1;i++){
        for(let j=0;j<len-1-i;j++){
            if(arr[j]>arr[j+1]){
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }
    }
    return arr
}
console.time('冒泡排序耗时')
console.log(bubble(arr))
console.timeEnd('冒泡排序耗时')
