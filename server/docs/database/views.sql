CREATE VIEW v_users AS SELECT 
    idUser AS uid,
    idRol AS rolid,
    idLocation as idlocation,
    nameUser as name,
    lastName as lastname,
    email as email,
    password as password,
    status as status
FROM users;

CREATE VIEW v_location AS SELECT 
    idLocation AS locationid,
    nameLocation as name,
    city,
    address
 FROM locations;

CREATE VIEW v_clients AS 
SELECT 
    c.idClient as id,
    c.idClientType as idtype,
    ct.description as descriptiontype
    c.docNumber as docnumber,
    c.nameClient as name,
    c.lastNameClient as lastname,
    c.birthDate as birth
FROM clients c 
JOIN ClientTypes ct ON c.idClientType = ct.idClientType;