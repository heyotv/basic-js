module.exports = class DepthCalculator {
    calculateDepth(arr, depth = 0, count = []) {
        depth++;
        count.push(depth);
        for (let i = 0; i < arr.length; i++) {
            if (Array.isArray(arr[i])) {
                this.calculateDepth(arr[i], depth, count);
            }
        }
        return Math.max(...count);
    }
};