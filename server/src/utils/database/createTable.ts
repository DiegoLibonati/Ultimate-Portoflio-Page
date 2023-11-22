import config from "../../config";
import { dbSqlite3 } from "../../database";

export const createTable = (
  tablename: string,
  model: Record<string, string>
): void => {
  const db = new dbSqlite3.Database(config.DATABASE_NAME);
  const data = Object.entries(model).map((value) => {
    return `${value[0]} ${value[1]}`;
  });
  const query = `
    CREATE TABLE IF NOT EXISTS ${tablename} (
        ${data}
    )
  `;

  db.serialize(() => {
    db.run(query);
  });

  db.close();

  return;
};
