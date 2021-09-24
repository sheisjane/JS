let result=prompt('input num1 sing mun2');    
// let num1=parseInt(number1);
// let num2=parseInt(number2)
// let result=" ";
// let sign=" ";

if(result.includes('+'))
{
    let numbers=result.split('+')
    let num1=parseInt(numbers[0])
    let num2=parseInt(numbers[1])
    console.log(num1+num2)
} else if(result.includes('-')){
    let numbers=result.split('-')
    let num1=parseInt(numbers[0])
    let num2=parseInt(numbers[1])
    console.log(num1-num2)
}else if(result.includes('*')){
    let numbers=result.split('*')
    let num1=parseInt(numbers[0])
    let num2=parseInt(numbers[1])
    console.log(num1*num2)
}else if(result.includes('/')){
    let numbers=result.split('/')
    let num1=parseInt(numbers[0])
    let num2=parseInt(numbers[1])
    console.log(num1/num2)
}else {
    console.log('The input formula does not mach the requirements'
    )
}





// switch(sign)
// {
//     case '+':
//         result.value = num1 + num2;
//         break ;

// }
