const env = process.env.NODE_ENV || 'production'

//insert your API Key & Secret for each environment, keep this file local and never push it to a public repo for security purposes.
const config = {
	development :{
		APIKey : 'ZCxgUpZbTne6-wsTEV-zPA',
		APISecret : 'DypwS1s6HI5IvtTYvb0sgMyLnBEY2g44Nyd6'
	},
	production:{	
		APIKey : 'ZCxgUpZbTne6-wsTEV-zPA',
		APISecret : 'DypwS1s6HI5IvtTYvb0sgMyLnBEY2g44Nyd6'
	}
};

module.exports = config[env]
