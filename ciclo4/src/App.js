import './App.css';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Home } from './viwes/Home';
import { Listar } from './viwes/Cliente/Listar/';
import { ListarPedidos } from './viwes/Pedido/ListarPedidos';
import { ListarServicos } from './viwes/Servico/ListarServicos';
import { Menu } from './components/Menu';
import { Item } from './viwes/Servico/Item';
import { ListarItemP } from './viwes/Item/ListarItemP';
import { Cadastrar } from './viwes/Servico/Cadastar';
import { ItemPed } from './viwes/Pedido/Item';
import { CadastrarPed } from './viwes/Pedido/Cadastar';
import { ListarCompras } from './viwes/Compra/ListarCompra';
import { CadastrarComp } from './viwes/Compra/Cadastar';
import { ItemComp } from './viwes/Compra/Item';
import { CadastrarProd } from './viwes/Produto/Cadastar';
import { ItemProd } from './viwes/Produto/Item';
import { ListarProdutos } from './viwes/Produto/ListarProdutos';
import { PedCli } from './viwes/Cliente/Item';
import { CadastrarCli } from './viwes/Cliente/Cadastar';
import { ItemP } from './viwes/Item/Item';
import { ItemS } from './viwes/Item/ItemS';
import { CadastrarItemP } from './viwes/Item/Cadastar';
import { ListarItemComp } from './viwes/ItemProd/ListarItemP';
import { ItemC } from './viwes/ItemProd/Item';
import { ItemPd } from './viwes/ItemProd/ItemS';
import { CadastrarItemC } from './viwes/ItemProd/Cadastar';
import { EditarCli } from './viwes/Cliente/Editar';
import { ExcluirCli } from './viwes/Cliente/Excluir';
import { ExcluirItemProd } from './viwes/ItemProd/Excluir';
import { ExcluirItemP } from './viwes/Item/Excluir';
import { ExcluirCompra } from './viwes/Compra/Excluir';
import { ExcluirProd } from './viwes/Produto/Excluir';
import { ExcluirPed } from './viwes/Pedido/Excluir';
import { ExcluirServ } from './viwes/Servico/Excluir';
import { EditarServ } from './viwes/Servico/Editar';
import { EditarProd } from './viwes/Produto/Editar';
import { EditarPed } from './viwes/Pedido/Editar';
import { Editarcompra } from './viwes/Compra/Editar';
import { EditarItemP } from './viwes/Item/Editar';
import { EditarItemC } from './viwes/ItemProd/Editar';
import { CompCli } from './viwes/Cliente/Item copy';

function App() {
  return (
    <div>
      <Router>
        <Menu/>
        <Switch>
          <Route exact path= "/" component={Home}/>
          <Route path= "/listar-clientes" component={Listar}/>
          <Route path= "/listar-pedidos" component={ListarPedidos}/>
          <Route path= "/listar-servicos" component={ListarServicos}/>
          <Route path= "/listar-produtos" component={ListarProdutos}/>
          <Route path= "/listar-compras" component={ListarCompras}/>
          <Route path= "/listar-itensp" component={ListarItemP}/>
          <Route path= "/listar-itensc" component={ListarItemComp}/>
          <Route path= "/listar-pedidos-cliente/:id" component={PedCli}/>
          <Route path= "/listar-compras-cliente/:id" component={CompCli}/>
          <Route path= "/listar-itens-servico/:id" component={Item}/>
          <Route path= "/listar-itens-pedido/:id" component={ItemPed}/>
          <Route path= "/listar-itens-compra/:id" component={ItemComp}/>
          <Route path= "/listar-itens-produto/:id" component={ItemProd}/>
          <Route path= "/item-pedido/:id" component={ItemP}/>
          <Route path= "/item-compra/:id" component={ItemC}/>
          <Route path= "/item-produto/:id" component={ItemPd}/>
          <Route path= "/item-servico/:id" component={ItemS}/>
          <Route path= "/cadastrarcliente" component={CadastrarCli}/>
          <Route path= "/cadastrarservico" component={Cadastrar}/>
          <Route path= "/cadastrarpedido" component={CadastrarPed}/>
          <Route path= "/cadastrarcompra" component={CadastrarComp}/>
          <Route path= "/cadastrarproduto" component={CadastrarProd}/>
          <Route path= "/cadastraritemp" component={CadastrarItemP}/>
          <Route path= "/cadastraritemc" component={CadastrarItemC}/>
          <Route path= "/editarcliente/:id" component={EditarCli}/>
          <Route path= "/editarservico/:id" component={EditarServ}/>
          <Route path= "/editarproduto/:id" component={EditarProd}/>
          <Route path= "/editarpedido/:id" component={EditarPed}/>
          <Route path= "/editarcompra/:id" component={Editarcompra}/>
          <Route path= "/editaritempedido/:id1/:id2" component={EditarItemP}/>
          <Route path= "/editaritemcompra/:id1/:id2" component={EditarItemC}/>
          <Route path= "/excluircliente/:id" component={ExcluirCli}/>
          <Route path= "/excluircompra/:id" component={ExcluirCompra}/>
          <Route path= "/excluirproduto/:id" component={ExcluirProd}/>
          <Route path= "/excluirservico/:id" component={ExcluirServ}/>
          <Route path= "/excluirpedido/:id" component={ExcluirPed}/>
          <Route path= "/excluiritemproduto/:id1/:id2" component={ExcluirItemProd}/>
          <Route path= "/excluiritempedido/:id1/:id2" component={ExcluirItemP}/>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
