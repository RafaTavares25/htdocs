import { Alert, Button, Container, Form, FormGroup, Input, Label } from "reactstrap";
import { Link } from "react-router-dom";
import { useState } from "react/cjs/react.development";
import { api } from "../../../config";
import axios from "axios";

export const EditarProd = (props) => {
    const [id, setId] = useState(props.match.params.id)
    const [produto, setProduto] = useState({
        id: id,
        nome: '',
        descricao: ''
    });

    const [status, setStatus] = useState({
        type: '',
        messsage: ''
    });

    const valorInput = e => setProduto({
        ...produto,[e.target.name]: e.target.value
    });

    const cadProduto = async e =>{
        e.preventDefault();
        console.log(produto);

        const headers = {
            'Content-Type' : 'application/json'
        }
        await axios.post(api+"/attproduto", produto,{headers})
        .then((response) =>{
            // console.log(response.data.message);
            if (response.data.error){
                setStatus({
                    type: 'error',
                    message: response.data.message
                });
            } else{
                setStatus({
                    type: 'success',
                    message: response.data.message
                })
            }
        })
        .catch(() =>{
            console.log("Erro: Sem conexão com a API.")
        })
    }

    return (
        <Container>
            <div className="d-flex">
                <div className="m-auto p-2">
                    <h1>Editar Produto</h1>
                </div>
                <div className="p-2">
                    <Link to="/listar-produtos" className="btn btn-outline-success btn-sm">Produtos</Link>
                </div>
            </div>

            <hr className="m-1" />

            {status.type === 'error' ? <Alert color="danger">{status.message}</Alert> : ""}

            {status.type === 'success' ? <Alert color="success">{status.message}</Alert> : ""}

            <Form className="p-2" onSubmit={cadProduto}>
            <FormGroup className="p-2">
                    <Label ></Label>
                    <Input name="id" placeholder="ID do Cliente" type="hidden" value={id}
                        onChange={valorInput} />
                </FormGroup>
                <FormGroup className="p-2">
                    <Label >Nome</Label>
                    <Input name="nome" placeholder="Nome do produto" type="text" 
                        onChange={valorInput}/>
                </FormGroup>

                <FormGroup className="p-2">
                    <Label>
                        Descrição
                    </Label>
                    <Input
                        name="descricao"
                        placeholder="Descrição do produto"
                        type="text"
                        onChange={valorInput}   
                    />
                </FormGroup>
                
                <Button type="submit" outline color = "success">
                    Cadastrar
                </Button>
            </Form>
        </Container>

    );
}