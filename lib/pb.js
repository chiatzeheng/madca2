import PocketBase from 'pocketbase';
let pb;

try{
pb = new PocketBase('https://91d1-61-16-104-96.ap.ngrok.io');
console.log("connect")
}
catch(err){
    console.log(err)
}

export default pb;  