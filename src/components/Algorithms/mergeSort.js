export const mergeSort = (array) => {
    if (array.length == 1)
        return array;
    const animations = [];
    const auxArray = array.slice();
    _mergeSort(array, 0, array.length - 1, auxArray, animations);
    return animations;
}

const _mergeSort = (array, start, end, auxArray, animations) => {
    if (start === end)
        return;
    const mid = Math.floor((start + end) / 2);
    _mergeSort(auxArray, start, mid, array, animations);
    _mergeSort(auxArray, mid + 1, end, array, animations);
    _merge(array, start, mid, end, auxArray, animations);
}

const _merge = (array, start, mid, end, auxArray, animations) => {
    let k = start, i = start, j = mid + 1;
    while (i <= mid && j <= end) {
        animations.push([i, j]);
        animations.push([i, j]);
        if (auxArray[i] < auxArray[j]) {
            animations.push([k, auxArray[i]]);
            array[k++] = auxArray[i++];
        } else {
            animations.push([k, auxArray[j]]);
            array[k++] = auxArray[j++];
        }
    }
    while (i <= mid) {
        animations.push([i, i]);
        animations.push([i, i]);
        animations.push([k, auxArray[i]]);
        array[k++] = auxArray[i++];
    }
    while (j <= end) {
        animations.push([j, j]);
        animations.push([j, j]);
        animations.push([k, auxArray[j]]);
        array[k++] = auxArray[j++];
    }
}
