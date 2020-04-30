const r = require('rethinkdb');

let databaseHost = process.env.DATABASE_HOST || '127.0.0.1'

const dbName = 'list';
const tables = [
  'bots',
  'users'
]

r.connect({
  host: databaseHost,
  db: dbName
}, (error, connection) => {
  if (error) {
    console.log(error);
    connection.close();
  } else {
    r.dbList().run(connection)
      .then((dbList) => {
        if (dbList.includes(dbName)) return;
        return r.dbCreate(dbName).run(connection);
      })
      .then(() => r.db(dbName).tableList().run(connection))
      .then((tableList) => {
        const tablesToCreate = [];

        for (const table of tables) {
          if (!tableList.includes(table)) {
            tablesToCreate.push(r.db(dbName).tableCreate(table).run(connection))
          }
        }

        return Promise.all(tablesToCreate);
      })
      .then(() => {
        console.log('RethinkDB Database setup!')
        connection.close();
      })
      .catch((err) => {
        console.log(err);
        connection.close();
      })
  }
})
