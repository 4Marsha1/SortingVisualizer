const bubbleSort = (arr) => {
    let n = arr.length;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let t = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = t;
            }
        }
    }
    return arr;
}


const mergeSort = (arr) => {
    if (arr.length === 1)
        return arr;
    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));
    const sortedArr = [];
    let i = 0, j = 0;
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            sortedArr.push(left[i++]);
        } else {
            sortedArr.push(right[j++]);
        }
    }
    while (i < left.length) {
        sortedArr.push(left[i++]);
    }
    while (j < right.length) {
        sortedArr.push(right[j++]);
    }
    return sortedArr;
}