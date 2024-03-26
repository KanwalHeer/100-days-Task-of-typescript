//Question: 73;
function updatValue() {
    let num = 20;
    console.log(`initial value:, ${num}`)
    num = 50;
    console.log(`updated value: ${num}`)
}
//updatValue()



//Question : 74;
function swap() {
    let a = 5
    let b = 10
    console.log(`befor swap a: ${a} and b: ${b}`)
    let temp = a
     a = b;
     b = temp
     console.log(`after swap a: ${a} and b: ${b}`)

}
//swap()



//Question : 75;
function compoundOperators() {
    let x = 4
    console.log(x)
    x+=2;
    console.log(x)
    x-=1;
    console.log(x)
    x*=3;
    console.log(x)
    x/=2;
    console.log(x)
}

compoundOperators()