import config from "../../config";
import { dbSqlite3 } from "../../database";

export const dropTable = (tablename: string): void => {
  const db = new dbSqlite3.Database(config.DATABASE_NAME);
  const query = `DROP TABLE IF EXISTS ${tablename};`;

  db.serialize(() => {
    db.run(query);
  });

  db.close();

  return;
};
