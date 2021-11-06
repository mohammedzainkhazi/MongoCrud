var client = require('mongodb').MongoClient;
const uri = 'mongodb+srv://Rootmongodb14:Rootdb@firsttest.dzer3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

client.connect(uri, function(err, db) {
    if (err) throw err;
    console.log("Connected !");
    var dbo = db.db('msrit');
    
    function create(coll) {
        dbo.createCollection(coll,function(err,res){
            if (err) throw err;
            if(res){
                console.log(res);
            }
            else{
                console.log("Error Creating "+coll+" Check if it exists in Db.");
            }
            
        });
    }

    function remove(coll) {
        dbo.collection(coll).drop(function(err,res){
            //if (err) throw err;
            if(res === true){
                console.log('Deleted !')
            }
            else{
                console.log("Error Deleting "+coll+" Check if it exists in Db.");
            }            
        });
    }

    async function close(){
        await db.close();
    }
    
    function add(obj){
        dbo.collection('zain').insertOne(obj,function(err,res){
            if (err) console.log(err)
            console.log(res)
        })
    }

    async function display(){
       let res = await dbo.collection('zain').find({}).toArray();
       console.log(res);
    }

    let obj = {
        name : "Mohammed Zain K",
        usn  : "1MS20CS406",
        branch : "CSE",
        section : "B",
        placement : true
    }
    display();
  });