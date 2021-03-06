	var mongoose = require('mongoose');

//Função chamada quando se da require nesse arquivo
module.exports = function(ass){

	db = mongoose.createConnection( 'mongodb://localhost/' + ass);

	var Schema = mongoose.Schema;

	//Definindo a estrutura da minha colection usuarios no db
			var atendimento = Schema({
				ordServ: String,
				cpf: String,
				defeito: String,
				marca: String,
				data: Date,
				modelo: String,
				periodo: String,
				nome: String,
				telPrimario: String,
				telSecundario: String,
				email: String,
				endereco: String,
				observacoes: String
			});
	return db.model('atendimento', atendimento);
}
