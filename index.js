
'use strict';

var db = module.parent.require('./database'),
	analytics = module.parent.require('./analytics');


(function(plugin) {

	plugin.init = function(params, callback) {

		params.router.get('/api/admin/plugins/saas-pageviews', function(req, res, next) {
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

