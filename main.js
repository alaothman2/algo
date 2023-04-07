function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
      let key = arr[i];
      let j = i - 1;
    while(j >= 0 && arr[j] > key){
        arr[j + 1] = arr[j];
        j--;
    }
    arr[j + 1] = key;
    }
    return arr;
}

let arr = [3, 5, 2, 1, 4];
console.log(insertionSort(arr)); // [1, 2, 3, 4, 5]