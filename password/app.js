const password="324!@H5xy";
const scope='!@#$%^&*()\_+~|}{[]:;?><,./-=';

let passwordGenerator=(x)=>{
    //** rule 1 */
    if(x.length!==10){
        return console.log("password must be at least ten characters")
    }
}
passwordGenerator(password);