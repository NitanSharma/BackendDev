const { faker } = require('@faker-js/faker');
// Get the client
const mysql = require('mysql2');

// Create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'Student',
  password: 'Nitin125sharma'
});

try {
    connection.query('SELECT * FROM user', (err,result) => {
        if(err) throw err;
        console.log(result);
    })
} catch ( err) {
    console.log(err);    
}

 connection.end();

 let createRandomUser = () => {
  return {
    Id: faker.string.uuid(),
    username: faker.internet.userName(),
    email: faker.internet.email(),   
    password: faker.internet.password(),
  };
}

