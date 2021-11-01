import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Alert, Container, Table } from "reactstrap";
import { api } from "../../../config";

export const ListarProdutos = () => {

    const [data, setData] = useState([]);

    const [status, setStatus] = useState({
        type: '',
        message: ''
    })

    const getProdutos = async () => {
        await axios.get(api + "/produtos")
            .then((response) => {
                console.log(response.data.prod);
                setData(response.data.prod)
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
        getProdutos();
    }, [])

    return (
        <div>
            <Container>
                <div className="d-flex">
                    <div>
                        <h1>Visualizar informações dos produtos</h1>
                    </div>
                    <div className="m-auto p-2">
                        <Link to="cadastrarproduto"
                            className="btn btn-outline-primary btn-sm">Cadastrar</Link>
                    </div>
                    </div>
                    {status.type === 'error' ? <Alert color="danger"> {status.message} </Alert> : ""}
                    <Table striped>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nome</th>
                                <th>Descrição</th>
                                <th>Ação</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map(item => (
                                <tr key={item.id}>
                                    <th>{item.id}</th>
                                    <td>{item.nome}</td>
                                    <td>{item.descricao}</td>
                                    <td className="text-center/">
                                        <Link to={"/listar-itens-produto/" + item.id}
                                            className="btn btn-outline-primary btn-sm">
                                            Consultar
                                        </Link>
                                        <Link to={"/editarproduto/"+item.id}
                                        className="btn btn-outline-primary btn-sm">
                                        Editar
                                    </Link>
                                    <Link to={"/excluirproduto/" + item.id}
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
    );
};