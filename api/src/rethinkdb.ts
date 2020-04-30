import r from 'rethinkdb';

let databaseHost = process.env.DATABASE_HOST || '127.0.0.1'
let dbCon = null;

const onConnect = (error, connection) => {
  if (error) {
    console.log(error);
    setTimeout(() => {
      r.connect({
        host: databaseHost,
        db: 'list'
      }, onConnect)
    }, 100)
  } else {
    dbCon = connection;
  }
}

r.connect({
  host: databaseHost,
  db: 'list'
}, onConnect)


export { r, dbCon };
