import Database from 'better-sqlite3';

const db = new Database('nova-studio.db');

// Initialize database tables
db.exec(`
  CREATE TABLE IF NOT EXISTS clients (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    phone TEXT NOT NULL,
    birthDate TEXT NOT NULL
  );

  CREATE TABLE IF NOT EXISTS services (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    clientId INTEGER NOT NULL,
    serviceName TEXT NOT NULL,
    date TEXT NOT NULL,
    price REAL NOT NULL,
    FOREIGN KEY (clientId) REFERENCES clients (id)
  );
`);

export default db;