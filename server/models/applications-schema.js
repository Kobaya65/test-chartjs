const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let applicationsSchema = new Schema({
	TechnicalIdHexa: String,
	Authentification: String,
	CurrentState: String,
	global_id: String,
	Commentaire: String,
	LibelleCourt: String,
	NomCourt: String,
	TypeAppli: String,
	Concepts: [String],
	DateDebutProd: Date,
	DateFinProd: Date,
},
{
  collection: 'applications'
})

module.exports = mongoose.model('Application', applicationsSchema)