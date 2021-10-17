const fs = require('fs');
// veri okuma
fs.readFile('emplooyes.json','utf8',(err,data)=>{
    if(err)console.log(err)
    console.log(data)
})
// yeni veri ekleme

fs.writeFile('emplooyes.json','\n {"name": "Employee 2 Name", "salary": 3000} ','utf8',(err)=>{
    if(err)console.log(err);
})
//dosyayı silmek
fs.unlink('emplooyes.json',(err)=>{
    if(err)console.log(err)
    
})