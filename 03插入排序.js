const arr = [23,451,66,5,65,965,12,0,43,621]
const len = arr.length
//从第一个元素开始，该元素可以认为已经被排序
//取出下一个元素，在已经排序的元素序列中从后向前扫描
//如果该元素（已排序）大于新元素，将该元素移到下一位置
//重复步骤3，直到找到已排序的元素小于或者等于新元素的位置
//将新元素插入到下一位置中
//重复步骤2
function insertSort(arr){
    for(let i =1;i<arr.length;i++){
        for(let j=i;j>0;j--){
            if(arr[j]<arr[j-1]){
                [arr[j],arr[j-1]] = [arr[j-1],arr[j]]
            }else{
                break
            }
        }
    }
    return arr
}
console.time('插入排序耗时')
console.log(insertSort(arr))
console.timeEnd('插入排序耗时')