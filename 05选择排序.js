const arr = [23,451,66,5,65,965,12,0,43,621]
const len = arr.length
//首先在未排序序列中找到最小（大）元素，存放到排序序列的起始位置，
//然后，再从剩余未排序元素中继续寻找最小（大）元素，然后放到已排序序列的末尾。
function select(arr){

    for(let i=0;i<len-1;i++){
        let minindex = i; 
        for(let j=i+1;j<len;j++){
            if(arr[minindex]>arr[j]){
                minindex=j
            }
        }
        let temp = arr[i]
        arr[i] = arr[minindex]
        arr[minindex] = temp
    }
    return arr
}
console.time('选择排序耗时')
console.log(select(arr))
console.timeEnd('选择排序耗时')