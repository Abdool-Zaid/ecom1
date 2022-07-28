const express = require("express");
const router = express.Router();
const con = require("../lib/db_connection");

router.get("/", (req, res) => {
  try {
    con.query("SELECT * FROM orders", (err, result) => {
      if (err) throw err;
      res.send(result);
    });
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});

// Gets one orders
router.get("/:id", (req, res) => {
  try {
    con.query(
      `SELECT * FROM orders WHERE product_id = ${req.params.id}`,
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
    user_id,
    amount,
    shipping_address,
    order_email,
    order_date,
    order_status,
  } = req.body;
  // OR
  // the below requires you to add everything one by one
  //   const email = req.body.email;
  try {
    con.query(
      //When using the ${}, the content of con.query MUST be in the back tick
      `INSERT INTO orders (user_id,amount,shipping_address,order_email,order_date,order_status) VALUES ("${user_id}","${amount}","${shipping_address}","${order_email}","${order_date}","${order_status}")`,
      (err, result) => {
        if (err) throw err;
        res.send(`order made`);
      }
    );
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});

// update user

router.put("/:id", (req, res) => {
  try {
    const {
        user_id,
        amount,
        shipping_address,
        order_email,
        order_date,
        order_status,
    } = req.body;

    con.query(
      `UPDATE orders set user_id="${user_id}",amount="${amount}",shipping_address="${shipping_address}",order_email="${order_email}",order_date="${order_date}",order_status="${order_status}"WHERE order_id = "${req.params.id}"`,
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

// delete user

router.delete("/:id", (req, res) => {
  try {
    con.query(
      `DELETE FROM orders WHERE order_id = "${req.params.id}" `,
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

module.exports = router;
