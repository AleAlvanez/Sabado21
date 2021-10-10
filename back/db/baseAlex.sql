CREATE DATABASE alexsshop
GO
USE alexsshop
GO
USE alexsshop
GO
CREATE TABLE categories (
idCategory INT  NOT NULL IDENTITY(1,1),
category VARCHAR (30) NOT NULL,

PRIMARY KEY (idCategory)
);

GO

CREATE TABLE products(
idProduct INT NOT NULL IDENTITY(1,1),
product VARCHAR (50) NOT NULL,
price DECIMAL NOT NULL,
idCateg INT NOT NULL,
PRIMARY KEY (idProduct)
);

GO
ALTER TABLE products ADD FOREIGN KEY(idCateg) REFERENCES categories(idCategory);
GO
INSERT INTO categories (category) VALUES ('Juegos de Construccion');
GO
INSERT INTO categories (category) VALUES ('Electronicos para Niños');
GO
INSERT INTO categories (category) VALUES ('Vehiculos de Juguete');
GO
INSERT INTO categories (category) VALUES ('Peluches');
GO
INSERT INTO categories (category) VALUES ('Juegos de Mesa y Cartas');
GO
INSERT INTO products (idProduct,product,price) VALUES ('LIM90','Lego IronMan 300PZ',729);
GO
INSERT INTO products (idProduct,product,price) VALUES ('LSP90','Lego Spiderman 300PZ',200);
GO
SELECT * FROM products;
GO
 set dateformat dmy;
 GO
CREATE TABLE users (
usuario VARCHAR (40) NOT NULL,
nombre VARCHAR (40) NOT NULL,
primer_Ap VARCHAR (40) NOT NULL,
correo VARCHAR (40) NOT NULL,
pass_word VARCHAR (40) NOT NULL,
num_celular VARCHAR (40) NOT NULL,
fehca_registro Datetime Default GetDate() NOT NULL,

PRIMARY KEY (usuario)
);
