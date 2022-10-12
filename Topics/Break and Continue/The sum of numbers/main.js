function sum(numbers) {
    // write your code here
    let sum1 = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] === 0) {
            break;
        } else {
            sum1 += numbers[i];
        }
    }
    return sum1;
}
