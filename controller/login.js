import { db } from "../connection.js";

export const login = (req, res) => {
  const q = "SELECT * FROM user WHERE username=?";
  db.query(q, [req.body.username], (err, data) => {
    if (err) {
      return res.status(500).send("Something went wrong");
    }
    
    if (data.length) {
      return res.status(409).send("User already exists");
    }

    const a = "INSERT INTO user (`username`, `address`, `email`, `password`) VALUE (?, ?, ?, ?)";
    const values = [req.body.username, req.body.address, req.body.email, req.body.password];

    db.query(a, values, (err, data) => {
      if (err) {
        return res.status(500).send("Something went wrong");
      }
      
      return res.status(200).send("Registered");
    });
  });
};
