import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Alert, Container, Table } from "reactstrap";

import { api } from "../../../config";

export const ItemComp = (props) => {

    const [data, setData] = useState([]);

    const [id, setId] = useState(props.match.params.id);

    const [status, setStatus] = useState({
        type: '',
        message: ''
    })

    const getCompras = async () => {
        await axios.get(api + "/compra/"+id+"/produtos")
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
        getCompras();
    }, [])

    return (
        <div>
            <Container>
                <div className="d-flex">
                    <div>
                        <h1>Visualizar informações das compras</h1>
                    </div>
                    <div className="m-auto p-2">
                        <Link to="cadastrarcompra"
                            className="btn btn-outline-primary btn-sm">Cadastrar</Link>
                    </div>
                    
                </div>
                {status.type === 'error' ? <Alert color="danger"> {status.message} </Alert> : ""}
                <Table striped>
                <thead>
                        <tr>
                            <th>Produto</th>
                            <th>quantidade</th>
                            <th>valor</th>
                            <th>Ação</th>
                        </tr>
                    </thead>
                    <tbody className="mr-auto">
                        {data.map(item => (
                            <tr key={item.CompraId}>
                                <th>{item.ProdutoId}</th>
                                <td>{item.quantidade}</td>
                                <td>{item.valor}</td>
                                <td className="text-center/">
                                    <Link to={"/listar-produtos/"} 
                                    className="btn btn-outline-primary btn-sm">
                                        Consultar
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