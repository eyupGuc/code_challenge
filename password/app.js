const password="324!@H5xy";
const scope='!@#$%^&*()\_+~|}{[]:;?><,./-=';

let passwordGenerator=(x)=>{
    //** rule 1 */
    let number=/[0-9]/;
    let a =x.search(number);
    console.log(number)
    
    if(x.length!==10){
        return console.log("password must be at least ten characters")
    }
   
  
}
passwordGenerator(password);