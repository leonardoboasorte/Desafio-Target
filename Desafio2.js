function fibonacci(n) {
    let fib = [0, 1];
    while (fib[fib.length - 1] < n) {
        fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
    }

    if (fib.includes(n)) {
        console.log(`${n} pertence à sequência de Fibonacci.`);
    } else {
        console.log(`${n} não pertence à sequência de Fibonacci.`);
    }
}

let numero = 13;  // Informe o número desejado aqui
fibonacci(numero);
