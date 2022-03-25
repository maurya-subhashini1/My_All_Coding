
var mongoose = require('mongoose');
console.log('hiiii');
mongoose.connect('mongodb://localhost:27017/mydb')
.then(()=>{
    console.log('connection');
}).catch((err)=>{
    console.log(err);
})

//schema
// A mongose schema defines the structure of the document default
//values , validators,etc.,

const plalistSchema=new mongoose.Schema({
    name:String,
    ctyp:String,
    videos:Number,
    author:String,
    active:Boolean,
    date:{
        type:Date,
        default:Date.now
    }
})
  

//A mongose model is a wrapper on the mongose schema

const Playlist=new mongoose.model("Playlist",plalistSchema)

//create document or insert
const createDocument=async()=>{
    try{
        const reactPlaylist=new Playlist({
            name:"Node js",
            ctyp:"Back end",
            videos:58,
            author:"subhashini maurya",
            active:true,
        })
        const ExpressPlaylist=new Playlist({
            name:"Express js",
            ctyp:"Back end",
            videos:58,
            author:"subhashini maurya",
            active:true,
        })

        const mongodbPlaylist=new Playlist({
            name:"mongodb",
            ctyp:"database",
            videos:58,
            author:"subhashini maurya",
            active:true,
        })

        const result=await Playlist.insertMany([reactPlaylist,ExpressPlaylist,mongodbPlaylist]);
        console.log(result)
    }catch(err){
        console.log(err)
    }
}
// createDocument();

const getDocument=async()=>{
    const result=await Playlist.find({ctyp:"Back end"})
    .select({name:1})
    .limit(1)
    console.log(result)
}
getDocument()