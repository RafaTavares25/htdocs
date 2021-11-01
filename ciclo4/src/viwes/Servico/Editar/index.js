import { Alert, Button, Container, Form, FormGroup, Input, Label } from "reactstrap";
import { Link } from "react-router-dom";
import { useState } from "react/cjs/react.development";
import { api } from "../../../config";
import axios from "axios";

export const EditarServ = (props) => {
const [id, setId] = useState(props.match.params.id)
    const [servico, setServico] = useState({
        id: id,
        nome: '',
        descricao: ''
    });

    const [status, setStatus] = useState({
        type: '',
        messsage: ''
    });

    

    const valorInput = e => setServico({
        ...servico, [e.target.name]: e.target.value
    });

    const cadServico = async e => {
        e.preventDefault();
        console.log(servico);

        const headers = {
            'Content-Type': 'application/json'
        }
        await axios.put(api + "/attservico", servico, { headers })
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
                    <h1>Cadastrar Serviço</h1>
                </div>
                <div className="p-2">
                    <Link to="/listar-servicos" className="btn btn-outline-success btn-sm">Voltar</Link>
                </div>
            </div>

            <hr className="m-1" />

            {status.type === 'error' ? <Alert color="danger">{status.message}</Alert> : ""}

            {status.type === 'success' ? <Alert color="success">{status.message}</Alert> : ""}

            <Form className="p-2" onSubmit={cadServico}>
                <FormGroup className="p-2">
                    <Label ></Label>
                    <Input name="id" placeholder="ID do Cliente" type="hidden" value={id}
                        onChange={valorInput} />
                </FormGroup>
                <FormGroup className="p-2">
                    <Label >Nome</Label>
                    <Input name="nome" placeholder="Nome do serviço" type="text"
                        onChange={valorInput} />
                </FormGroup>

                <FormGroup className="p-2">
                    <Label>
                        Descrição
                    </Label>
                    <Input
                        name="descricao"
                        placeholder="Descrição do serviço"
                        type="text"
                        onChange={valorInput}
                    />
                </FormGroup>

                <Button type="submit" outline color="success">
                    Cadastrar
                </Button>
            </Form>
        </Container>

    );
}