-- CREATE USERS
CREATE PROCEDURE create_user (
    new_rolId INTEGER,
    new_locationId INTEGER,
    new_name VARCHAR(50),
    new_lastName VARCHAR(50),
    new_email VARCHAR(50),
    new_password VARCHAR(50)
) 
LANGUAGE SQL 
AS $$
    INSERT 
    INTO v_users (idRol, idLocation, nameUser, lastName, email, password)
    VALUES (new_rolId, new_locationId, new_name, new_lastName, new_email, new_password);
$$;

CALL create_user(1, 1, 'Gian', 'Marco', 'prueba@gmail.com', 'test123');

-- CREATE CLIENT
CREATE PROCEDURE create_client (
    new_type INTEGER,
    new_docnumber INTEGER,
    new_name VARCHAR(50),
    new_lastname VARCHAR(50),
    new_birth DATE
) 
LANGUAGE SQL 
AS $$
    INSERT 
    INTO v_clients (type, docnumber, name, lastname, birth)
    VALUES (new_type, new_docnumber, new_name, new_lastname, new_birth);
$$;



-- GET USER BY ID
CREATE OR REPLACE FUNCTION get_user(id INT)
RETURNS SETOF v_users 
AS 
$$
  SELECT * FROM v_users WHERE uid = id;
$$ LANGUAGE sql;

-- GET LOCATION BY ID
CREATE OR REPLACE FUNCTION get_location(id INT)
RETURNS SETOF v_location 
AS 
$$
  SELECT * FROM v_location WHERE locationid = id;
$$ LANGUAGE sql;

-- UPDATE USER
 CREATE PROCEDURE update_user(
    id INTEGER,
    new_rolId INTEGER,
    new_locationId INTEGER,
    new_name VARCHAR(50),
    new_lastName VARCHAR(50),
    new_email VARCHAR(50),
    new_password VARCHAR(50)
)
LANGUAGE SQL 
AS $$
    UPDATE 
    v_users
    SET 
    idRol = new_rolId,
    idLocation = new_locationId, 
    nameUser = new_name, 
    lastName = new_lastName, 
    email = new_email, 
    password = new_password
    WHERE idUser = id;
$$;

-- GET ALL LOCATIONS 
CREATE OR REPLACE FUNCTION get_locations()
RETURNS SETOF v_location
AS 
$$
  SELECT * FROM v_location;
$$ LANGUAGE sql;
