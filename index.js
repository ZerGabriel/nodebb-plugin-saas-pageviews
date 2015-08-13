
'use strict';

var db = module.parent.require('./database'),
	analytics = module.parent.require('./analytics');


(function(plugin) {

	plugin.init = function(params, callback) {

		params.router.get('/api/saas/pageviews', function(req, res, next) {
			if (req.ip !== '10.0.3.1') {
				return res.json(403, 'not-allowed');
			}
			analytics.getMonthlyPageViews(function(err, stats) {
				if (err) {
					return next(err);
				}
				res.json(stats);
			});
		});

		callback();
	};

}(module.exports));

