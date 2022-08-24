CREATE TABLE cuentas (
    user_id serial PRIMARY KEY,
    username VARCHAR (100) UNIQUE NOT NULL,
    PASSWORD VARCHAR (50) NOT NULL,
    email VARCHAR (200) UNIQUE NOT NULL,
    created_on TIMESTAMP NOT NULL,
    last_login TIMESTAMP
);

CREATE TABLE roles (
    rol_id serial PRIMARY KEY,
    nombre_rol VARCHAR (200) UNIQUE NOT NULL
);

CREATE TABLE roles_cuentas (
    user_id INT NOT NULL,
    rol_id INT NOT NULL,
    PRIMARY KEY (user_id, rol_id),
    FOREIGN KEY (rol_id) REFERENCES roles (rol_id),
    FOREIGN KEY (user_id) REFERENCES cuentas (user_id)
);