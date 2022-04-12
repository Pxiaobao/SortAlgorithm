//分治法的应用
const arr = [23,451,66,5,65,965,12,0,43,621]
const len = arr.length


// 归并排序
function mergeSort(array){
    var length = array.length;// {1}
    if (length === 1) {// {2}
      return array;
    }
    var mid = Math.floor(length / 2), //{3}首先得找到数组的中间位
      left = array.slice(0, mid),//{4}左边小数组
      right = array.slice(mid, length);//{5}右边小数组
    return merge(mergeSort(left), mergeSort(right));
}
function merge(left, right) {
    var result = [], //需要声明归并过程要创建的新数组以及用来迭代两个数组（left和right数组）所需的两个变量
    il = 0,
    ir = 0;
  while (il < left.length && ir < right.length) {//迭代两个数组的过程中
    if (left[il] < right[ir]) {// 我们比较来自left数组的项是否比来自right数组的项小。
      result.push(left[il++]);// 将该项从left数组添加至归并结果数组，并递增迭代数组的控制变量
    } else {
      result.push(right[ir++]);// 从right数组添加项并递增相应的迭代数组的控制变量
    }
  }
  while (il < left.length) { // 将left数组所有剩余的项添加到归并数组中
    result.push(left[il++]);
  }
  while (ir < right.length) { // 将right数组所有剩余的项添加到归并数组中
    result.push(right[ir++])
  }
  return result;
}

console.time('归并排序耗时')
console.log(mergeSort(arr))
console.timeEnd('归并排序耗时')