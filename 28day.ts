//Question : 82;
function lengthOfStr(str: string):number {
    return str.length}
    console.log(lengthOfStr("kanwalHeer"))



//Question: 83;
function lowerUper(str:string) {
    let lower =str.toLocaleLowerCase()
    console.log(`lowerCase: ${lower}`)
    let upper =str.toUpperCase()
    console.log(`UpperCase : ${upper}`)}
    lowerUper("kanwalheer")




//Question: 84;
//pattern:1
function replaceStr(sentence: string):string {
    return  sentence.replace(/javascript/g,"Typescript")}
    console.log(replaceStr(`I am starting to learn javascript ,and javascript is my favorite language`))
//pattern:2
function replaceStr1(sentence: string):string {
    let r = sentence.toLowerCase().split(" ")
    for (let i = 0; i < r.length; i++) {
    r[i] = r[i].replace("javascript","typescript")}
    return r.join(" ")}
    console.log(replaceStr1(`I am learning javascript ,and javascript is my favorite language`))
//pattern:3
    function replaceStr2(sentence: string):string {
    let replacing1 = sentence.toLowerCase().split(" ")
    for (let i = 0; i < replacing1.length; i++) {
    if (replacing1[i] ==="javascript") {
    replacing1[i] = "typescript"}}
    return replacing1.join(" ")}
    console.log(replaceStr2(`I have completed  javascript projects ,and javascript is my favorite language`))