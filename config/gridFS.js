const { MongoClient, GridFSBucket } = require('mongodb');

const initGFS = async () => {
  const mongoURI = "mongodb+srv://darul-hikmah-db-admin:fR6k1XxLmrikDWjS@dhdb.7la1zzz.mongodb.net/?retryWrites=true&w=majority";
  const client = await MongoClient.connect(mongoURI);
  const db = client.db();
  
  const gfs = new GridFSBucket(db, { bucketName: 'uploads' });

  return gfs;
};

module.exports = initGFS;


