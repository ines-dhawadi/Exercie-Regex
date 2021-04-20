/*--------------------------------Exercice 1----------------------------------*/
function anyspaces() {
    let var1 = "bonjou,rines"
    let var2 = /[ ,]/g;
    console.log(var2.test(var1))
}
anyspaces();
/*--------------------------------Exercice 2----------------------------------*/
function countVowels() {
    let subject = "bonjour ines"
    let regex = /[a,e,u,i,o,y]/gi;

    console.log(subject.match(regex).length)
}
countVowels() 
/*--------------------------------Exercice 3----------------------------------*/
function countVowel() {
    let subjec = "bonjour ines"
    let regex = /[a,e,u,i,o,y]/gi;

    console.log(subjec.replace(regex,'#'))
}
countVowel() 
/*--------------------------------Exercice 4----------------------------------*/
function op(){
   let calc = "1+3"
    let regex = /^[0-99][*,-,/,+][0-99]$/
    console.log(regex.test(calc))
}
op();
/*--------------------------------Exercice 5----------------------------------*/
function characters(){
    let ch= "bonjabonjc"
    regex = /^[a]{1,5} [a-zA-Z]{0,99}[C]{0,5}[a-zA-Z]{1,99} $/;
    console.log(regex.test(ch))
}
characters();
/*--------------------------------Exercice 6----------------------------------*/
function num(){
    let var1="12354"
    regex = /^[0-9]{5}$/;
    console.log(regex.test(var1));
}
num();
