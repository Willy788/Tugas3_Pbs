-- Tabel untuk informasi pelanggan
CREATE TABLE Customers (
    customer_id INT AUTO_INCREMENT PRIMARY KEY,
    NAME VARCHAR(100),
    email VARCHAR(100),
    phone VARCHAR(15)
);

-- Tabel untuk informasi sepeda
CREATE TABLE Bikes (
    bike_id INT AUTO_INCREMENT PRIMARY KEY,
    brand VARCHAR(50),
    model VARCHAR(50),
    price DECIMAL(10, 2),
    stock_quantity INT
);

-- Tabel untuk transaksi penjualan
CREATE TABLE Sales (
    sale_id INT AUTO_INCREMENT PRIMARY KEY,
    customer_id INT,
    bike_id INT,
    quantity INT,
    total_amount DECIMAL(10, 2),
    sale_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (customer_id) REFERENCES Customers(customer_id),
    FOREIGN KEY (bike_id) REFERENCES Bikes(bike_id)
);

-- Insert data pelanggan
INSERT INTO Customers (NAME, email, phone) VALUES
    ('John Doe', 'john.doe@example.com', '+1234567890'),
    ('Jane Smith', 'jane.smith@example.com', '+1987654321');

-- Insert data sepeda
INSERT INTO Bikes (brand, model, price, stock_quantity) VALUES
    ('Trek', 'FX 2 Disc', 750.00, 10),
    ('Giant', 'Defy Advanced 2', 1800.00, 5),
    ('Specialized', 'Sirrus X 3.0', 900.00, 8);

-- Insert transaksi penjualan
-- Misalkan John Doe membeli 2 sepeda Trek FX 2 Disc
INSERT INTO Sales (customer_id, bike_id, quantity, total_amount) VALUES
    (1, 1, 2, 1500.00);
