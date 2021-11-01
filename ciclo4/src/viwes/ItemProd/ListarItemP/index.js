import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Alert, Container, Table } from "reactstrap";

import { api } from "../../../config";

export const ListarItemComp = () => {

    const [data, setData] = useState([]);   

    const [status, setStatus] = useState({
        type: '',
        message: ''
    })

    const getItemComp = async () => {
        await axios.get(api + "/itenscomprados")
            .then((response) => {
                console.log(response.data.itemc);
                setData(response.data.itemc)
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
        getItemComp();
    }, [])

    return (
        <div>
            <Container>
                <div className="d-flex">
                    <div>
                        <h1>Visualizar informações dos itens pedidos</h1>
                    </div>
                    <div className="m-auto p-2">
                        <Link to="cadastraritemc"
                            className="btn btn-outline-primary btn-sm">Cadastrar</Link>
                    </div>
                    
                </div>
                {status.type === 'error' ? <Alert color="danger"> {status.message} </Alert> : ""}
                <Table striped>
                <thead>
                        <tr>
                            <th>Compra Id</th>
                            <th>Produto Id</th>
                            <th>quantidade</th>
                            <th>valor</th>
                            <th>Ação</th>
                            <th>Ação</th>
                        </tr>
                    </thead>
                    <tbody className="mr-auto">
                        {data.map(item => (
                            <tr>
                                <th>{item.CompraId}</th>
                                <td>{item.ProdutoId}</td>
                                <td>{item.quantidade}</td>
                                <td>{item.valor}</td>
                                <td className="text-center/">
                                    <Link to={"/item-compra/"+item.CompraId} 
                                    className="btn btn-outline-primary btn-sm">
                                        Compra
                                    </Link>
                                    
                                </td>
                                <td className="text-center/">
                                    <Link to={"/item-produto/"+item.ProdutoId} 
                                    className="btn btn-outline-primary btn-sm">
                                        Produto
                                    </Link>
                                    <Link to={"/editaritemcompra/"+item.CompraId+'/'+item.ProdutoId}
                                        className="btn btn-outline-primary btn-sm">
                                        Editar
                                    </Link>
                                    <Link to={"/excluiritemcompra/" + item.CompraId + '/' + item.ProdutoId}
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