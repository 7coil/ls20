import r from 'rethinkdb';

let databaseHost = process.env.DATABASE_HOST || '127.0.0.1'
let dbCon = null;

r.connect({
  host: databaseHost,
  db: 'list'
}, (error, connection) => {
  dbCon = connection;
})

export {
  r,
  dbCon
}
