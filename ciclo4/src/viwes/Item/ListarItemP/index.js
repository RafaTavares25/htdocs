import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Alert, Container, Table } from "reactstrap";

import { api } from "../../../config";

export const ListarItemP = () => {

    const [data, setData] = useState([]);   

    const [status, setStatus] = useState({
        type: '',
        message: ''
    })

    const getItemP = async () => {
        await axios.get(api + "/itenspedidos")
            .then((response) => {
                console.log(response.data.itemp);
                setData(response.data.itemp)
            })
            .catch(() => {
                setStatus({
                    type: 'error',
                    message: 'Erro: sem conexão com a API.'
                })
                // console.log("Erro: sem conexão com a API.")
            })
    }

    useEffect(() => {
        getItemP();
    }, [])

    return (
        <div>
            <Container>
                <div className="d-flex">
                    <div>
                        <h1>Visualizar informações dos itens pedidos</h1>
                    </div>
                    <div className="m-auto p-2">
                        <Link to="cadastraritemp"
                            className="btn btn-outline-primary btn-sm">Cadastrar</Link>
                    </div>
                    
                </div>
                {status.type === 'error' ? <Alert color="danger"> {status.message} </Alert> : ""}
                <Table striped>
                <thead>
                        <tr>
                            <th>Servico Id</th>
                            <th>Pedido Id</th>
                            <th>quantidade</th>
                            <th>valor</th>
                            <th>Ação</th>
                            <th>Ação</th>
                        </tr>
                    </thead>
                    <tbody className="mr-auto">
                        {data.map(item => (
                            <tr>
                                <th>{item.ServicoId}</th>
                                <td>{item.PedidoId}</td>
                                <td>{item.quantidade}</td>
                                <td>{item.valor}</td>
                                <td className="text-center/">
                                    <Link to={"/item-pedido/"+item.PedidoId} 
                                    className="btn btn-outline-primary btn-sm">
                                        Pedido
                                    </Link>
                                    
                                </td>
                                <td className="text-center/">
                                    <Link to={"/item-servico/"+item.ServicoId} 
                                    className="btn btn-outline-primary btn-sm">
                                        Serviço
                                    </Link>
                                    <Link to={"/editaritempedido/"+item.PedidoId+'/'+item.ServicoId}
                                        className="btn btn-outline-primary btn-sm">
                                        Editar
                                    </Link>
                                    <Link to={"/excluiritempedido/" + item.PedidoId + '/' + item.ServicoId}
                                        className="btn btn-outline-primary btn-sm">
                                        Excluir
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Container>
        </div>
    )
}