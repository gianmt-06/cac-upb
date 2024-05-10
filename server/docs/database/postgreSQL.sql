CREATE DATABASE cacupb;
\c cacupb;

CREATE TABLE IF NOT EXISTS Clients (
    idClient INT PRIMARY KEY,
    idClientType INT NOT NULL,
    docNumber VARCHAR(50) UNIQUE NOT NULL,
    nameClient VARCHAR(50) NOT NULL,
    lastNameClient VARCHAR(50) NOT NULL,
    birthDate DATE NOT NULL
);

CREATE TABLE IF NOT EXISTS ClientTypes (
    idClientType INT PRIMARY KEY,
    description VARCHAR(50) NOT NULL
);

CREATE TYPE userStatusEnum AS ENUM ('Active', 'Inactive');

CREATE TABLE IF NOT EXISTS Users (
    idUser INT PRIMARY KEY,
    idRol INT NOT NULL,
    idLocation INT NOT NULL,
    nameUser VARCHAR(50) NOT NULL,
    lastName VARCHAR(50) NOT NULL,
    email VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR(60) NOT NULL,
    status userStatusEnum -- Enum
);

CREATE TABLE IF NOT EXISTS Roles (
    idRol INT PRIMARY KEY,
    rolName VARCHAR(50) UNIQUE NOT NULL
);

CREATE TABLE IF NOT EXISTS Permissions (
    idPermission INT PRIMARY KEY,
    permissionName VARCHAR(50) UNIQUE NOT NULL 
);

CREATE TABLE IF NOT EXISTS RolesHasPermissions (
    idRolHasPermission INT PRIMARY KEY,
    idRol INT NOT NULL,
    idPermission INT NOT NULL
);

CREATE TABLE IF NOT EXISTS Locations (
    idLocation INT PRIMARY KEY,
    nameLocation VARCHAR(50) NOT NULL,
    city VARCHAR(50) NOT NULL,
    address VARCHAR(50) NOT NULL
);

CREATE TYPE appmntStatusEnum AS ENUM ('active', 'rescheduled' ,'canceled', 'close');

CREATE TABLE IF NOT EXISTS Appointments (
    idAppmnt INT PRIMARY KEY,
    idClient INT NOT NULL,
    idLocation INT NOT NULL,
    idAppmtType INT NOT NULL,
    codeAppmnt VARCHAR(50) NOT NULL,
    description VARCHAR(250) NOT NULL,
    status appmntStatusEnum,
    date TIMESTAMP NOT NULL
);

CREATE TABLE IF NOT EXISTS AppointmentTypes (
    idAppmtType INT PRIMARY KEY,
    description VARCHAR(50) NOT NULL
);

CREATE TABLE IF NOT EXISTS UserAppointment (
    idUserAppmnt INT PRIMARY KEY,
    idUser INT NOT NULL,
    idAppmnt INT NOT NULL
);

-- FOREIGN KEYS 
ALTER TABLE Clients ADD CONSTRAINT fk_client_clienttype FOREIGN KEY (idClientType) REFERENCES ClientTypes(idClientType);

ALTER TABLE Appointments ADD CONSTRAINT fk_appmnt_client FOREIGN KEY (idClient) REFERENCES Clients(idClient);
ALTER TABLE Appointments ADD CONSTRAINT fk_appmnt_location FOREIGN KEY (idLocation) REFERENCES Locations(idLocation);
ALTER TABLE Appointments ADD CONSTRAINT fk_appmnt_appmnttype FOREIGN KEY (idAppmtType) REFERENCES AppointmentTypes(idAppmtType);

ALTER TABLE Users ADD CONSTRAINT fk_user_rol FOREIGN KEY (idRol) REFERENCES Roles(idRol);
ALTER TABLE Users ADD CONSTRAINT fk_user_location FOREIGN KEY (idLocation) REFERENCES Locations(idLocation);

ALTER TABLE RolesHasPermissions ADD CONSTRAINT fk_rhp_rol FOREIGN KEY (idRol) REFERENCES Roles(idRol);
ALTER TABLE RolesHasPermissions ADD CONSTRAINT fk_rhp_permission FOREIGN KEY (idRolHasPermission) REFERENCES Permissions(idPermission);

ALTER TABLE UserAppointment ADD CONSTRAINT fk_userappmnt_user FOREIGN KEY (idUser) REFERENCES Users(idUser);
ALTER TABLE UserAppointment ADD CONSTRAINT fk_userappmnt_appmnt FOREIGN KEY (idAppmnt) REFERENCES Appointments(idAppmnt);


