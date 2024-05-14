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

 CREATE VIEW v_clients AS SELECT 
    idClient as id,
    idClientType as type,
    docNumber as docnumber,
    nameClient as name,
    lastNameClient as lastname,
    birthDate as birth
FROM clients;