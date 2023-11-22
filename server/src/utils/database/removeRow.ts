import config from "../../config";
import { dbSqlite3 } from "../../database";

export const removeRow = (tablename: string, validation?: string): void => {
  const db = new dbSqlite3.Database(config.DATABASE_NAME);

  const query = !validation
    ? `DELETE FROM ${tablename}`
    : `DELETE FROM ${tablename} WHERE ${validation}`;

  db.serialize(() => {
    db.run(query);
  });

  db.close();

  return;
};
