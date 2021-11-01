window.onload = function(){

    let frutas = [ 
        {
        nome:"Melância",
        preco: 7
        },
        {
        nome:"Pera",
        preco: 2
        },
        {
        nome:"Maçã",
        preco: 1
        },
        {
        nome:"Abacate",
        preco: 4
        }];

    const lista = document.querySelector("#produtos");
    const listacompra = document.querySelector("#cestaDoCliente");
    const div = document.querySelector("#content-numbers")
    let id = 1;
    

    function listafruta(){

        for(let f of frutas){

            for( let nomes in f){
                if (f[nomes] == f.nome){
                    let li = document.createElement('li');
                    lista.appendChild(li).textContent = `${f[nomes]}`;
                    lista.appendChild(li).setAttribute('id', `li${id}`)
                    id++;
                    console.log(nomes)
                }
            }
            
            
        } ;
    };    
    listafruta(frutas);

    const lista1 = document.querySelector("#li1")
    const lista2 = document.querySelector("#li2")
    const lista3 = document.querySelector("#li3")
    const lista4 = document.querySelector("#li4")
    
    function listafrutapreco(){

        for(let precos of frutas){

            for(let p in precos){
                if(precos[p] == precos.preco){
                    let span = document.createElement('span');
                    div.appendChild(span).textContent = `${Number(precos[p])}`;
                    div.appendChild(span).setAttribute('id', `p${id}`);
                    id++;
                }
            }

        }

    }
    listafrutapreco(frutas);

    const span1 = document.querySelector(`#p${(id - 4)}`);
    const span2 = document.querySelector(`#p${(id - 3)}`);
    const span3 = document.querySelector(`#p${(id - 2)}`);
    const span4 = document.querySelector(`#p${id - 1 }`);
    const total = document.querySelector("#mostraTotalCompra");
    
    console.log(span1, span2, span3, span4);
    // total = Number(total + span1.textContent);

    lista1.addEventListener('click', function(){
        
        let li = document.createElement('li');
        listacompra.appendChild(li).textContent = 0;
        listacompra.appendChild(li).setAttribute('id', `li5`);
        const li1 = document.querySelector("#li5");
        if(li1.textContent !== lista1.textContent){
            listacompra.appendChild(li).textContent = lista1.textContent;
            total.value = Number(total.value) + Number(span1.textContent);
        } else{
            while (li1.textContent == lista1.textContent){
                listacompra.appendChild(li).remove(li1);
                alert(`O item ${lista1.textContent} já está em sua cesta de compras.`); 
            break;   
        };
        };
        li1.addEventListener('click', function(){
            listacompra.appendChild(li).remove(li1);
            total.value = Number(total.value) - Number(span1.textContent);
        });
    });

    lista2.addEventListener('click', function(){

        let li = document.createElement('li');
        listacompra.appendChild(li).textContent = 0;
        listacompra.appendChild(li).setAttribute('id', `li6`);
        const li2 = document.querySelector("#li6");
        if(li2.textContent !== lista2.textContent){
            listacompra.appendChild(li).textContent = lista2.textContent;
            total.value = Number(total.value) + Number(span2.textContent);
        } else{
            while (li2.textContent == lista2.textContent){
                    listacompra.appendChild(li).remove(li2);
                    
                alert(`O item ${lista2.textContent} já está em sua cesta de compras.`); 
            break;   
        };
        };
        li2.addEventListener('click', function(){
            listacompra.appendChild(li).remove(li2);
            total.value = Number(total.value) - Number(span2.textContent);
        });
    }); 

    lista3.addEventListener('click', function(){

        let li = document.createElement('li');
        listacompra.appendChild(li).textContent = 0;
        listacompra.appendChild(li).setAttribute('id', `li7`);
        const li3 = document.querySelector("#li7");
        if(li3.textContent !== lista3.textContent){
            listacompra.appendChild(li).textContent = lista3.textContent;
            total.value = Number(total.value) + Number(span3.textContent);
        } else{
        while (li3.textContent == lista3.textContent){
                    listacompra.appendChild(li).remove(li3);
                alert(`O item ${lista3.textContent} já está em sua cesta de compras.`); 
            break;   
        };
        };
        li3.addEventListener('click', function(){
            listacompra.appendChild(li).remove(li3);
            total.value = Number(total.value) - Number(span3.textContent);
        });
    }); 

    lista4.addEventListener('click', function(){

        let li = document.createElement('li');
        listacompra.appendChild(li).textContent = 0;
        listacompra.appendChild(li).setAttribute('id', `li8`);
        const li4 = document.querySelector("#li8");
        if(li4.textContent !== lista4.textContent){
            listacompra.appendChild(li).textContent = lista4.textContent;
            total.value = Number(total.value) + Number(span4.textContent);
        } else{
            while (li4.textContent == lista4.textContent){
                    listacompra.appendChild(li).remove(li4);
                alert(`O item ${lista4.textContent} já está em sua cesta de compras.`); 
            break;   
        };
        };
        li4.addEventListener('click', function(){
            listacompra.appendChild(li).remove(li4);
            total.value = Number(total.value) - Number(span4.textContent);
        });
    });  
    total.value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
    console.log(total)
};