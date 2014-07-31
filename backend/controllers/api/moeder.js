'use strict';

exports.index = function(req, res){
    return res.json("is een MILF");
};

exports.streken = function(req, res){
	return res.json("Je zweet zelf");
};

exports.optel = function(req, res){
	var result = parseInt(req.params.a) + parseInt(req.params.b);
	console.log(result);
	res.json(result); 
};
