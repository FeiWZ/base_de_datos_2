CREATE TABLE IF NOT EXISTS alumnos (
    expediente INTEGER NOT NULL UNIQUE CHECK(LENGTH(expediente)=9 AND expediente>0),
    app1 VARCHAR(255) NOT NULL CHECK(LENGTH(TRIM(app1))>0),
    app2 VARCHAR(255) CHECK(app2 IS NULL OR LENGTH(TRIM(app2))>0),
    nombres VARCHAR(255) NOT NULL CHECK(LENGTH(TRIM(nombres))>0),
    correo VARCHAR(255) NOT NULL UNIQUE CHECK(correo=CONCAT("a",expediente,"@unison.mx"))
);
-- el siguiente trigger elimina los espacios en blanco en la primera columna antes de hacer el insert
DELIMITER $$
CREATE TRIGGER bi_alumnos_app1
BEFORE INSERT ON alumnos
FOR EACH ROW
BEGIN
    SET NEW.app1 = TRIM(NEW.app1);
END$$

DELIMITER ;

-- pruebas de integridad
INSERT INTO alumnos VALUES(null, "Abril", "Garcia", "Jose Humberto", "jose.abril@unison.mx");
INSERT INTO alumnos VALUES(0, "Abril", "Garcia", "Jose Humberto", "jose.abril@unison.mx");
INSERT INTO alumnos VALUES(224215696, "Abril", "Garcia", "Jose Humberto", "jose.abrill@unison.mx");
INSERT INTO alumnos VALUES(-224215696, "Abril", "Garcia", "Jose Humberto", "jose.abril@unison.mx");
INSERT INTO alumnos VALUES(-22421569690, "Abril", "Garcia", "Jose Humberto", "jose.abrill@unison.mx");
INSERT INTO alumnos VALUES(224215696, "", "Garcia", "Jose Humberto", "jose.abrill@unison.mx");
INSERT INTO alumnos VALUES(224215697, "       ", "Garcia", "Jose Humberto", "jose.abril@unison.mx");
INSERT INTO alumnos VALUES(224215695, "    a       ", "Garcia", "Jose Humberto", "jose.abrill@unison.mx");
INSERT INTO alumnos VALUES(224215695, "    a       ", null, "Jose Humberto", "jose.abrill@unison.mx");
INSERT INTO alumnos VALUES(224215696, "    a       ", " ", "Jose Humberto", "jose.abril@unison.mx");
INSERT INTO alumnos VALUES(224215696, "Abril", null, " ", "jose.abril@unison.mx");
