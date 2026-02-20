var salida= "";
 
const apellidosMexico = [
    "Hernández", "García", "Martínez", "López", "González",
    "Pérez", "Rodríguez", "Sánchez", "Ramírez", "Cruz",
    "Flores", "Gómez", "Morales", "Vázquez", "Jiménez",
    "Reyes", "Díaz", "Torres", "Gutiérrez", "Ruiz",
    "Mendoza", "Aguilar", "Ortiz", "Moreno", "Castillo",
    "Romero", "Álvarez", "Méndez", "Chávez", "Rivera",
    "Juárez", "Domínguez", "Herrera", "Medina", "Ramos",
    "Castro", "Ortega", "Vargas", "Santiago", "Salazar",
    "Rojas", "De la Cruz", "Guzmán", "Franco", "Silva",
    "Luna", "Muñoz", "Cabrera", "Delgado", "Contreras",
    "León", "Ríos", "Estrada", "Bautista", "Meza",
    "Gallegos", "Miranda", "Carrillo", "Valencia", "Nava",
    "Lara", "Pacheco", "Soto", "Cervantes", "Robledo",
    "Esquivel", "Salinas", "Maldonado", "Marín", "Calderón",
    "Lugo", "Rosas", "Padilla", "Fuentes", "Espinoza",
    "Rangel", "Acosta", "Sandoval", "Villegas", "Valdés",
    "Alfaro", "Camacho", "Guerrero", "Lozano", "Guevara",
    "Galindo", "Beltrán", "Orozco", "Pineda", "Navarro",
    "Parra", "Villalobos", "Duarte", "Serrano", "Ávila",
    "Ibarra", "Téllez", "Rocha", "Trejo", "Esparza"
];
const apellidosRusos = [
    "Smirnov", "Ivanov", "Kuznetsov", "Popov", "Vasiliev",
    "Petrov", "Sokolov", "Mikhailov", "Novikov", "Fedorov",
    "Morozov", "Volkov", "Alekseev", "Lebedev", "Semenov",
    "Egorov", "Pavlov", "Kozlov", "Stepanov", "Nikolaev",
    "Orlov", "Andreev", "Makarov", "Zakharov", "Zaitsev",
    "Soloviev", "Belov", "Komarov", "Grigoriev", "Romanov",
    "Karpov", "Frolov", "Baranov", "Kulikov", "Gavrilov",
    "Yakovlev", "Kalinin", "Chernov", "Bykov", "Korolev",
    "Ponomarev", "Gusev", "Danilov", "Zorin", "Belyaev",
    "Vinogradov", "Tikhonov", "Krylov", "Martynov", "Loginov"
];
const nombresMexicanos = [
    "José", "Juan", "Miguel", "Carlos", "Luis",
    "Jorge", "Fernando", "Ricardo", "Alejandro", "Daniel",
    "David", "Eduardo", "Manuel", "Francisco", "Pedro",
    "Roberto", "Andrés", "Sergio", "Raúl", "Iván",
    "Héctor", "Arturo", "Alberto", "Mario", "Óscar",
    "Rubén", "Enrique", "Javier", "Adrián", "Esteban",
    "Diego", "Emilio", "Rodrigo", "Guillermo", "Salvador",
    "Hugo", "Alfonso", "Ramón", "Ignacio", "Tomás",
    "Pablo", "Leonardo", "Mauricio", "Ulises", "Federico",
    "Ernesto", "César", "Fabián", "Ángel", "Jesús",
    "Cristian", "Marco", "Omar", "Ismael", "Abraham",
    "Samuel", "Josué", "Emanuel", "Ezequiel", "Matías",
    "Saúl", "Lorenzo", "Nicolás", "Emiliano", "Santiago",
    "Máximo", "Julián", "Alexis", "Alan", "Kevin",
    "Brandon", "Dylan", "Ian", "Darío", "Rafael"
];
const nombresFranceses = [
    "Jean", "Pierre", "Philippe", "Louis", "Jacques",
    "Michel", "Claude", "André", "Bernard", "François",
    "Nicolas", "Thomas", "Antoine", "Sébastien", "Alexandre",
    "Mathieu", "Christophe", "Laurent", "Olivier", "Damien",
    "Romain", "Victor", "Hugo", "Lucas", "Maxime",
    "Théo", "Clément", "Florian", "Adrien", "Guillaume",
    "Benjamin", "Jérôme", "Yann", "Cédric", "Quentin",
    "Kevin", "Anthony", "Julien", "Stéphane", "Pascal",
    "Sophie", "Marie", "Camille", "Julie", "Claire",
    "Élise", "Chloé", "Manon", "Lucie", "Pauline",
    "Laura", "Émilie", "Caroline", "Sandrine", "Valérie",
    "Nathalie", "Isabelle", "Catherine", "Amandine", "Aurélie",
    "Justine", "Mélanie", "Anaïs", "Océane", "Margaux",
    "Noémie", "Léa", "Inès", "Zoé", "Agathe",
    "Maëlle", "Élodie", "Clara", "Romane", "Constance",
    "Gabriel", "Arthur", "Raphaël", "Nathan", "Enzo",
    "Adam", "Samuel", "Eliott", "Lina", "Nina"
];
function generar() {
    var opcion = document.getElementById("opcion").value;
    switch (opcion) {
        case "1": generarSQL(); break;
        case "2": generarSQLpostgresql(); break;
        case "3": generarSQLCSV(); break;
        case "4": generarJSON(); break;
 
    }
}

function generarSQL() {
   salida = "INSERT INTO alumnos (expediente, app1, app2, nombres, correo) VALUES\n";
    var matricula = 224250000;
    var registros = parseInt(document.getElementById('registros').value);
    for (let i = 0; i < registros; i++) {
        let apellidoMex = apellidosMexico[Math.floor(Math.random() * apellidosMexico.length)];
        let apellidoRuso = apellidosRusos[Math.floor(Math.random() * apellidosRusos.length)];
        let segundoApellido;
        if (apellidoRuso === "NULL") {
            segundoApellido = "NULL";
        } else {
            segundoApellido = `'${apellidoRuso}'`;
        }
        let nombre = nombresMexicanos[Math.floor(Math.random() * nombresMexicanos.length)];
        if (Math.random() < 0.5) {
            let nombreFrances = nombresFranceses[Math.floor(Math.random() * nombresFranceses.length)];
            nombre += ` ${nombreFrances}`;
        }
        salida += `(${matricula + i}, '${apellidoMex}', ${segundoApellido}, '${nombre}', 'a${matricula + i}@unison.mx')`;
        if (i < registros - 1) {
            salida += ",\n";
        }
    }
    salida += ";";
    document.getElementById("salida").textContent = salida;
}

function generarSQLpostgresql() {
 salida = "INSERT INTO alumnos (expediente, app1, app2, nombres, correo) VALUES\n";
    var matricula = 224250000;
    var registros = parseInt(document.getElementById('registros').value);
    for (let i = 0; i < registros; i++) {
        let apellidoMex = apellidosMexico[Math.floor(Math.random() * apellidosMexico.length)];
        let apellidoRuso = apellidosRusos[Math.floor(Math.random() * apellidosRusos.length)];
        let segundoApellido;
        if (apellidoRuso === "NULL") {
            segundoApellido = "NULL";
        } else {
            segundoApellido = `'${apellidoRuso}'`;
        }
        let nombre = nombresMexicanos[Math.floor(Math.random() * nombresMexicanos.length)];
        if (Math.random() < 0.5) {
            let nombreFrances = nombresFranceses[Math.floor(Math.random() * nombresFranceses.length)];
            nombre += ` ${nombreFrances}`;
        }
        salida += `(${matricula + i}, '${apellidoMex}', ${segundoApellido}, '${nombre}', 'a${matricula + i}@unison.mx')`;
        if (i < registros - 1) {
            salida += ",\n";
        }
    }
    salida += ";";
    document.getElementById("salida").textContent = salida;
}

function generarSQLCSV() {
    salida = "matricula, apellido1, apellido2, nombre, correo\n";
    var matricula = 224250000;
    var nombre = "";
    var registros = 0;
    registros = parseInt(document.getElementById('registros').value);
    var nombreFrances = "";
    for (let i = 0; i < registros; i++) {
        let apellidoMex = apellidosMexico[Math.floor(Math.random() * apellidosMexico.length)];
        let apellidoRuso = apellidosRusos[Math.floor(Math.random() * apellidosRusos.length)];
        let tieneSegundoNombre = Math.random() < 0.5;
        console.log(tieneSegundoNombre);
        let segundoApellido;
        if (apellidoRuso === "NULL") {
            segundoApellido = "NULL";
        } else {
            segundoApellido = `${apellidoRuso}`;
        }
        nombre = "";
        nombreFrances = "";
        if (tieneSegundoNombre == 0) {
            nombre = nombresMexicanos[Math.floor(Math.random() * nombresMexicanos.length)];
        } else {
            nombre = nombresMexicanos[Math.floor(Math.random() * nombresMexicanos.length)];
            nombreFrances = nombresFranceses[Math.floor(Math.random() * nombresFranceses.length)];
            nombre += ` ${nombreFrances}`;
        }
        salida += `${matricula + i},${apellidoMex},${segundoApellido},${nombre},a${matricula + i}@unison.mx\n`;
    }
    // salida = salida.slice(0, 0);
    document.getElementById("salida").innerHTML = salida;
}
function generarJSON() {
    var matricula = 224250000;
    var registros = parseInt(document.getElementById('registros').value);
    var alumnos = [];
    for (let i = 0; i < registros; i++) {
        let apellidoMex = apellidosMexico[Math.floor(Math.random() * apellidosMexico.length)];
        let apellidoRuso = apellidosRusos[Math.floor(Math.random() * apellidosRusos.length)];
        let segundoApellido = apellidoRuso === "NULL" ? null : apellidoRuso;
        let nombre = nombresMexicanos[Math.floor(Math.random() * nombresMexicanos.length)];
        if (Math.random() < 0.5) {
            let nombreFrances = nombresFranceses[Math.floor(Math.random() * nombresFranceses.length)];
            nombre += " " + nombreFrances;
        }
        alumnos.push({
            matricula: matricula + i,
            apellido1: apellidoMex,
            apellido2: segundoApellido,
            nombre: nombre,
            correo: `a${matricula + i}@unison.mx`
        });
    }
    salida = JSON.stringify(alumnos, null, 4);
    document.getElementById("salida").textContent = salida;  
}
 
function guardarArchivo() {
        var var1 = document.createElement("a");
        //salida = salida.replaceAll("", "\r\n");
        var1.setAttribute("href","data:text/plain;charset=UTF-8," + encodeURIComponent(salida)); 
        var opcion = document.getElementById("opcion").value;
        switch (opcion) {
        case "1": var1.setAttribute("download", "sistema_escolar.sql");alert("Generando archivo SQL");break;
        case "2":var1.setAttribute("download", "sistema_escolar.sql");alert("Generando archivo Postgres");break;
        case "3":var1.setAttribute("download", "sistema_escolar.csv");alert("Generando archivo CSV");break;
        case "4":var1.setAttribute("download", "sistema_escolar.json");alert("Generando archivo JSON");break;
    }
        var1.style.display = "none";
        document.body.appendChild(var1);
        var1.click();
        document.body.removeChild(var1);
}