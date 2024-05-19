-- Types
INSERT INTO ClientTypes(description) VALUES ('Premium'), ('Free');
INSERT INTO AppointmentTypes(description) VALUES ('Quejas'), ('Reclamos'), ('Informacion');

INSERT INTO Roles(rolName) VALUES ('Sede'), ('Admin'), ('Asesor');

INSERT INTO Locations(nameLocation, city, state, address) VALUES ('Universidad Pontificia Bolivariana', 'Bucaramanga', 'Santander', 'Autopista');
INSERT INTO Locations(nameLocation, city, state, address) VALUES ('Sede Bello', 'Medellin', 'Antioquia', 'Calle 102 # 22-55');