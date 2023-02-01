import PocketBase from 'pocketbase';
let pb;

try{
pb = new PocketBase('https://d2a1-2406-3003-2001-3021-7a9e-94d3-907c-3152.ap.ngrok.io');
console.log("connect")
}
catch(err){
    console.log(err)
}

export default pb;  