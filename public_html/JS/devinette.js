/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


alert("coucou");
var x =prompt('entrer x de0 a 10');

var y =10* Math.random();
var i=0;

console.log(x);



var z=Math.floor(y);
console.log(z);

if(x==z){console.log("=")}
else{
while(x!=z){
  var x =prompt('entrer x de0 a 10');
  i=i+1;
  
  if(x<z){
       
  console.log("<");
  
  
  }else if(x>z){console.log(">");}
  
  else{console.log("=");}
  
 
}console.log(i);}


switch ( i ) {
  case  1 :
  case 2:
  case 3 :
   console.log("genial");
    break;
    case 4 :
    
   console.log("genial");
    break;
}