-- GET CLIENT BY ID
CREATE OR REPLACE FUNCTION get_client(cid INT)
RETURNS SETOF v_clients
AS 
$$
  SELECT * FROM v_clients WHERE id = cid;
$$ LANGUAGE sql;

------------------------------------------------------------------

-- ############## USERS 

CREATE OR REPLACE FUNCTION get_user_by_id(in_id INT)
RETURNS SETOF v_users 
AS $$
  SELECT * FROM v_users WHERE id = in_id;
$$ LANGUAGE sql;

-- Return User: id, rolid, idlocation, doctype, docnumber, name, lastname, email, password, status

CREATE OR REPLACE FUNCTION get_user_by_email(in_email VARCHAR(50))
RETURNS SETOF v_users 
AS 
$$
  SELECT * FROM v_users WHERE email = in_email;
$$ LANGUAGE sql;

-- Return User: id, rolid, idlocation, doctype, docnumber, name, lastname, email, password, status

 CREATE PROCEDURE update_user(
    in_id INTEGER,
    in_rolid INTEGER,
    in_locationid INTEGER,
    in_name VARCHAR(50),
    in_lastname VARCHAR(50),
    in_email VARCHAR(50),
    in_password VARCHAR(50)
)
LANGUAGE SQL 
AS $$
    UPDATE 
    v_users
    SET 
    rolid = in_rolid,
    idlocation = in_locationid, 
    name = in_name, 
    lastname = in_lastname, 
    email = in_email, 
    password = in_password
    WHERE id = in_id;
$$;

-- NO RETURN

CREATE PROCEDURE create_user (
    in_rolid INTEGER,
    in_locationId INTEGER,
    in_doctype docsenum,
    in_docnumber VARCHAR(50),
    in_name VARCHAR(50),
    in_lastname VARCHAR(50),
    in_email VARCHAR(50),
    in_password VARCHAR(50)
) 
LANGUAGE SQL 
AS $$
    INSERT 
    INTO v_users (rolid, idlocation, doctype, docnumber, name, lastName, email, password)
    VALUES (in_rolid, in_locationid, in_doctype, in_docnumber, in_name, in_lastname, in_email, in_password);
$$;

-- NO RETURN

-- ################ LOCATIONS

CREATE OR REPLACE FUNCTION get_location(in_id INT)
RETURNS SETOF v_location 
AS 
$$
  SELECT * FROM v_location WHERE id = in_id;
$$ LANGUAGE sql;

-- Return location: id, name, city, address

-- ############## CLIENT

CREATE PROCEDURE create_client (
    in_type INTEGER,
    in_doctype docsenum,
    in_docnumber INTEGER,
    in_name VARCHAR(50),
    in_lastname VARCHAR(50),
    in_birth DATE
)
LANGUAGE SQL 
AS $$
    INSERT 
    INTO v_clients (idtype, doctype, docnumber, name, lastname, birth)
    VALUES (in_type, in_doctype, in_docnumber, in_name, in_lastname, in_birth);
$$;

-- NO RETURN

CREATE OR REPLACE FUNCTION get_client_by_doc(in_docnumber VARCHAR(50))
RETURNS SETOF v_clients
AS 
$$
  SELECT * FROM v_clients WHERE docnumber = in_docnumber;
$$ LANGUAGE sql;

-- Return Client: id, idtype, doctype, docnumber, name, lastname, birth

CREATE OR REPLACE FUNCTION get_client_by_id(in_id INT)
RETURNS SETOF v_clients
AS 
$$
  SELECT * FROM v_clients WHERE id = in_id;
$$ LANGUAGE sql;

-- Return Client: id, idtype, doctype, docnumber, name, lastname, birth


-- ############## APPOINTMENTS

CREATE OR REPLACE FUNCTION get_appointment_by_code(in_code VARCHAR(50))
RETURNS SETOF v_appmnts
AS 
$$
  SELECT * FROM v_appmnts WHERE code = in_code;
$$ LANGUAGE sql;

-- Return Appointment: id, clientid, locationid, idtype, code, description, status, date, time

CREATE PROCEDURE update_appmnt (
    in_code VARCHAR(50),
    in_idlocation INTEGER,
    in_idtype INTEGER,
    in_description VARCHAR(250),
    in_date DATE,
    in_time TIME
) 
LANGUAGE SQL 
AS $$
    UPDATE
    v_appmnts
    SET
    locationid = in_idlocation,
    idtype = in_idtype,
    description = in_description,
    date = in_date,
    time = in_time 
    WHERE
    code = in_code;
$$;

-- NO RETURN

CREATE PROCEDURE create_appmnt (
    in_idclient INTEGER,
    in_idlocation INTEGER,
    in_idtype INTEGER,
    in_code VARCHAR(50),
    in_description VARCHAR(250),
    in_date DATE,
    in_time TIME
) 
LANGUAGE SQL 
AS $$
    INSERT 
    INTO v_appmnts(clientid, locationid, idtype, code, description, date, time) 
    VALUES (in_idclient, in_idlocation, in_idtype, in_code, in_description, in_date, in_time);
$$;

-- NO RETURN

CREATE PROCEDURE delete_appmnt_by_code(
  in_code VARCHAR(50)
)
LANGUAGE SQL 
AS $$
    DELETE FROM 
    v_appmnts 
    WHERE 
    code = in_code;
$$;

-- NO RETURN

CREATE OR REPLACE FUNCTION get_locations()
RETURNS SETOF v_location
AS 
$$
  SELECT * FROM v_location;
$$ LANGUAGE sql;

