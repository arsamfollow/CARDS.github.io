let products = [

];


let input1 = parseInt(prompt('Enter How much card you want to print'))

for(let i = 0; i < input1; i++){

    let prompt1 = prompt('Enter Your Name')
    let prompt2 = prompt('Enter age')
    let prompt3 = prompt('imgae url')

    let obj1 = { Name:prompt1, Age:prompt2, Image:prompt3}
   

    products.push(obj1)

}