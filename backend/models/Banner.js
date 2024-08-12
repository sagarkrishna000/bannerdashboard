const db = require("../config/db");

const createBannerTable = () => {
  const query = `
        CREATE TABLE IF NOT EXISTS banner (
            id INT AUTO_INCREMENT PRIMARY KEY,
            description TEXT,
            timer INT,
            link VARCHAR(255),
            visibility BOOLEAN DEFAULT true
        )
    `;
  db.query(query, (err, result) => {
    if (err) throw err;
    console.log("Table created");
  });
};

const getBanner = (callback) => {
  const query = "SELECT * FROM banner WHERE id = 1";
  db.query(query, (err, result) => {
    if (err) throw err;
    callback(result[0]);
  });
};

const updateBanner = (data, callback) => {
  const query =
    "UPDATE banner SET description = ?, timer = ?, link = ?, visibility = ? WHERE id = 1";
  db.query(
    query,
    [data.description, data.timer, data.link, data.visibility],
    (err, result) => {
      if (err) throw err;
      callback(result);
    }
  );
};

module.exports = { createBannerTable, getBanner, updateBanner };
