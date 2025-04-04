import mysql from 'mysql2';

//type per i dati della connessione
interface MySQLConfig {
  host: string;
  user: string;
  password: string;
  database: string;
  port: number;
  ssl: {
    ca: Buffer;
  };
}

//prendo il type e lo 'incapsulo' in un pool di connessione al db
class MySQLLib {
  private pool: mysql.Pool;

  constructor(config: MySQLConfig) {
    const connectionOptions: mysql.PoolOptions = {
      host: config.host,
      user: config.user,
      password: config.password,
      database: config.database,
      port: config.port,
      ssl: config.ssl,
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0,
    };

    this.pool = mysql.createPool(connectionOptions);
  }

  //funzione per eseguire le query
  public async query<T>(sql: string, params?: any[]): Promise<T[]> {
    return new Promise<T[]>((resolve, reject) => {
      this.pool.execute(sql, params, (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results as T[]);
        }
      });
    });
  }


  public close(): void {
    this.pool.end((err) => {
      if (err) {
        console.error('Errore durante la chiusura del pool di connessioni:', err);
      } else {
        console.log('Pool di connessioni chiuso con successo.');
      }
    });
  }
}

export { MySQLLib, MySQLConfig };
