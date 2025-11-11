CREATE DATABASE jwttutorial;

--set extension
CREATE TABLE users(
    user_id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_name VARCHAR(255) NOT NULL,
    user_email VARCHAR(255) UNIQUE NOT NULL,
    user_password VARCHAR(255) NOT NULL
);

--insert fake users
INSERT INTO users (user_name,user_email,user_password) VALUES ('Anmol','anmol.srivastava0808@gmail.com','08anmol08');