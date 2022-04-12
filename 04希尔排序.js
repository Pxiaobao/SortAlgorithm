const arr = [23,451,66,5,65,965,12,0,43,621]
const len = arr.length
//在插入排序的思想上进行了优化
//先将整个待排序的记录序列分割成为若干子序列分别进行直接插入排序
function shellSort(arr){
    const len = arr.length;
    for(let step = len >>1;step>0;step=step >> 1){
        for(let j=step;j<len;j++){
            while(arr[j-step]>arr[j]){
                [arr[j-step],arr[j]] = [arr[j],arr[j-step]]
                j=j-step
            }
        }
    }
    return arr
}
console.time('希尔排序耗时')
console.log(shellSort(arr))
console.timeEnd('希尔排序耗时')