const express = require('express');
const { open } = require("sqlite");
const sqlite3 = require("sqlite3");
const path = require("path")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 8080;
app.use(express.json());
app.use(cors());

const databasePath = path.join(__dirname, "bookShelf.db");

let dataBase = null;

const initializeDBAndServer = async () => {
  try {
    dataBase = await open({
      filename: databasePath,
      driver: sqlite3.Database,
    });
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.log(`DB Error: ${error.message}`);
    process.exit(1);
  }
};

initializeDBAndServer();

app.get("/users/", async (request, response) => {
	const getQuery = `SELECT * FROM users;`;
	const usersArray = await dataBase.all(getQuery);
	response.send(usersArray);
});

app.post("/signup/", async (request, response) => {
  const { userId, username, password, number, email } = request.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const selectedUserQuery = `SELECT * FROM users WHERE email = '${email}';`;
  const dbUser = await dataBase.get(selectedUserQuery);
  if (dbUser === undefined) {
    if (password.length < 6) {
      response.status(400);
      response.send({errorMsg: "Password is too short"});
    }else if(number.length < 10 || number.length > 10){
      response.status(400);
      response.send({ errorMsg: "Invalid phone number length" });
    }
     else {
      const createUserQuery = `
      INSERT INTO 
        users (user_id, name, email, password, phone_number) 
      VALUES 
        (
          '${userId}',
          '${username}',
          '${email}',
          '${hashedPassword}', 
          '${number}'
        )`;
      const dbResponse = await dataBase.run(createUserQuery);
      const newUserId = dbResponse.lastID;
      response.status(200)
      response.send({successMsg: 'Successfully Registered'});
    }
  } else {
    response.status(400);
    response.send({errorMsg: "User already exists"});
  }
});

app.post("/login/", async (request, response) => {
  const { email, password } = request.body;
  const selectUserQuery = `SELECT * FROM users WHERE email = '${email}';`;
  const dbUser = await dataBase.get(selectUserQuery);
  
  if (dbUser === undefined) {
    response.status(400);
    response.send({ errorMsg: "Invalid user" });
  } else {
    const isPasswordMatched = await bcrypt.compare(password, dbUser.password);
    if (isPasswordMatched === true) {
      const payload = {email: email}
      const jwtToken = jwt.sign(payload, "USER_LOGIN_TOKEN");
      response.send({ successMsg: "Login Success", jwtToken });
    } else {
      response.status(400);
      response.send({ errorMsg: "Invalid password" });
    }
  }
});