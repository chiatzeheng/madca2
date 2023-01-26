import PocketBase from 'pocketbase';
let pb;

try{
pb = new PocketBase('https://03e1-2406-3003-2001-3021-7391-ae4e-9127-40a7.ap.ngrok.io');
console.log("connect")
}
catch(err){
    console.log(err)
}

export default pb;  