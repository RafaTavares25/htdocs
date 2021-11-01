import './App.css';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Home } from './viwes/Home';
import { Listar } from './viwes/Cliente/Listar/';
import { ListarPedidos } from './viwes/Pedido/ListarPedidos';
import { ListarServicos } from './viwes/Servico/ListarServicos';
import { Menu } from './components/Menu';

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
        </Switch>
      </Router>

    </div>
  );
}

export default App;
