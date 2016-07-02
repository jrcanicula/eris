'use strict';

const importer = require('anytv-node-importer');

var path = require('path');



module.exports = (router) => {
    const __ = importer.dirloadSync(__dirname + '/../controllers');

    router.del = router.delete;

    router.get('/', __.home.home);

    router.get('/user/:id', __.user.get_user);

    /*router.all('*', (req, res) => {
        res.sendfile('index.html');
    });

    
	*/
	router.get('/', function(req, res) {
		res.sendFile(path.join(__dirname, '/../index.html')); 
	});

	router.get('*', function(req, res) {
		res.sendFile(path.join(__dirname, '/../index.html')); 
	});
return router;

};
