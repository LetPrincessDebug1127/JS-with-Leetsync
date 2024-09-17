/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
    
    return function(x) {
        return functions.reverse().reduce((acc,fn)=>fn(acc),x)
    }
};

// Hàm reduce nhận vào 2 tham số chính là hàm callback( acc và fn) và giá trị khởi tạo
// acc là giá trị tích lũy và fn là 

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */