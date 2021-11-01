import { Alert, Button, Container, Form, FormGroup, Input, Label } from "reactstrap";
import { Link } from "react-router-dom";
import { useState } from "react/cjs/react.development";
import { api } from "../../../config";
import axios from "axios";

export const ExcluirItemP = (props) => {

    const [cliente, setCliente] = useState({
        nome: '',
        endereco: '',
        cidade: '',
        uf: '',
        nascimento: '',
        clienteDesde: ''
    });

    const [status, setStatus] = useState({
        type: '',
        messsage: ''
    });

    const [id1, setId1] = useState(props.match.params.id1)
    const [id2, setId2] = useState(props.match.params.id2)

    const valorInput = e => setCliente({
        ...cliente, [e.target.name]: e.target.value
    });

    const cadCliente = async e => {
        e.preventDefault();
        console.log(cliente);

        const headers = {
        }
        await axios.get(api + "/excluiritempedido/" + id1 + '/' + id2, cliente, { headers })
            .then((response) => {
                // console.log(response.data.message);
                if (response.data.error) {
                    setStatus({
                        type: 'error',
                        message: response.data.message
                    });
                } else {
                    setStatus({
                        type: 'success',
                        message: response.data.message
                    })
                }
            })
            .catch(() => {
                console.log("Erro: Sem conexão com a API.")
            })
    }

    return (
        <Container>
            <div className="d-flex">
                <div className="m-auto p-2">
                    <h1>Excluir Cliente</h1>
                </div>

            </div>

            <hr className="m-1" />

            {status.type === 'error' ? <Alert color="danger">{status.message}</Alert> : ""}

            {status.type === 'success' ? <Alert color="success">{status.message}</Alert> : ""}

            <Form className="p-2" onSubmit={cadCliente}>

                <Button type="submit" className="d-flex m-auto p-2 btn-sm" outline color="success">
                    Excluir
                </Button>
            </Form>
            <div className="d-flex m-auto">
                <Link to="/listar-itensp" className="d-flex m-auto btn btn-outline-success">Voltar</Link>
            </div>
        </Container>

    );
}