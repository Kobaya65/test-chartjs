const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let applicationsRespSchema = new Schema({
	id: String,
	global_id: String,
	assignations: [
		personne: String,
		id_personne: String,
		id_structure: String,
		structure: String,
		id_role: String,
		role: String
	],
},
{
  collection: 'applicationsResp'
})

module.exports = mongoose.model('ApplicationResp', applicationsRespSchema)