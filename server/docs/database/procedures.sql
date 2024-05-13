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

-- GET USERS
CREATE OR REPLACE FUNCTION get_user(id INT)
RETURNS SETOF v_users 
AS 
$$
  SELECT * FROM v_users WHERE idUser = id;
$$ LANGUAGE sql;

-- GET USERS
CREATE OR REPLACE FUNCTION get_location(id INT)
RETURNS SETOF v_location 
AS 
$$
  SELECT * FROM v_location WHERE idLocation = id;
$$ LANGUAGE sql;