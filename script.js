document.getElementById('calculoForm').addEventListener('submit', function(event){
    event.preventDefault()

    const numero = Number(document.getElementById('numero').value)

    if (isNaN(numero) || numero < 1){
        alert('Por favor insira um NÚMERO inteiro positivo')
    }
    let fatorial = 1
    for(let i = 1; i <= numero; i++){
        fatorial *= i
    }

    let fibonacci = []
    let a = 0, b = 1

    while(a <= numero){
        fibonacci.push(a)
        let temp = a;
        a = b;
        b = temp + b
    }

    document.getElementById('resultado').innerHTML = `
        <h2>Resultado:</h2>
        <p>Fatorial do número ${numero} = ${fatorial}</p>
        <p>Sequencia fibonacci até ${numero} = ${fibonacci.join(', ')}
    `
})