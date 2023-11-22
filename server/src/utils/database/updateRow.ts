import config from "../../config";
import { dbSqlite3 } from "../../database";

export const updateRow = (
  tablename: string,
  condition: string,
  validation: string,
  fill: Array<string | number>
): boolean => {
  const db = new dbSqlite3.Database(config.DATABASE_NAME);

  const query = `
    UPDATE ${tablename} SET ${condition} WHERE ${validation}
  `;

  db.serialize(() => {
    db.run(query, fill, (err) => {
      if (err) {
        return console.log(err.message);
      }
      console.log(`Se edito el campo likes de la tabla: ${tablename}`);
    });
  });

  db.close();
  return true;
};
