SELECT enum_range(null::appmntstatusenum);
----------------------------------------------------------
CREATE VIEW v_clients AS 
SELECT 
    idClient as id,
    idClientType as idtype,
    docType as doctype,
    docNumber as docnumber,
    nameClient as name,
    lastNameClient as lastname,
    birthDate as birth
FROM clients;

-- client: id, idtype, doctype, docnumber, name, lastname, birth

CREATE VIEW v_client_types AS 
SELECT 
    idclientType as id,
    description as description
FROM clientTypes;

-- clientType: id, description

CREATE VIEW v_location AS SELECT 
    idLocation AS id,
    nameLocation as name,
    city as city,
    state as state,
    address as address
 FROM locations;

-- location: id, name, city, address

CREATE VIEW v_users AS SELECT 
    idUser AS id,
    idRol AS rolid,
    idLocation as idlocation,
    doctype as doctype,
    docnumber as docnumber,
    nameUser as name,
    lastName as lastname,
    email as email,
    password as password,
    status as status
FROM users;

-- user: id, rolid, idlocation, doctype, docnumber, name, lastname, email, password, status

CREATE VIEW v_appmnts AS 
SELECT 
    idappmnt as id,
    idclient as clientid,
    idlocation as locationid,
    idappmttype as idtype,
    codeappmnt as code,
    description as description,
    status as status,
    date as date,
    time as time
FROM appointments;

-- appmnt: id, clientid, locationid, idtype, code, description, status, date, time

CREATE VIEW v_appmnt_types AS 
SELECT 
    idappmttype as id,
    description as description
FROM appointmenttypes;

-- appmntTypes: id, description