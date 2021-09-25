let numberStrings=prompt('Please input numbers use","to separate').split(',');
let numbers =[]
for (let num of numberStrings){
    numbers.push(parseInt(num));
}
let sum = 0;
let average = 0;
for (let i = 1;i < numberStrings.length; i++){
    sum += num[i];
}
average=sum / numberStrings.length
console.log(average);




// if(numberStrings.includes(','))
// {
//     let numbers=numberStrings.split(',')
//     let num1=parseInt(numbers[0])
//     let num2=parseInt(numbers[1])
//     console.log(num1+num2)    
