const express = require("express");
const router = express.Router();
const con = require("../lib/db_connection");

router.get("/", (req, res) => {
  try {
    con.query("SELECT * FROM products", (err, result) => {
      if (err) throw err;
      res.send(result); 
    });
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});

router.get("/", (req, res) => {
  try {
    con.query("SELECT * FROM products", (err, result) => {
      if (err) throw err;
      res.send(result);
    });
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});
// Gets one products
router.get("/:id", (req, res) => {
  try {
    con.query(
      `SELECT * FROM products WHERE user_id = ${req.params.id}`,
      (err, result) => {
        if (err) throw err;
        res.send(result);
      }
    );
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});
// Add new post
router.post("/", (req, res) => {
  // the below allows you to only need one const, but every input required is inside of the brackets
  const {
    email,
    password,
    full_name,
    billing_address,
    default_shipping_address,
    country,
    phone,
    user_type,
  } = req.body;
  // OR
  // the below requires you to add everything one by one
  //   const email = req.body.email;
  try {
    con.query(
      //When using the ${}, the content of con.query MUST be in the back tick
      `INSERT INTO products (email,password,full_name,billing_address,default_shipping_address,country,phone,user_type) VALUES ("${email}","${password}","${full_name}","${billing_address}","${default_shipping_address}","${country}","${phone}","${user_type}")`,
      (err, result) => {
        if (err) throw err;
        res.send(`User registered ${full_name}`);
      }
    );
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});


module.exports = router;
