import express from 'express';
import pool from "../db.js";
import bcrypt from "bcrypt";
import jwtgenerator from "../utils/jwtGenerator.js";
import validInfo from '../middleware/validInfo.js';
import authorize from '../middleware/authorization.js';
const router = express.Router();  

//registering a user

router.post("/register",validInfo,async(req, res) => {
       try {
              //1. destructure the req.body
              const {name, email, password} = req.body;

              //2. check if user exists
              const user=await pool.query("SELECT * FROM users WHERE user_email=$1",[email]);

              if(user.rows.length !==0){
                     return  res.status(401).send("User already exists");
              }
              //3. Bcrypt the user password
              const saltRounds = 10;
              const salt=await bcrypt.genSalt(saltRounds);
              const bcryptPassword=await bcrypt.hash(password,salt);

              //Entering new user into database

              const newUser=await pool.query("INSERT INTO users (user_name,user_email,user_password) VALUES($1,$2,$3) RETURNING *",[name,email,bcryptPassword]);
              
              //Generate JWT token
              const token=jwtgenerator(newUser.rows[0].user_id);

               res.json({token});


       } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
       } 
});

//Login route

router.post("/login",validInfo,async(req, res) =>{

       try {
              
       //1. destructure the req.body
       const {email, password} = req.body;

       //2. check if user does not exist else throw error
       const user=await pool.query("SELECT * FROM users WHERE user_email=$1",[email]);

       if(user.rows.length ===0){
              return  res.status(401).json("Password or Email is incorrect");
       }
       
       //3. Check if incoming password is the same as the database password
       const validPassword=await bcrypt.compare(password,user.rows[0].user_password);

       if(!validPassword){
              return  res.status(401).json("Password or Email is incorrect");
       }

       //4. give users the jwt token
       const token=jwtgenerator(user.rows[0].user_id);
       res.json({token});

        }catch (err) {
              console.error(err.message);
              res.status(500).send("Server Error");
       }

}); 


       router.get("/is-verify",authorize,async(req, res) => {
       try {
             res.json(true);
       } catch (err) {
         console.error(err.message);
         res.status(500).send("Server Error");     
       }      
       });



export default router;