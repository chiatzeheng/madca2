import PocketBase from 'pocketbase';
let pb;

try{
pb = new PocketBase('https://2cb9-2406-3003-2001-3021-396b-ba94-c077-def1.ap.ngrok.io');
console.log("connect")
}
catch(err){
    console.log(err)
}

export default pb;  