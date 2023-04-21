

var mongoose = require('mongoose');
const connectDB = async () => {
    try {
        const conn = await mongoose.connect("mongodb+srv://sumeetAg:sumeet@cluster0.lfpbico.mongodb.net/insertDB", {
            useUnifiedTopology: true,
            useNewUrlParser: true
        })

        console.log(`MongoDB Connected: ${conn.connection.host}`)
    } catch (error) {
        console.error(`Error: ${error.message}`)
        process.exit(1)
    }
}

connectDB();
function built() {
    const PersonSchema = new mongoose.Schema({
        roll: {type: String,},
        password: {type: String},
        role: {type: String}
    }, {
        collection: 'Test1'
    });


    const Model  = mongoose.model('Test1', PersonSchema);
    const doc = new Model();
    // doc._id = 1;
    doc.save();
}
built();

