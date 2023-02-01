/* prime: prime number is a whole number which is greater than one  and it has olny two factors 1 and itself */


const isPrime = (num: number) => {
    let count = 0;
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            count += 1
        }
    }

    return count === 2 ? `${num} is prime` : `${num} is not prime`

}


let result1 = isPrime(5);
console.log(result1);

