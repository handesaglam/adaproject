const express = require("express");
var mysql=require('mysql')
const http = require('http');
const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};
var conn=mysql.createConnection({
    host:'localhost',
    user:'root',
    pass:'',
    database:'ada'
});


conn.on('error', function(err) {
  console.log("[mysql error]",err);
})

const sunucu = http.createServer(function (request, response) {

  

});





// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// simple route
//trenler
app.get("/train", (req, res) => {
 res.writeHead(200,{'Content-Types':'text/json'});

conn.query('Select * from train', (err,result)=>{

    if(err) throw err;
    res.write(JSON.stringify(result));
    res.end();

});


});
//tren ekleme
app.post('/trainadd',(req,res)=>{
res.writeHead(200,{'Content-Type':'text/html'});
let id=req.query.id;
let train_name=req.query.train_name;
let sql='INSERT INTO train(id,train_name) VALUES(?,?)';
conn.query(sql,[id,train_name], (err,result)=>{
if(err) throw err;
res.write('Inserted...');
res.end();


});


});


// id get 


app.get('/train/:id',(req,res,fields)=>{
  res.writeHead(200,{'Content-Type':'text/html'});
let id=req.params.id;
conn.query('Select *from  vagon where id = ?',
[id],(err,result,fields)=>{
if(err) throw err;

var capasite=result[0].capasite;
var seating=result[0].seating;

var fullting=(seating/capasite)*100
console.log(fullting);
var liste = [];
let ayrıntı = {
  RezervasyonYapilabilir:true,
 
  YerlesimAyrinti: []
};
 
// STEP 2: Adding new data to users object



if(fullting>70){
  res.write(
    JSON.stringify(ayrıntı)
  );
  res.end();

}else{

  // rezervasyon apiye gidecek 



}
 
  
  
  });


});

app.post('/rezervasyon',(req,res)=>{
  res.writeHead(200,{'Content-Type':'text/html'});
  let id=req.query.id;
  let name=req.query.name;
  let persons=req.query.persons;
  let vago_name=req.query.vago_name;
  let sql='INSERT INTO rezerve(id,name,persons,vago_name) VALUES(?,?,?,?)';
  conn.query(sql,[id,name,persons,vago_name], (err,result)=>{
  if(err) throw err;

  let ayrıntı = {
    RezervasyonYapilabilir:true,
   
    YerlesimAyrinti: [
     " VagonAdi: "+vago_name+"kişi sayısı: "+persons,

    ]
  };
   
  res.write(
    JSON.stringify(ayrıntı)
  );
  res.end();
  
  
  });
  
  });



app.post('/trainadd',(req,res)=>{
  res.writeHead(200,{'Content-Type':'text/html'});
  let id=req.query.id;
  let train_name=req.query.train_name;
  let sql='INSERT INTO train(id,train_name) VALUES(?,?)';
  conn.query(sql,[id,train_name], (err,result)=>{
  if(err) throw err;
  res.write('Inserted...');
  res.end();
  
  
  });
  
  });



  

// vagon ekleme
app.post('/vagonadd',(req,res)=>{
  res.writeHead(200,{'Content-Type':'text/html'});
  let id=req.query.id;
  let train_id=req.query.train_id;
  let capasite=req.query.capasite;
  let seating=req.query.seating;
 
  let sql='INSERT INTO vagon(id,train_id,capasite,seating) VALUES(?,?,?,?)';
  conn.query(sql,[id,train_id,capasite,seating], (err,result)=>{
  if(err) throw err;
  res.write('Inserted...');
  res.end();
  
  
  });
  
  });
// vagon id

  app.get('/rezervasyon/:id',(req,res)=>{
    res.writeHead(200,{'Content-Type':'text/html'});
    let id=req.query.id;
  
   conn.query('Select * from vagon where id= ?'[id],(err,result)=>{
if(err) throw err;

res.write(JSON.stringify(result));
res.end();
   })
   
 
    
    });


//

// set port, listen for requests
const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});