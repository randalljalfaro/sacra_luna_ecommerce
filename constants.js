var dbName = 'sacra_luna_ecommerce';
var origins = ['http://localhost:3000', 'http://localhost:8000', 'http://127.0.0.1:8080', 'http://127.0.0.1:8081', process.env.ORIGIN];

module.exports = {
	PORT: process.env.PORT || 3000,
	DB_NAME: dbName,
	DB_URI: process.env.MONGODB_URI || 'mongodb://localhost:27017/' + dbName,
	//DB_URI: process.env.MONGODB_URI || 'mongodb://root:ZSYtV75q3kEt@localhost:27017/' + dbName,
	ORIGINS: origins,
	ROOT: __dirname + '/public',
	SECRET_TOKEN: process.env.SECRET_TOKEN || 'secret_token'
}
