'use strict';

exports.index = function(req, res){
	var a = 1;
	var b = 2;
	var answer = a + b;
    return res.json(answer);
};