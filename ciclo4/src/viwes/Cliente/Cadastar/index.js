import { Alert, Button, Container, Form, FormGroup, Input, Label } from "reactstrap";
import { Link } from "react-router-dom";
import { useState } from "react/cjs/react.development";
import { api } from "../../../config";
import axios from "axios";

export const CadastrarCli = (props) => {

    const [cliente, setCliente] = useState({
        nome: '',
        endereco: '',
        cidade: '',
        uf:'',
        nascimento: '',
        clienteDesde: ''
    });

    const [status, setStatus] = useState({
        type: '',
        messsage: ''
    });

    const valorInput = e => setCliente({
        ...cliente, [e.target.name]: e.target.value
    });

    const cadCliente = async e => {
        e.preventDefault();
        console.log(cliente);

        const headers = {
        }
        await axios.post(api + "/cliente", cliente, { headers })
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
                    <h1>Cadastrar Cliente</h1>
                </div>
                <div className="p-2">
                    <Link to="/listar-clientes" className="btn btn-outline-success btn-sm">Clientes</Link>
                </div>
            </div>

            <hr className="m-1" />

            {status.type === 'error' ? <Alert color="danger">{status.message}</Alert> : ""}

            {status.type === 'success' ? <Alert color="success">{status.message}</Alert> : ""}

            <Form className="p-2" onSubmit={cadCliente}>
                <FormGroup className="p-2">
                    <Label >Nome</Label>
                    <Input name="nome" placeholder="Nome do cliente" type="text"
                        onChange={valorInput} />
                </FormGroup>

                <FormGroup className="p-2">
                    <Label>
                        Endereço
                    </Label>
                    <Input
                        name="endereco"
                        placeholder="Endereço"
                        type="tex"
                        onChange={valorInput}
                    />
                </FormGroup>

                <FormGroup className="p-2">
                    <Label >Cidade</Label>
                    <Input name="cidade" placeholder="Cidade" type="text"
                        onChange={valorInput} />
                </FormGroup>

                <FormGroup className="p-2">
                    <Label >UF</Label>
                    <Input name="uf" placeholder="Unidade Federal" type="text"
                        onChange={valorInput} />
                </FormGroup>

                <FormGroup className="p-2">
                    <Label >Nascimento</Label>
                    <Input name="nascimento" placeholder="Data de nascimento" type="date"
                        onChange={valorInput} />
                </FormGroup>

                <FormGroup className="p-2">
                    <Label >Cliente Desde</Label>
                    <Input name="clienteDesde" placeholder="Data de inserção do cliente" type="date"
                        onChange={valorInput} />
                </FormGroup>

                <Button type="submit" outline color="success">
                    Cadastrar
                </Button>
            </Form>
        </Container>

    );
}