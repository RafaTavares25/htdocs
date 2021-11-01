import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Alert, Container, Table } from "reactstrap";

import { api } from "../../../config";

export const ItemPed = (props) => {

    const [data, setData] = useState([]);

    const [id, setId] = useState(props.match.params.id);

    const [status, setStatus] = useState({
        type: '',
        message: ''
    })

    const getPedidos = async () => {
        await axios.get(api + "/pedido/"+id+"/servicos")
            .then((response) => {
                console.log(response.data.item);
                setData(response.data.item)
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
        getPedidos();
    }, [])

    return (
        <div>
            <Container>
                <div className="d-flex">
                    <div>
                        <h1>Itens do pedido</h1>
                    </div>
                    <div className="m-auto p-2">
                        <Link to="cadastrarpedido"
                            className="btn btn-outline-primary btn-sm">Cadastrar</Link>
                    </div>    
                </div>
                {status.type === 'error' ? <Alert color="danger"> {status.message} </Alert> : ""}
                <Table striped>
                <thead>
                        <tr>
                            <th>Serviço</th>
                            <th>quantidade</th>
                            <th>valor</th>
                            <th>Ação</th>
                        </tr>
                    </thead>
                    <tbody className="mr-auto">
                        {data.map(item => (
                            <tr key={item.PedidoId}>
                                <th>{item.ServicoId}</th>
                                <td>{item.quantidade}</td>
                                <td>{item.valor}</td>
                                <td className="text-center/">
                                    <Link to={"/listar-servicos/"} 
                                    className="btn btn-outline-primary btn-sm">
                                        Serviços
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