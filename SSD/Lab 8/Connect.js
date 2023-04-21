const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://sumeetAg:sumeet@cluster0.lfpbico.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, connectTimeoutMS: 30000 , keepAlive: 1, serverApi: ServerApiVersion.v1 });
client.connect(err => {
    const collection = client.db("insertDB").collection("haiku");
    // perform actions on the collection object
     client.close();
});




