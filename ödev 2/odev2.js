function post(data){
    return new Promise((resolve,reject) =>{
        console.log("postlar alınmaya calısıyor")
        if(data){
            resolve("Post alındı ");

        }
        else{
            reject("bir hata olustu ")
        }
    })
}
function postAdd(data){
    return new Promise((resolve,reject)=>{
        console.log("postlar düzenleniyor")
        if(data){
            resolve("Eklendi");
        }
        else{
            reject("hata oluştu")
        }
    })
}
async function processData(){
 try{
    const receivedData = await post(true);
    console.log(receivedData);
    const postAdd1 = await postAdd(true);
    console.log(postAdd1)
 }catch(error){
console.log(error)
 }   
}
processData();
