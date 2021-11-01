window.onload = function(){
    //Não consegui consertar a resolução do html/css, em meu monitor a proporção está perfeita, 
    //mas ela pode ficar em proporções diferentes de acordo com o monitor. 
        
       function resultadobusca(dadosCep){
   
          for( let campo in dadosCep ) {
   
               if(document.querySelector(`#${campo}`)){
                   document.querySelector(`#${campo}`).value= dadosCep[campo];
               } 
          }    
       }
       let dadosCep = async function(cep){
   
           let url = `https://viacep.com.br/ws/${cep}/json/`;
          try { 
           let dadosFetch = await fetch(url);        
           let dadosJson = await dadosFetch.json();
           resultadobusca(dadosJson);
          } catch(error){
              alert(error);
          }
           
       }

       const button = document.querySelector("#button");
       const Cep= document.querySelector("#cep");
   
       button.addEventListener('click',function(){
       
           dadosCep(Cep.value);
           
       })
   
   
   }