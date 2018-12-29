// 1)
function celsiusToFahrenheit(temp_c) {
    var temp_f = ( 9 * temp_c / 5 ) + 32;
    return temp_f; 
}

document.getElementById("converter").onclick = function() {
    var celsius = parseFloat(document.getElementById("temp_celsius").value);
    var fahrenheit = celsiusToFahrenheit(celsius);
    document.getElementById("temp_fahr").innerHTML = fahrenheit;
}

// 2)
document.getElementById("anos_copa").innerHTML = "";
for ( var inicioCopa = 1930; inicioCopa <= 2018; inicioCopa += 4 ) {
    document.getElementById("anos_copa").innerHTML += '<li>' + inicioCopa + '</li>';
}

// 3)
document.getElementById("calcular").onclick = function() {
    
    var n1 = parseFloat(document.getElementById("nota1").value);
    var n2 = parseFloat(document.getElementById("nota2").value);
    var n_faltas = parseFloat(document.getElementById("n_faltas").value);

    var media = (n1 + n2) / 2;
    var presenca = (20 - n_faltas) / 20;

    var situacao;

    if ( media >= 6.5 && presenca >= 0.7 ) {
        situacao = "Aprovado!";
    } else if ( media < 6.5 && presenca < 0.7 ) {
        situacao = "Reprovado por faltas e por média!";
    } else if ( media < 6.5 ) {
        situacao = "Reprovado por média!";
    } else if ( presenca < 0.7 ) {
        situacao = "Reprovado por faltas!";
    }

    document.getElementById("result").innerHTML = situacao;
}

//4)
var vendas_cursos = [

    {
        'aluno': 'Emmanuel Gomes',
        'data': '10/06/2018',
        'valor': 34.99,
        'reembolso': null
        
    },

    {
        'aluno': 'Carla Dias',
        'data': '10/06/2018',
        'valor': 29.99,
        'reembolso': null
        
    },

    {
        'aluno': 'Rafael Marques',
        'data': '11/06/2018',
        'valor': 39.99,
        'reembolso': '13/06/2018'
        
    },

    {
        'aluno': 'Maria Isabel Pereira',
        'data': '11/06/2018',
        'valor': 29.99,
        'reembolso': null
        
    },

    {
        'aluno': 'Andre Luis Silva',
        'data': '12/06/2018',
        'valor': 34.99,
        'reembolso': null
        
    }

];

var total_vendas = 0;
document.getElementById("vendas_cursos").innerHTML = "";

for ( var a = 0; a < vendas_cursos.length; a++ ) {

    if ( vendas_cursos[a].reembolso == null ) {

        total_vendas += vendas_cursos[a].valor;

        var linhaHTML = "";
        linhaHTML += '<tr>';
        linhaHTML +=    '<td>' + vendas_cursos[a].aluno + '</td>';
        linhaHTML +=    '<td>' + vendas_cursos[a].data + '</td>';
        linhaHTML +=    '<td>' + vendas_cursos[a].valor + '</td>';
        linhaHTML += '</tr>';

        document.getElementById("vendas_cursos").innerHTML += linhaHTML;

    } 

    document.getElementById("total_vendas").innerHTML = total_vendas;

}
