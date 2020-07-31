
var jsonFileDescricaoHomePage;
var jsonFileCategorias;


readJSONDescricaoHomePage();
readJSONCategorias();



function readJSONDescricaoHomePage(){

	var jsonhttp;
    if (window.XMLHttpRequest) { // code for IE7+, Firefox, Chrome, Opera, Safari
        jsonhttp = new XMLHttpRequest();
    } else { // code for IE6, IE5
        jsonhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    
    jsonhttp.onreadystatechange = function () {
        if (jsonhttp.readyState == 4 && jsonhttp.status == 200) {
            jsonFileDescricaoHomePage = JSON.parse(jsonhttp.responseText)
                        
        

        }
    }
    jsonhttp.open("GET", "dados/descricaoHomePage.json", false);
    jsonhttp.send();
}


function loadDescricaoHomePage(){

	var jsonFile, size, i, tituloLocal, txt;

	txt = "<div class='container'>" +
		  "<div class='row text-center padding'>" +
          "<h2 class = 'col-12'>" + jsonFileDescricaoHomePage[0].titulo +"</h2>" +
         
          "<div class ='col-12'>" +
          "<img class='thumbnail' id='imagem' src='img/promo1.jpg' alt='Primeira promo'>" +
          "<br>" +
          "<p class = 'descricao'>" + jsonFileDescricaoHomePage[0].descricao + "</p>" +
        "</div>" +
        "</div>" +
        "</div>";

    document.write(txt);    
}

function readJSONCategorias(){

	var jsonhttp;
    if (window.XMLHttpRequest) { // code for IE7+, Firefox, Chrome, Opera, Safari
        jsonhttp = new XMLHttpRequest();
    } else { // code for IE6, IE5
        jsonhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    
    jsonhttp.onreadystatechange = function () {
        if (jsonhttp.readyState == 4 && jsonhttp.status == 200) {
            jsonFileCategorias = JSON.parse(jsonhttp.responseText)
                        
        

        }
    }
    jsonhttp.open("GET", "dados/categorias.json", false);
    jsonhttp.send();
}


function btnInscricao(){

  var nome, telemovel, email, morada, data, categoria_passada, categorias_dropdown, txt, i;

  nome = document.getElementById("input_nome").value;
  email = document.getElementById("input_email").value;
  telemovel = document.getElementById("input_telefone").value;
  morada = document.getElementById("input_morada").value;
  data = document.getElementById("input_data").value;
  categoria_passada = document.getElementById("input_categoria").value;
  categorias_dropdown = document.getElementById("input_categoria");



for(i = 0; i < categorias_dropdown.length; i++)
  {
    if(categorias_dropdown[i].value === categoria_passada)
    {
      categoria_escolhida = categorias_dropdown[i].innerHTML; 
      
    }
  };

  if(nome != "" && email != "" && telemovel != "" && morada != "" && data != ""){

    document.getElementById("div_alertaErro").style.display = "none";


    console.log(categoria_passada);
    txt = "<h3 style='color:green;'>A pré-inscrição da carta "+ categoria_escolhida + " foi enviada com sucesso</h3><br>" +
        "<h4>Após o preenchimento do formulário irá ser contactado via telefone ou email.</h4><br>" +
        "<a type='button' class='btn btn-primary' href='index.html'>Voltar à HomePage</a>";

        document.getElementById("div_sugestoesCabecalho").innerHTML = txt;

  }
  else
  {
    document.getElementById("div_alertaErro").style.display = "block";
  }

}



function loadCategorias(){

	var jsonFile, size, i, tituloLocal, informacaoLocal, precoLocal, txt;

	txt = "<section>"+
"<div class='container'>"+
"<ul class='breadcrumb'>"+
  "<li><a href='index-admin.html'>Início</a></li>"+
  "<li>Preços</li>"+
"</ul>"+
"<div class='marca-header'>"+
  "<h2><b>Preços</b></h2>"+
  "</div>"+
  "<div class='filtros text-right'>"+
  "<a>"+
    "<select size='1' id='input-categoria' name='Country'  aria-describedby='sizing-addon3' >"+
                  "<option>Revelância</option>"+
                  "<option>Preço Ascendente</option>"+
                  "<option>Preço Descendente</option>"+         
                "</select></a>"+
    "<a href='#'><i class='fa fa-th'></i></a>"+
    "<a href='#'><i class='fa fa-th-list'></i></a>"+
  "</div>"+
    "<article>"+
  "<div id = 'div_sugestoesCabecalho' class='jumbotron'>" +
		  "<div class='row'>" +
		  "<div class='col-xs-6 col-sm-3 col-md-3'>" +
		  "<img data-src='holder.js/100%x200' alt='100%x200' src='img/ciclomotores1.png' data-holder-rendered='true' style='height: 200px; width: 100%; display: block;'>" +
		  "<div class='caption'>" +
		  "<h3>" + jsonFileCategorias[0].titulo + "</h3>" +
          "<p>" + jsonFileCategorias[0].informacao + "</p>" +
          "<p> <h3>" + jsonFileCategorias[0].preco + "</h3>" +
          "<button id='edit_cat' class='btn btn-primary ' id = 'btnEdit'  role='button' onclick='btnEitar()'>Editar</button>" +
          "</div>" +
          "</div>" +

          "<div class='col-xs-6 col-sm-3 col-md-3'>" +
		  "<img data-src='holder.js/100%x200' alt='100%x200' src='img/a11.png' data-holder-rendered='true' style='height: 200px; width: 100%; display: block;'>" +
		  "<div class='caption'>" +
		  "<h3>" + jsonFileCategorias[1].titulo + "</h3>" +
          "<p>" + jsonFileCategorias[1].informacao + "</p>" +
          "<p> <h3>" + jsonFileCategorias[1].preco + "</h3>" +
          "<a href='#' class='btn btn-primary '  role='button'>Editar</a>" +
          "</div>" +
          "</div>" +

          "<div class='col-xs-6 col-sm-3 col-md-3'>" +
		  "<img data-src='holder.js/100%x200' alt='100%x200' src='img/a21.png' data-holder-rendered='true' style='height: 200px; width: 100%; display: block;'>" +
		  "<div class='caption'>" +
		  "<h3>" + jsonFileCategorias[2].titulo + "</h3>" +
          "<p>" + jsonFileCategorias[2].informacao + "</p>" +
          "<p> <h3>" + jsonFileCategorias[2].preco + "</h3>" +
          "<a href='#' class='btn btn-primary '  role='button'>Editar</a>" +
          "</div>" +
          "</div>" +

           "<div class='col-xs-6 col-sm-3 col-md-3'>" +
		  "<img data-src='holder.js/100%x200' alt='100%x200' src='img/A.png' data-holder-rendered='true' style='height: 200px; width: 100%; display: block;'>" +
		  "<h3>" + jsonFileCategorias[3].titulo + "</h3>" +
		  "<div class='caption'>" +
          "<p>" + jsonFileCategorias[3].informacao + "</p>" +
          "<p> <h3>" + jsonFileCategorias[3].preco + "</h3>" +
          "<a href='#' class='btn btn-primary '  role='button'>Editar</a>" +
          "</div>" +
          "</div>" +

           "<div class='col-xs-6 col-sm-3 col-md-3'>" +
		  "<img data-src='holder.js/100%x200' alt='100%x200' src='img/b11.png' data-holder-rendered='true' style='height: 200px; width: 100%; display: block;'>" +
		  "<div class='caption'>" +
		  "<h3>" + jsonFileCategorias[4].titulo + "</h3>" +
          "<p>" + jsonFileCategorias[4].informacao + "</p>" +
          "<p> <h3>" + jsonFileCategorias[4].preco + "</h3>" +
          "<a href='#' class='btn btn-primary '  role='button'>Editar</a>" +
          "</div>" +
          "</div>" +

          "<div class='col-xs-6 col-sm-3 col-md-3'>" +
		  "<img data-src='holder.js/100%x200' alt='100%x200' src='img/b.png' data-holder-rendered='true' style='height: 200px; width: 100%; display: block;'>" +
		  "<div class='caption'>" +
		  "<h3>" + jsonFileCategorias[5].titulo + "</h3>" +
          "<p>" + jsonFileCategorias[5].informacao + "</p>" +
          "<p> <h3>" + jsonFileCategorias[5].preco + "</h3>" +
          "<a href='#' class='btn btn-primary '  role='button'>Editar</a>" +
          "</div>" +
          "</div>" +

          "<div class='col-xs-6 col-sm-3 col-md-3'>" +
		  "<img data-src='holder.js/100%x200' alt='100%x200' src='img/b-e.png' data-holder-rendered='true' style='height: 200px; width: 100%; display: block;'>" +
		  "<div class='caption'>" +
		  "<h3>" + jsonFileCategorias[6].titulo + "</h3>" +
          "<p>" + jsonFileCategorias[6].informacao + "</p>" +
          "<p> <h3>" + jsonFileCategorias[6].preco + "</h3>" +
          "<a href='#' class='btn btn-primary '  role='button'>Editar</a>" +
          "</div>" +
          "</div>" +

          "<div class='col-xs-6 col-sm-3 col-md-3'>" +
		  "<img data-src='holder.js/100%x200' alt='100%x200' src='img/c.png' data-holder-rendered='true' style='height: 200px; width: 100%; display: block;'>" +
		  "<div class='caption'>" +
		  "<h3>" + jsonFileCategorias[7].titulo + "</h3>" +
          "<p>" + jsonFileCategorias[7].informacao + "</p>" +
          "<p> <h3>" + jsonFileCategorias[7].preco + "</h3>" +
          "<a href='#' class='btn btn-primary '  role='button'>Editar</a>" +
          "</div>" +
          "</div>" +
          "</div>" +
          "</div>"
          "</article>" +      
        "</section>";

         

    document.getElementById("preco").innerHTML = txt;    
}

function btnEitar(){

  var txt, size, tituloLocal, informacaoLocal, precoLocal, txtCategoria, txtInformacao;

  size = jsonFileCategorias.length;
  

    tituloLocal = jsonFileCategorias[0].titulo;
    informacaoLocal = jsonFileCategorias[0].informacao;
    precoLocal = jsonFileCategorias[0].preco;



    
    txt = "";



    txt = "<section>" +
              "<div class='container'>" + 
              "<ul class='breadcrumb'>" + 
               " <li><a href='index-admin.html'>Início</a></li> " +
               " <li><a href='precos-admin.html'>Preços</a></li> " +
               " <li>Editar</li> " +

             " </ul> " +

              "<div class='marca-header'> " +
                "<h2><b>Editar</b></h2>" +
                "</div>" +

                
                  "<article> " +
                   "<div id = 'div_sugestoesCabecalho' class='jumbotron'>" +
                   "<div class='row'> " +
                   "<div class='col-md-6'>" +
                    "<table class='table' id = 'table_editar'>" +
                         " <tbody> " +
                            "<tr class = 'tr_linha_tableSugestoes'>" +
                              "<td><label for='assunto'>Nome Categoria:</label></b><br/><input id='input_nomeCat' type='text' title='Nome Categoria' class='form-control' aria-describedby='sizing-addon3'></input></td>" +
                              
                            "</tr>" +

                            "<tr class = 'tr_linha_tableSugestoes'>" +
                              "<td><label for='assunto'>Informações:</label></b><br/>" + 
                              "<textarea rows='8' id='informacao' name='assunto' cols='40' class='form-control' title='Informações' aria-describedby='sizing-addon3'></textarea></td>" +
                              
                            "</tr>" +

                            "<tr class = 'tr_linha_tableSugestoes'>" +
                            "<td><label for='assunto'>Preço:</label></b><br/><input id='input_preco' type='text' title='Preço' class='form-control' aria-describedby='sizing-addon3'></input></td>" +
                              
                              
                            "</tr>" +
                            

                             "<td id = 'tr_linha_tableSugestoes'>" +

                             //"<button id='btn_done' class='btn btn-primary ' role='button' onclick='btnConcluir()'>Concluir</button>" +
                             "<button id='btn_done' class='btn btn-primary ' role='button' data-toggle='modal' data-target='#myModal'>Concluir</button>" +
                              
                            "</tr>" +

                           " </tbody>" +
                            "</table>" +

              "</div>" +
              "<div class='col-md-6'>" +
                "<img data-src='holder.js/100%x200' alt='100%x200' src='img/ciclomotores1.png' data-holder-rendered='true' style='height: 90%; width: 100%; display: block;''>" +

              "</div>" +

                            "</div>" +
                  "</div>" +

                        "</article>" +      
                     "</section>";

                    
                    document.getElementById("preco").innerHTML = txt;
                    document.getElementById("input_nomeCat").value = tituloLocal;
                    document.getElementById("informacao").value = informacaoLocal;
                    document.getElementById("input_preco").value = precoLocal;  

}


function btnConcluir(){

var txt, size, titulo, informacao, preco;

titulo = document.getElementById("input_nomeCat").value;
informacao = document.getElementById("informacao").value;
preco = document.getElementById("input_preco").value;


if(titulo != "" && informacao != "" && preco != "")
{
txt =  "<section>"+
"<div class='container'>"+
"<ul class='breadcrumb'>"+
  "<li><a href='index-admin.html'>Início</a></li>"+
  "<li>Preços</li>"+
"</ul>"+
"<div class='marca-header'>"+
  "<h2><b>Preços</b></h2>"+
  "</div>"+
  "<div class='filtros text-right'>"+
  "<a>"+
    "<select size='1' id='input-categoria' name='Country'  aria-describedby='sizing-addon3' >"+
                  "<option>Revelância</option>"+
                  "<option>Preço Ascendente</option>"+
                  "<option>Preço Descendente</option>"+         
                "</select></a>"+
    "<a href='#'><i class='fa fa-th'></i></a>"+
    "<a href='#'><i class='fa fa-th-list'></i></a>"+
  "</div>"+
    "<article>"+
    "<div id='div_alertaSucesso' class='alert'>"+
          "<span class='closebtn' onclick='this.parentElement.style.display='none';''>&times;</span>"+ 
          "<strong>Categoria editada com sucesso!</strong>"+
        "</div>"+
  "<div id = 'div_sugestoesCabecalho' class='jumbotron'>" +
      "<div class='row'>" +
      "<div class='col-xs-6 col-sm-3 col-md-3'>" +
      "<img data-src='holder.js/100%x200' alt='100%x200' src='img/ciclomotores1.png' data-holder-rendered='true' style='height: 200px; width: 100%; display: block;'>" +
      "<div class='caption'>" +
      "<h3>" + titulo + "</h3>" +
          "<p>" + informacao + "</p>" +
          "<p> <h3>" + preco + "</h3>" +
          "<button id='edit_cat' class='btn btn-primary ' id = 'btnEdit'  role='button' onclick='btnEitar()'>Editar</button>" +
          "</div>" +
          "</div>" +

          "<div class='col-xs-6 col-sm-3 col-md-3'>" +
      "<img data-src='holder.js/100%x200' alt='100%x200' src='img/a11.png' data-holder-rendered='true' style='height: 200px; width: 100%; display: block;'>" +
      "<div class='caption'>" +
      "<h3>" + jsonFileCategorias[1].titulo + "</h3>" +
          "<p>" + jsonFileCategorias[1].informacao + "</p>" +
          "<p> <h3>" + jsonFileCategorias[1].preco + "</h3>" +
          "<a href='#' class='btn btn-primary '  role='button'>Editar</a>" +
          "</div>" +
          "</div>" +

          "<div class='col-xs-6 col-sm-3 col-md-3'>" +
      "<img data-src='holder.js/100%x200' alt='100%x200' src='img/a21.png' data-holder-rendered='true' style='height: 200px; width: 100%; display: block;'>" +
      "<div class='caption'>" +
      "<h3>" + jsonFileCategorias[2].titulo + "</h3>" +
          "<p>" + jsonFileCategorias[2].informacao + "</p>" +
          "<p> <h3>" + jsonFileCategorias[2].preco + "</h3>" +
          "<a href='#' class='btn btn-primary '  role='button'>Editar</a>" +
          "</div>" +
          "</div>" +

           "<div class='col-xs-6 col-sm-3 col-md-3'>" +
      "<img data-src='holder.js/100%x200' alt='100%x200' src='img/A.png' data-holder-rendered='true' style='height: 200px; width: 100%; display: block;'>" +
      "<h3>" + jsonFileCategorias[3].titulo + "</h3>" +
      "<div class='caption'>" +
          "<p>" + jsonFileCategorias[3].informacao + "</p>" +
          "<p> <h3>" + jsonFileCategorias[3].preco + "</h3>" +
          "<a href='#' class='btn btn-primary '  role='button'>Editar</a>" +
          "</div>" +
          "</div>" +

           "<div class='col-xs-6 col-sm-3 col-md-3'>" +
      "<img data-src='holder.js/100%x200' alt='100%x200' src='img/b11.png' data-holder-rendered='true' style='height: 200px; width: 100%; display: block;'>" +
      "<div class='caption'>" +
      "<h3>" + jsonFileCategorias[4].titulo + "</h3>" +
          "<p>" + jsonFileCategorias[4].informacao + "</p>" +
          "<p> <h3>" + jsonFileCategorias[4].preco + "</h3>" +
          "<a href='#' class='btn btn-primary '  role='button'>Editar</a>" +
          "</div>" +
          "</div>" +

          "<div class='col-xs-6 col-sm-3 col-md-3'>" +
      "<img data-src='holder.js/100%x200' alt='100%x200' src='img/b.png' data-holder-rendered='true' style='height: 200px; width: 100%; display: block;'>" +
      "<div class='caption'>" +
      "<h3>" + jsonFileCategorias[5].titulo + "</h3>" +
          "<p>" + jsonFileCategorias[5].informacao + "</p>" +
          "<p> <h3>" + jsonFileCategorias[5].preco + "</h3>" +
          "<a href='#' class='btn btn-primary '  role='button'>Editar</a>" +
          "</div>" +
          "</div>" +

          "<div class='col-xs-6 col-sm-3 col-md-3'>" +
      "<img data-src='holder.js/100%x200' alt='100%x200' src='img/b-e.png' data-holder-rendered='true' style='height: 200px; width: 100%; display: block;'>" +
      "<div class='caption'>" +
      "<h3>" + jsonFileCategorias[6].titulo + "</h3>" +
          "<p>" + jsonFileCategorias[6].informacao + "</p>" +
          "<p> <h3>" + jsonFileCategorias[6].preco + "</h3>" +
          "<a href='#' class='btn btn-primary '  role='button'>Editar</a>" +
          "</div>" +
          "</div>" +

          "<div class='col-xs-6 col-sm-3 col-md-3'>" +
      "<img data-src='holder.js/100%x200' alt='100%x200' src='img/c.png' data-holder-rendered='true' style='height: 200px; width: 100%; display: block;'>" +
      "<div class='caption'>" +
      "<h3>" + jsonFileCategorias[7].titulo + "</h3>" +
          "<p>" + jsonFileCategorias[7].informacao + "</p>" +
          "<p> <h3>" + jsonFileCategorias[7].preco + "</h3>" +
          "<a href='#' class='btn btn-primary '  role='button'>Editar</a>" +
          "</div>" +
          "</div>" +
          "</div>" +
          "</div>"
          "</article>" +      
        "</section>";
          

         document.getElementById("preco").innerHTML = txt;
         
        document.getElementById("div_alertaErro").style.display = "none";
       }
       else{
        document.getElementById("div_alertaErro").style.display = "block";
        
       }
      
}


function getWeek(){
  var htmltxt;
  
    htmltxt = "<article>"+
    "<fieldset>"+
    "<button title='Editar' class='btn btn-primary' onclick='getWeekEditor()'>Editar</button>"+
    "<p>"+"</p>" +
    "<caption>Horário Semanal "+ 17 + " a " + 21 +"</caption>"+
    "<div class='table-responsive'>"+
      "<table id='horario' class='table table-hover table-bordered'>"+
        "<tr>"+
          "<th  id='Horario'>Horário</th>"+
          "<th  id='2F' class='hour'>2.ªF.</th>"+
          "<th  id='3F' class='hour'>3.ªF.</th>"+
          "<th  id='4F' class='hour'>4.ªF.</th>"+
          "<th  id='5F' class='hour'>5.ªF.</th>"+
          "<th  id='6F' class='hour'>6.ªF.</th>"+
        "</tr>"+
        "<tr>"+
          "<th class='hour'>09:00</th>"+
          "<td class='semaula'></td>"+
          "<td class='semaula'></td>"+
          "<td class='semaula'></td>"+
          "<td class='semaula'></td>"+
          "<td class='semaula'></td>"+
        "</tr>"+
        "<tr>"+
         "<th class='hour'>10:00</th>"+      
          "<td class='aula'>Aula 1</td>"+
          "<td class='aula'>Aula 3</td>"+
          "<td class='aula'>Aula 5</td>"+
          "<td class='aula'>Aula 7</td>"+
          "<td class='aula'>Aula 9</td>"+
        "</tr>"+
        "<tr>"+
          "<th class='hour'>11:00</th>"+
          "<td class='aula'>Aula 2</td>"+
          "<td class='aula'>Aula 4</td>"+
          "<td class='aula'>Aula 6</td>"+
          "<td class='aula'>Aula 8</td>"+
          "<td class='aula'>Aula 10</td>"+
        "</tr>"+  
        "<tr>"+
          "<th class='hour'>12:00</th>"+
          "<td title='semaula'></td>"+
          "<td class='semaula'></td>"+
          "<td title='semaula'></td>"+
          "<td title='semaula'></td>"+
          "<td title='semaula'></td>"+
        "</tr>"+
        "<tr>"+
          "<th class='hour'>13:00</th>"+
          "<td rowspan='2' class='al'>Fechado para Almoço</td>"+
          "<td rowspan='2' class='al'>Fechado para Almoço</td>"+
          "<td rowspan='2' class='al'>Fechado para Almoço</td>"+
          "<td rowspan='2' class='al'>Fechado para Almoço</td>"+
         "<td rowspan='2' class='al'>Fechado para Almoço</td>"+
        "</tr>"+
        "<tr>"+
          "<th class='hour'>14:00</th>"+
                          
        "</tr>"+
        "<tr>"+
          "<th class='hour'>15:00</th>"+
          "<td class='semaula'></td>"+
          "<td class='semaula'></td>"+
          "<td title='semaula'></td>"+
          "<td class='semaula'></td>"+
          "<td class='semaula'></td>"+
        "</tr>"+
         "<tr>"+
          "<th class='hour'>16:00</th>"+
          "<td class='semaula'></td>"+
          "<td class='semaula'></td>"+
          "<td title='semaula'></td>"+
          "<td title='semaula'></td>"+
          "<td class='semaula'></td>"+
        "</tr>"+
         "<tr>"+
          "<th class='hour'>17:00</th>"+
          "<td class='semaula'></td>"+
          "<td title='semaula'></td>"+
          "<td class='semaula'></td>"+
          "<td title='semaula'></td>"+
          "<td class='semaula'></td>"+
        "</tr>"+
         "<tr>"+
          "<th class='hour'>18:00</th>"+
          "<td class='aula'>Aula 1</td>"+
          "<td class='aula'>Aula 3</td>"+
          "<td class='aula'>Aula 5</td>"+
          "<td class='aula'>Aula 7</td>"+
          "<td class='aula'>Aula 9</td>"+
        "</tr>"+
        "<tr>"+
          "<th class='hour'>19:00</th>"+
          "<td class='aula'>Aula 2</td>"+
          "<td class='aula'>Aula 4</td>"+
          "<td class='aula'>Aula 6</td>"+
          "<td class='aula'>Aula 8</td>"+
          "<td class='aula'>Aula 10</td>"+
        "</tr>"+
        "<tr>"+
          "<th class='hour'>20:00</th>"+
          "<td title='semaula'></td>"+
          "<td title='semaula'></td>"+
          "<td class='semaula'></td>"+
          "<td title='semaula'></td>"+
          "<td title='semaula'></td>"+
        "</tr>"+
        "<tr>"+
          "<th class='hour'>21:00</th>"+
          "<td title='semaula'></td>"+
          "<td title='semaula'></td>"+
          "<td class='semaula'></td>"+
          "<td title='semaula'></td>"+
          "<td title='semaula'></td>"+
        "</tr>"+
        "</table>"+
        "</div>"+
        "</fieldset>"+   
       "</article>";
        
        document.getElementById("calendario").innerHTML = htmltxt;
        
}

function getWeekEditor(){
  var htmltxt;

  htmltxt = "<article>"+
    "<fieldset>"+
    "<button id='btn_done2' title='Editar' class='btn btn-primary' data-toggle='modal' data-target='#myModal2'>Concluir</button>"+
    "<p>"+"</p>" +
  "<caption>Horário Semanal "+ 17 + " a " + 21 +"</caption>"+
  "<div class='table-responsive'>"+
      "<table id='horario2' class='table table-hover table-bordered'>"+
    
        "<tr>"+
          "<th  id='Horario'>Horário</th>"+
          "<th  id='2F' class='hour'>2.ªF.</th>"+
          "<th  id='3F' class='hour'>3.ªF.</th>"+
          "<th  id='4F' class='hour'>4.ªF.</th>"+
          "<th  id='5F' class='hour'>5.ªF.</th>"+
          "<th  id='6F' class='hour'>6.ªF.</th>"+
        "</tr>"+
        "<tr>"+
          "<th id='hora' class='hour'>09:00</th>"+
          "<td> <input id='segunda9' class='form-control'></input></td>"+
          "<td> <input id='terca9' class='form-control'></input></td>"+
          "<td> <input id='quarta9' class='form-control'></input></td>"+
          "<td> <input id='quinta9' class='form-control'></input></td>"+
          "<td> <input id='sexta9' class='form-control'></input></td>"+
        "</tr>"+
        "<tr>"+
         "<th class='hour'>10:00</th>"+      
          "<td> <input id='aula1' class='form-control'></input></td>"+
          "<td> <input id='aula3' class='form-control'></input></td>"+
          "<td> <input id='aula5' class='form-control'></input></td>"+
          "<td> <input id='aula7' class='form-control'></input></td>"+
          "<td> <input id='aula9' class='form-control'></input></td>"+
        "</tr>"+
        "<tr>"+
          "<th class='hour'>11:00</th>"+
          "<td> <input id='aula2' class='form-control'></input></td>"+
          "<td> <input id='aula4' class='form-control'></input></td>"+
          "<td> <input id='aula6' class='form-control'></input></td>"+
          "<td> <input id='aula8' class='form-control'></input></td>"+
          "<td> <input id='aula10' class='form-control'></input></td>"+
        "</tr>"+  
        "<tr>"+
          "<th class='hour'>12:00</th>"+
          "<td> <input id='segunda12' class='form-control'></input></td>"+
          "<td> <input id='terca12' class='form-control'></input></td>"+
          "<td> <input id='quarta12' class='form-control'></input></td>"+
          "<td> <input id='quinta12' class='form-control'></input></td>"+
          "<td> <input id='sexta12' class='form-control'></input></td>"+
        "</tr>"+
        "<tr>"+
          "<th class='hour'>13:00</th>"+
          "<td rowspan='2' class='al'>Fechado para Almoço</td>"+
          "<td rowspan='2' class='al'>Fechado para Almoço</td>"+
          "<td rowspan='2' class='al'>Fechado para Almoço</td>"+
          "<td rowspan='2' class='al'>Fechado para Almoço</td>"+
         "<td rowspan='2' class='al'>Fechado para Almoço</td>"+
        "</tr>"+
        "<tr>"+
          "<th class='hour'>14:00</th>"+
                          
        "</tr>"+
        "<tr>"+
          "<th class='hour'>15:00</th>"+
          "<td> <input id='segunda15' class='form-control'></input></td>"+
          "<td> <input id='terca15' class='form-control'></input></td>"+
          "<td> <input id='quarta15' class='form-control'></input></td>"+
          "<td> <input id='quinta15' class='form-control'></input></td>"+
          "<td> <input id='sexta15' class='form-control'></input></td>"+
        "</tr>"+
         "<tr>"+
          "<th class='hour'>16:00</th>"+
          "<td> <input id='segunda16' class='form-control'></input></td>"+
          "<td> <input id='terca16' class='form-control'></input></td>"+
          "<td> <input id='quarta16' class='form-control'></input></td>"+
          "<td> <input id='quinta16' class='form-control'></input></td>"+
          "<td> <input id='sexta16' class='form-control'></input></td>"+
        "</tr>"+
         "<tr>"+
          "<th class='hour'>17:00</th>"+
          "<td> <input id='segunda17' class='form-control'></input></td>"+
          "<td> <input id='terca17' class='form-control'></input></td>"+
          "<td> <input id='quarta17' class='form-control'></input></td>"+
          "<td> <input id='quinta17' class='form-control'></input></td>"+
          "<td> <input id='sexta17' class='form-control'></input></td>"+
        "</tr>"+
         "<tr>"+
          "<th class='hour'>18:00</th>"+
          "<td> <input id='aula1b' class='form-control'></input></td>"+
          "<td> <input id='aula3b' class='form-control'></input></td>"+
          "<td> <input id='aula5b' class='form-control'></input></td>"+
          "<td> <input id='aula7b' class='form-control'></input></td>"+
          "<td> <input id='aula9b' class='form-control'></input></td>"+
        "</tr>"+
        "<tr>"+
          "<th class='hour'>19:00</th>"+
          "<td> <input id='aula2b' class='form-control'></input></td>"+
          "<td> <input id='aula4b' class='form-control'></input></td>"+
          "<td> <input id='aula6b' class='form-control'></input></td>"+
          "<td> <input id='aula8b' class='form-control'></input></td>"+
          "<td> <input id='aula10b' class='form-control'></input></td>"+
        "</tr>"+
        "<tr>"+
          "<th class='hour'>20:00</th>"+
          "<td> <input id='segunda20' class='form-control'></input></td>"+
          "<td> <input id='terca20' class='form-control'></input></td>"+
          "<td> <input id='quarta20' class='form-control'></input></td>"+
          "<td> <input id='quinta20' class='form-control'></input></td>"+
          "<td> <input id='sexta20' class='form-control'></input></td>"+
        "</tr>"+
        "<tr>"+
          "<th class='hour'>21:00</th>"+
          "<td> <input id='segunda21' class='form-control'></input></td>"+
          "<td> <input id='terca21' class='form-control'></input></td>"+
          "<td> <input id='quarta21' class='form-control'></input></td>"+
          "<td> <input id='quinta21' class='form-control'></input></td>"+
          "<td> <input id='quinta21' class='form-control'></input></td>"+
        "</tr>"+
        "</table>"+
        "</div>"+
        "</fieldset>"+   
       "</article>";
  


       
        document.getElementById("calendario").innerHTML = htmltxt;
        document.getElementById("aula1").value = "Aula 1";
        document.getElementById("aula2").value = "Aula 2";
        document.getElementById("aula3").value = "Aula 3";
        document.getElementById("aula4").value = "Aula 4";
        document.getElementById("aula5").value = "Aula 5";
        document.getElementById("aula6").value = "Aula 6";
        document.getElementById("aula7").value = "Aula 7";
        document.getElementById("aula8").value = "Aula 8";
        document.getElementById("aula9").value = "Aula 9";
        document.getElementById("aula10").value = "Aula 10";
        document.getElementById("aula1b").value = "Aula 1";
        document.getElementById("aula2b").value = "Aula 2";
        document.getElementById("aula3b").value = "Aula 3";
        document.getElementById("aula4b").value = "Aula 4";
        document.getElementById("aula5b").value = "Aula 5";
        document.getElementById("aula6b").value = "Aula 6";
        document.getElementById("aula7b").value = "Aula 7";
        document.getElementById("aula8b").value = "Aula 8";
        document.getElementById("aula9b").value = "Aula 9";
        document.getElementById("aula10b").value = "Aula 10";
       }

function finishWeek(){

  var htmltxt, hora1, hora2, hora3, hora4, hora5, hora6, hora7, hora8, hora9, hora10, hora11, hora12, hora13, hora14, hora15, hora16, hora17, hora18, hora19, hora20, hora21, hora22, hora23, hora24, hora25, hora26, hora27, hora28, hora29, hora30, hora31, hora32, hora33, hora34, hora35, hora36, hora37, hora38, hora39, hora40, hora41, hora42, hora43, hora44, hora45, hora46, hora47, hora48, hora49, hora50, hora51, hora52, hora53, hora54, hora55;
  

    h = document.getElementById("hora").value;
    hora1 = document.getElementById("segunda9").value;
    hora2 = document.getElementById("terca9").value;
    hora3 = document.getElementById("quarta9").value;
    hora4 = document.getElementById("quinta9").value;
    hora5 = document.getElementById("sexta9").value;
    hora6 = document.getElementById("aula1").value;
    hora7 = document.getElementById("aula3").value;
    hora8 = document.getElementById("aula5").value;
    hora9 = document.getElementById("aula7").value;
    hora10 = document.getElementById("aula9").value;
    hora11 = document.getElementById("aula2").value;
    hora12 = document.getElementById("aula4").value;
    hora13 = document.getElementById("aula6").value;
    hora14 = document.getElementById("aula8").value;
    hora15 = document.getElementById("aula10").value;
    hora16 = document.getElementById("segunda12").value;
    hora17 = document.getElementById("terca12").value;
    hora18 = document.getElementById("quarta12").value;
    hora19 = document.getElementById("quinta12").value;
    hora20 = document.getElementById("sexta12").value;
    hora21 = document.getElementById("segunda15").value;
    hora22 = document.getElementById("terca15").value;
    hora23 = document.getElementById("quarta15").value;
    hora24 = document.getElementById("quinta15").value;
    hora25 = document.getElementById("sexta15").value;
    hora26 = document.getElementById("segunda16").value;
    hora27 = document.getElementById("terca16").value;
    hora28 = document.getElementById("quarta16").value;
    hora29 = document.getElementById("quinta16").value;
    hora30 = document.getElementById("sexta16").value;
    hora31 = document.getElementById("segunda17").value;
    hora32 = document.getElementById("terca17").value;
    hora33 = document.getElementById("quarta17").value;
    hora34 = document.getElementById("quinta17").value;
    hora35 = document.getElementById("sexta17").value;
    hora36 = document.getElementById("aula1b").value;
    hora37 = document.getElementById("aula3b").value;
    hora38 = document.getElementById("aula5b").value;
    hora39 = document.getElementById("aula7b").value;
    hora40 = document.getElementById("aula9b").value;
    hora41 = document.getElementById("aula2b").value;
    hora42 = document.getElementById("aula4b").value;
    hora43 = document.getElementById("aula6b").value;
    hora44 = document.getElementById("aula8b").value;
    hora45 = document.getElementById("aula10b").value;
    hora46 = document.getElementById("segunda20").value;
    hora47 = document.getElementById("terca20").value;
    hora48 = document.getElementById("quarta20").value;
    hora49 = document.getElementById("quinta20").value;
    hora50 = document.getElementById("sexta20").value;
    hora51 = document.getElementById("segunda21").value;
    hora52 = document.getElementById("terca21").value;
    hora53 = document.getElementById("quarta21").value;
    hora54 = document.getElementById("quinta21").value;
    hora55 = document.getElementById("quinta21").value;
    

    htmltxt = "<article>"+
    "<fieldset>"+
    "<button title='Editar' class='btn btn-primary'>Editar</button>"+
    "<p>"+"</p>" +
    "<caption>Horário Semanal "+ 17 + " a " + 21 +"</caption>"+
    "<div class='table-responsive'>"+
      "<table id='horario' class='table table-hover table-bordered'>"+
        "<tr>"+
          "<th  id='Horario'>Horário</th>"+
          "<th  id='2F' class='hour'>2.ªF.</th>"+
          "<th  id='3F' class='hour'>3.ªF.</th>"+
          "<th  id='4F' class='hour'>4.ªF.</th>"+
          "<th  id='5F' class='hour'>5.ªF.</th>"+
          "<th  id='6F' class='hour'>6.ªF.</th>"+
        "</tr>"+
        "<tr>"+
          "<th class='hour'>09:00</th>"+
          "<td id='segunda9b' class='semaula'>" + hora1+ "</td>"+
          "<td class='semaula'>" + hora2+ "</td>"+
          "<td class='semaula'>" + hora3+ "</td>"+
          "<td class='semaula'>" + hora4+ "</td>"+
          "<td class='semaula'>" + hora5+ "</td>"+
        "</tr>"+
        "<tr>"+
         "<th class='hour'>10:00</th>"+      
          "<td class='aula'>" + hora6+ "</td>"+
          "<td class='aula'>" + hora7+ "</td>"+
          "<td class='aula'>" + hora8+ "</td>"+
          "<td class='aula'>" + hora9+ "</td>"+
          "<td class='aula'>" + hora10+ "</td>"+
        "</tr>"+
        "<tr>"+
          "<th class='hour'>11:00</th>"+
          "<td class='aula'>" + hora11+ "</td>"+
          "<td class='aula'>" + hora12+ "</td>"+
          "<td class='aula'>" + hora13+ "</td>"+
          "<td class='aula'>" + hora14+ "</td>"+
          "<td class='aula'>" + hora15+ "</td>"+
        "</tr>"+  
        "<tr>"+
          "<th class='hour'>12:00</th>"+
          "<td title='semaula'>" + hora16+ "</td>"+
          "<td class='semaula'>" + hora17+ "</td>"+
          "<td title='semaula'>" + hora18+ "</td>"+
          "<td title='semaula'>" + hora19+ "</td>"+
          "<td title='semaula'>" + hora20+ "</td>"+
        "</tr>"+
        "<tr>"+
          "<th class='hour'>13:00</th>"+
          "<td rowspan='2' class='al'>Fechado para Almoço</td>"+
          "<td rowspan='2' class='al'>Fechado para Almoço</td>"+
          "<td rowspan='2' class='al'>Fechado para Almoço</td>"+
          "<td rowspan='2' class='al'>Fechado para Almoço</td>"+
         "<td rowspan='2' class='al'>Fechado para Almoço</td>"+
        "</tr>"+
        "<tr>"+
          "<th class='hour'>14:00</th>"+
                          
        "</tr>"+
        "<tr>"+
          "<th class='hour'>15:00</th>"+
          "<td class='semaula'>" + hora21+ "</td>"+
          "<td class='semaula'>" + hora22+ "</td>"+
          "<td title='semaula'>" + hora23+ "</td>"+
          "<td class='semaula'>" + hora24+ "</td>"+
          "<td class='semaula'>" + hora25+ "</td>"+
        "</tr>"+
         "<tr>"+
          "<th class='hour'>16:00</th>"+
          "<td class='semaula'>" + hora26+ "</td>"+
          "<td class='semaula'>" + hora27+ "</td>"+
          "<td title='semaula'>" + hora28+ "</td>"+
          "<td title='semaula'>" + hora29+ "</td>"+
          "<td class='semaula'>" + hora30+ "</td>"+
        "</tr>"+
         "<tr>"+
          "<th class='hour'>17:00</th>"+
          "<td class='semaula'>" + hora31+ "</td>"+
          "<td title='semaula'>" + hora32+ "</td>"+
          "<td class='semaula'>" + hora33+ "</td>"+
          "<td title='semaula'>" + hora34+ "</td>"+
          "<td class='semaula'>" + hora35+ "</td>"+
        "</tr>"+
         "<tr>"+
          "<th class='hour'>18:00</th>"+
          "<td class='aula'>" + hora36+ "</td>"+
          "<td class='aula'>" + hora37+ "</td>"+
          "<td class='aula'>" + hora38+ "</td>"+
          "<td class='aula'>" + hora39+ "</td>"+
          "<td class='aula'>" + hora40+ "</td>"+
        "</tr>"+
        "<tr>"+
          "<th class='hour'>19:00</th>"+
          "<td class='aula'>" + hora41+ "</td>"+
          "<td class='aula'>" + hora42+ "</td>"+
          "<td class='aula'>" + hora43+ "</td>"+
          "<td class='aula'>" + hora44+ "</td>"+
          "<td class='aula'>" + hora45+ "</td>"+
        "</tr>"+
        "<tr>"+
          "<th class='hour'>20:00</th>"+
          "<td title='semaula'>" + hora46+ "</td>"+
          "<td title='semaula'>" + hora47+ "</td>"+
          "<td class='semaula'>" + hora48+ "</td>"+
          "<td title='semaula'>" + hora49+ "</td>"+
          "<td title='semaula'>" + hora50+ "</td>"+
        "</tr>"+
        "<tr>"+
          "<th class='hour'>21:00</th>"+
          "<td title='semaula'>" + hora51+ "</td>"+
          "<td title='semaula'>" + hora52+ "</td>"+
          "<td class='semaula'>" + hora53+ "</td>"+
          "<td title='semaula'>" + hora54+ "</td>"+
          "<td title='semaula'>" + hora55+ "</td>"+
        "</tr>"+
        "</table>"+
        "</div>"+
        "</fieldset>"+   
       "</article>";
        
        document.getElementById("calendario").innerHTML = htmltxt;
        
}