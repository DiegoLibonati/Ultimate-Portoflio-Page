import config from "../../config";
import { dbSqlite3 } from "../../database";

export const insertRow = (
  tablename: string,
  model: Record<string, string>,
  fill: Array<string | number>
): void => {
  const db = new dbSqlite3.Database(config.DATABASE_NAME);
  delete model.id;
  const data = Object.keys(model).map((value) => {
    return value;
  });

  const placeholders = data.map((value) => {
    return value.replace(value, "?");
  });

  const query = `
    INSERT INTO ${tablename}(${data}) VALUES(${placeholders})
  `;

  db.serialize(() => {
    db.run(query, fill, (err) => {
      if (err) {
        return console.log(err.message);
      }
      console.log(`Se agrego una nueva Fila a ${tablename}`);
    });
  });

  db.close();

  return;
};
