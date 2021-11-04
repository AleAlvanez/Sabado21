CREATE TABLE categories (
idCategory INT  NOT NULL IDENTITY(1,1),
category VARCHAR (30) NOT NULL,

PRIMARY KEY (idCategory)
);

GO

CREATE TABLE products(
idProduct Varchar (6)  NOT NULL,
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
INSERT INTO products (idProduct,product,price,idCateg) VALUES ('LIM90','Lego IronMan 300PZ',729,1);
GO
INSERT INTO products (idProduct,product,price,idCateg) VALUES ('LSP90','Lego Spiderman 300PZ',200,1);
GO
SELECT * FROM products;
GO

CREATE TABLE users (
    id INT IDENTITY NOT NULL,
    [user] varchar(50) NOT NULL,
    [name] VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL,
    [password] VARCHAR(255) NOT NULL,

    PRIMARY KEY(id)
)
GO
CREATE TABLE cartProducts (
    id INT IDENTITY NOT NULL,
    id_product VARCHAR(30) NOT NULL,
    [name] VARCHAR(500) NOT NULL,
    price FLOAT NOT NULL,
    cantidad INT NOT NULL
)