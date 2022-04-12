const arr = [23,451,66,5,65,965,12,0,43,621]
const len = arr.length
//快速排序是对冒泡排序的一种改进，第一趟排序时将数据分成两部分，
//一部分比另一部分的所有数据都要小。然后递归调用，在两边都实行快速排序
function quickSort(arr){
    if(arr.length <=1) return arr
    let left =[],right=[]
    let current = arr.splice(0,1)
    for(let i=0;i<arr.length;i++){
        if(current[0]>=arr[i]){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }
    return quickSort(left).concat(current,quickSort(right))
}
console.time('快速排序耗时')
console.log(quickSort(arr))
console.timeEnd('快速排序耗时')