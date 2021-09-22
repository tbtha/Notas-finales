var nombre = prompt("Ingrese su nombre: ");
var apellido = prompt("Ingrese su apellido: ");
var carrera = prompt("Ingrese su carrera: ");

var notaHtmlUno = prompt ("Ingrese nota 1 (HTML)");
var notaHtmlDos = prompt("Ingrese nota 2 (HTML)");
var notaHtmlTres = prompt("Ingrese nota 3 (HTML)");
var promedioHtml = (parseInt(notaHtmlUno) + parseInt(notaHtmlDos) + parseInt(notaHtmlTres)) /3;

var notaCssUno  = prompt ("Ingrese nota 1 (CSS)");
var notaCssDos = prompt ("Ingrese nota 2 (CSS)");
var notaCssTres = prompt ("Ingrese nota 3 (CSS)");
var promedioCss = (parseInt(notaCssUno) + parseInt(notaCssDos) + parseInt(notaCssTres)) /3;

var notaJsUno = prompt ("Ingrese nota 1 (JavaScript)");
var notaJsDos = prompt ("Ingrese nota 1 (JavaScript)");

var notaJsTres = (parseInt(notaJsUno) + parseInt(notaJsDos) + 12 ) /3;


document.write( `
<div class='container'>
         <h1>Notas finales</h1>
            <div>
               <span class="fw-bold">Nombre: </span>
                <span>${nombre} ${ apellido}</span>
            </div>
            <div>
                <span class="fw-bold">Carrera: </span>
                <span>${carrera}</span>
            </div>
    <table class='table'>
    <thead class='table-dark'>
        <tr>
            <th sccope='col'>Ramo</th>
            <th sccope='col'>Nota 1</th>
            <th sccope='col'>Nota 2</th>
            <th sccope='col'>Nota 3</th>
            <th sccope='col'>Promedio</th>
        </tr>
    </thead>

    <tbody>
        <tr>
            <th scope='row'>HTML</th>
            <td>${notaHtmlUno}</td>
            <td>${notaHtmlDos}</td>
            <td>${notaHtmlTres}</td>
            <td>${promedioHtml}</td>
        </tr>

        <tr>
            <th scope='row'>CSS</th>
            <td>${notaCssUno}</td>
            <td>${notaCssDos}</td>
            <td>${notaCssTres}</td>
            <td>${promedioCss}</td>
        </tr>

         <tr>
            <th scope='row'>JavaScript</th>
            <td>${notaJsUno}</td>
            <td>${notaJsDos}</td>
            <td>-</td>
            <td>-</td>
        </tr>
    </tbody>
    </table>
    <p>Para aprobar el ramo JavaScript con nota 4, se necesita un ${notaJsTres} en la nota 3.</p>
</div>


`)
