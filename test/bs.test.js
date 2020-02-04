const { binarySearch } = require('../src/binarySearch');

describe('binary search test', function () {
    it('奇数位数组，获取中间值', function (done) {
        let arr = [1, 2, 3, 4, 5, 6, 7];
        let rtn = binarySearch(arr, 0, arr.length - 1, 4);
        expect(rtn).toEqual(3);
        done();
    });
    it('奇数位数组，获取中间之前的值', function (done) {
        let arr = [1, 2, 3, 4, 5, 6, 7];
        let rtn = binarySearch(arr, 0, arr.length - 1, 6);
        expect(rtn).toEqual(5);
        done();
    });
    it('奇数位数组，获取中间之后的值', function (done) {
        let arr = [1, 2, 3, 4, 5, 6, 7];
        let rtn = binarySearch(arr, 0, arr.length - 1, 2);
        expect(rtn).toEqual(1);
        done();
    });
    it('偶数位数组，获取中间之前的值', function (done) {
        let arr = [1, 2, 3, 4, 5, 6];
        let rtn = binarySearch(arr, 0, arr.length - 1, 2);
        expect(rtn).toEqual(1);
        done();
    });
    it('偶数位数组，获取中间之后的值', function (done) {
        let arr = [1, 2, 3, 4, 5, 6];
        let rtn = binarySearch(arr, 0, arr.length - 1, 5);
        expect(rtn).toEqual(4);
        done();
    });
    it('获取值不在数组中，但值处于数组最大最小值之间', function (done) {
        let arr = [1, 3, 5, 7, 9];
        let rtn = binarySearch(arr, 0, arr.length - 1, 4);
        expect(rtn).toEqual(1);
        done();
    });
    it('获取值不在数组中，但值大于数组中最大值', function (done) {
        let arr = [1, 3, 5, 7, 9];
        let rtn = binarySearch(arr, 0, arr.length - 1, 100);
        expect(rtn).toEqual(4);
        done();
    });
    it('获取值不在数组中，但值小于数组中最小值', function (done) {
        let arr = [1, 3, 5, 7, 9];
        let rtn = binarySearch(arr, 0, arr.length - 1, 0);
        expect(rtn).toEqual(-1);
        done();
    });
    it('空数组', function (done) {
        let arr = [];
        let rtn = binarySearch(arr, 0, arr.length - 1, 1);
        expect(rtn).toEqual(-1);
        done();
    });
});