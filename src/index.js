module.exports = function reverse (n) {
    let num = Math.abs(n);
    let num2 = +num.toString().split('').reverse().join('');
    return(num2);
}
