let result = prompt('input num1 sing mun2');
switch (result) {
    case 'result.includes(' + ')':
        let numbers = result.split('+')
        let num1 = parseInt(numbers[0])
        let num2 = parseInt(numbers[1])
        console.log(num1 + num2)
        break
    case 'result.includes(' - ')':
        let numbers = result.split('-')
        let num1 = parseInt(numbers[0])
        let num2 = parseInt(numbers[1])
        console.log(num1 - num2)
        break
    case 'result.includes(' * ')':
        let numbers = result.split('*')
        let num1 = parseInt(numbers[0])
        let num2 = parseInt(numbers[1])
        console.log(num1 * num2)
        break
    case 'result.includes(' / ')':
        let numbers = result.split('/')
        let num1 = parseInt(numbers[0])
        let num2 = parseInt(numbers[1])
        console.log(num1 / num2)
        break
}