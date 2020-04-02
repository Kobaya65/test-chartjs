let mongoose = require( 'mongoose' );

export default function kpiDb() {
    mongoose.connect( 'mongodb://localhost:27017/kpi-transformation', { useNewUrlParser: true } );

    let db = mongoose.connection;

    db.on( 'error', console.error.bind( console, 'connection error:' ) );
    db.once( 'open', function () {
        console.log( "Connexion réussie" );

        let kpiSchema = new mongoose.Schema( {
            name: String
        } );

        // NOTE: methods must be added to the schema before compiling it with mongoose.model()
        kpiSchema.methods.speak = function () {
            let greeting = this.name
                ? "Meow name is " + this.name
                : "I don't have a name";
            console.log( greeting );
        }

        let kpi = mongoose.model( 'statistiques', kpiSchema );
        let result = kpi.find( {} );
        console.log( "result = " + result.count );
    } );

    return kpiDb;
}
