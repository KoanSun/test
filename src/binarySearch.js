function binarySearch(arr, start, end, value) {
    let rtn = 0;
    let mid = Math.floor((start + end) / 2);
    if (arr.length === 0) {
        rtn = -1;
    } else if (value < arr[start]) {
        rtn = start - 1;
    } else if (value > arr[end]) {
        rtn = end;
    } else if (value === arr[mid]) {
        rtn = mid;
    } else if (value < arr[mid]) {
        rtn = binarySearch(arr, start, mid - 1, value);
    } else {
        rtn = binarySearch(arr, mid + 1, end, value);
    }
    return rtn;
}

module.exports = {
    binarySearch
}