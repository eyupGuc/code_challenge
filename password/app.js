const password="!@Hxyrty23";
const scope='!@#$%^&*()\_+~|}{[]:;?><,./-=';

let passwordGenerator=(x)=>{
    //** rule 1 */
   
    
    if(x.length!==10){
        return console.log("password must be at least ten characters")
    }

    let number=/[0-9]/;
    let a =x.search(number);
    // console.log(a)
    let b=x.slice( a+1).search(number)
    console.log(b)
   
  
}
passwordGenerator(password);