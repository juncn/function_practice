// Implementation of Fibonacci with O(n) time and O(1) space

function fib(n) {
    // edge case
    if (n < 0) {
        throw new Error('Index is negative');
    } else if (n === 0 || n === 1) {
        return n;
    }

    // build fib bottom up
    var prevPrev = 0;      // fib(0);
    var prev = 1;          // fib(1);
    var current;

    for (var i = 1; i < n; i++) {
        current = prevPrev + prev;
        prevPrev = prev;
        prev = current;
    }

    return current;
}

for (var j = 0; j < 10; j++) {
    console.log(fib(j));
}