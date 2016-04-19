module.exports = function(app){
	var Taxonomies = require('./taxonomies');

	//GET
	findAllTaxonomies = function(req, res){
		Taxonomies.find(function(err,objTaxonomies){
			if(!err) res.send(objTaxonomies);
			else console.log('ERROR:'+err);
		});
	}

	//GET Id
	findByIdTaxonomy = function(req,res){
		Taxonomies.findById(req.params.id,function(err,objTaxonomies){
			if(!err) res.send(objTaxonomies);
			else console.log('ERROR:'+err);
		});
	}

	//POST
	addTaxonomy = function(req,res){
		console.log('POST');
		console.log(req.body);
		var objTaxonomy = new Taxonomies({
			name: req.body.name,
			description: req.body.description,
			type: req.body.type,
			uid: req.body.type
		});
		objTaxonomy.save(function(err){
			if(!err) console.log('Taxonomy Guardado');
			else console.log('ERROR:'+err);
		});
		res.send(objTaxonomy);
	}

	//PUT UPDATE Id
	updateTaxonomy = function(req,res){
		console.log(req.body);
		Taxonomies.findById(req.params.id,function(err,objTaxonomy){
			objTaxonomy.name = req.body.name;
			objTaxonomy.description = req.body.description;
			objTaxonomy.type= req.body.type;

			objTaxonomy.save(function(err){
				if(!err) console.log('Taxonomy Actualizada');
				else console.log('ERROR:'+err);
			});
		});
	}

	//DELETE 

	deleteTaxonomy = function(req,res){
		Taxonomies.findById(req.params.id,function(err,objTaxonomy){
			objTaxonomy.remove(function(err){
				if(!err) console.log('Taxonomy Eliminada');
				else console.log('ERROR:'+err);
			});
		});
	}
	//API Routes
	app.get('/taxonomies',findAllTaxonomies);
	app.get('/taxonomies/:id',findByIdTaxonomy);
	app.post('/taxonomies',addTaxonomy);
	app.put('/taxonomies/:id',updateTaxonomy);
	app.delete('/taxonomies/:id',deleteTaxonomy);
}