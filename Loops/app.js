// for (let i = 0; i< 5;i++){
    console.log(i)
}
var num = [ 3,56,9,59,99]
// for ( var i=0; i<num.length; i++){
//     console.log(num[i])
// }
// num.forEach((element)=>{
// console.log(element * element)
// })

// Arry from
let name = "Harry"
let arr = Array.from(name) 
console.log(arr)

// for..of
for ( let i of num){
    console.log(i)
}
// for..in
for ( let i in num){
    console.log(i)
}
// illegal way
// var 123a = "Anas";
// var @a="Anas";
// var a@="Anas";

// legal way
var a123 = "Anas";
var $a="Anas";
var _a="Anas";
document.write($a)

// Math expressions: Familiar operators
var num = 10;
var popularNmber = num + 200;
console.log(popularNmber)  

var anothernum =20
var popularNmber = num +anothernum;
console.log( popularNmber);

var num = 10;
var anothernum =3
var popularNmber = num %anothernum;
console.log( popularNmber);

// Math experation eliminating ambiguity
var num = ((2*4) * 4)+2;
console.log(num)

var a = 2;
var b = 3;

var num = ++b - (a++ + b++) -(a++ + ++b) * ++a;
console.log(num)

// class nested

{ 


  int = i,j


 for ( i=1;j<=5 ;i++ )
    {
        for ( j=1;j<=5 ;j++ )

            FileSystem,outerHeight.print("* ");
    } 
}

var x   ="HELLO WORLD"
document.write(x.toUpperCase());
document.write(x.toLowerCase ());
document.write(name.slice(1,2,3,4));
document.write(name.replace("WORLD" ,"HI"));