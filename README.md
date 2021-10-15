## Tabelas mysql

```
CREATE TABLE users (
  id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  email varchar(100) NOT NULL UNIQUE,
  password varchar(100) NOT NULL
);

CREATE TABLE lectures (
  id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  title varchar(45) NOT NULL,
  description text,
  createdAt DATE
);
```

###
Informações para rodar o server e o client, estão em suas respectivas pastas.