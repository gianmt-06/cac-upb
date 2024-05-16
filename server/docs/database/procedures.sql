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
    INTO v_users (rolid, idLocation, name, lastName, email, password)
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

-- CREATE APPMNT
CREATE PROCEDURE create_appmnt (
    in_idclient INTEGER,
    in_idlocation INTEGER,
    in_idtype INTEGER,
    in_code VARCHAR(50),
    in_description VARCHAR(250),
    in_date TIMESTAMP,
) 
LANGUAGE SQL 
AS $$
    INSERT 
    INTO appointments(idclient, idlocation, idappmttype, codeappmnt, description, date) 
    VALUES (in_idclient, in_idlocation, in_idtype, in_code, in_description, in_date);
$$;

-- UPDATE APPMNT
CREATE PROCEDURE update_appmnt (
    in_idAppmnt INTEGER,
    in_idlocation INTEGER,
    in_idtype INTEGER,
    in_description VARCHAR(250),
    in_date TIMESTAMP
) 
LANGUAGE SQL 
AS $$
    UPDATE
    appointments
    SET
    idlocation = in_idlocation,
    idappmttype = in_idtype,
    description = in_description,
    date = in_date 
    WHERE
    idappmnt = in_idAppmnt;
$$;

CREATE PROCEDURE delete_appmnt (
  in_idAppmnt INTEGER
)
LANGUAGE SQL 
AS $$
    DELETE FROM 
    appointments 
    WHERE 
    idappmnt = in_idAppmnt;
$$;

-- GET USER BY ID
CREATE OR REPLACE FUNCTION get_user(id INT)
RETURNS SETOF v_users 
AS 
$$
  SELECT * FROM v_users WHERE uid = id;
$$ LANGUAGE sql;

-- GET USER BY EMAIL
CREATE OR REPLACE FUNCTION get_user_by_email(in_email VARCHAR(50))
RETURNS SETOF v_users 
AS 
$$
  SELECT * FROM v_users WHERE email = in_email;
$$ LANGUAGE sql;

-- GET CLIENT BY ID
CREATE OR REPLACE FUNCTION get_client(cid INT)
RETURNS SETOF v_clients
AS 
$$
  SELECT * FROM v_clients WHERE id = cid;
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
