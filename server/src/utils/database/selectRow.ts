import config from "../../config";
import { dbSqlite3 } from "../../database";

export const selectRow = (
  tablename: string,
  validation?: string
): Promise<void | unknown[]> => {
  const db = new dbSqlite3.Database(config.DATABASE_NAME);

  const query = !validation
    ? `SELECT * FROM ${tablename}`
    : `SELECT * FROM ${tablename} WHERE ${validation}`;

  return new Promise((resolve, reject) =>
    db.serialize(() => {
      db.all(query, (err, rows) => {
        if (err) reject(err);
        resolve(rows);
        db.close(); // Ni idea
      });
    })
  );
};
