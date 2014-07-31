'use strict';

exports.index = function(req, res){
	var o = [];
	o.push('a');
	o.push('b');
	o.push('c');
    return res.json(o);
};