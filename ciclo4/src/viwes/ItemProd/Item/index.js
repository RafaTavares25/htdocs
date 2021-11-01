import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Alert, Container, Table } from "reactstrap";

import { api } from "../../../config";

export const ItemC = (props) => {

    const [data, setData] = useState([]);

    const [id, setId] = useState(props.match.params.id);

    const [status, setStatus] = useState({
        type: '',
        message: ''
    })

    const getPedidos = async () => {
        await axios.get(api + "/item/"+id+"/compra")
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
                        <h1>Compra pertencente ao item</h1>
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
                            <th>ID</th>
                            <th>Cliente</th>
                            <th>Data</th>
                            <th>Ação</th>
                        </tr>
                    </thead>
                    <tbody className="mr-auto">
                        {data.map(item => (
                            <tr key={item.CompraId}>
                                <th>{item.id}</th>
                                <td>{item.ClienteId}</td>
                                <td>{item.data}</td>
                                <td className="text-center/">
                                    <Link to={"/listar-itens-pedido/"+item.id} 
                                    className="btn btn-outline-primary btn-sm">
                                        Itens
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