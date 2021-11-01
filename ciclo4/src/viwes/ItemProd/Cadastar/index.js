import { Alert, Button, Container, Form, FormGroup, Input, Label } from "reactstrap";
import { Link } from "react-router-dom";
import { useState } from "react/cjs/react.development";
import { api } from "../../../config";
import axios from "axios";

export const CadastrarItemC = (props) => {

    const [itemc, setItemc] = useState({
        CompraId: '',
        ProdutoId: '',
        quantidade: '',
        valor: ''
    });
    
    const [status, setStatus] = useState({
        type: '',
        messsage: ''
    });

    const valorInput = e => setItemc({
        ...itemc,[e.target.name]: e.target.value
    });

    const cadPedido = async e =>{
        e.preventDefault();
        console.log(itemc);

        const headers = {
        }
        await axios.post(api+"/itemcompra", itemc,{headers})
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
                    <h1>Cadastrar Item comprado</h1>
                </div>
                <div className="p-2">
                    <Link to="/listar-itemc" className="btn btn-outline-success btn-sm">Item comprado</Link>
                </div>
            </div>

            <hr className="m-1" />

            {status.type === 'error' ? <Alert color="danger">{status.message}</Alert> : ""}

            {status.type === 'success' ? <Alert color="success">{status.message}</Alert> : ""}

            <Form className="p-2" onSubmit={cadPedido}>
                <FormGroup className="p-2">
                    <Label >ID da Compra</Label>
                    <Input name="CompraId" placeholder="Id da Compra" type="number" 
                        onChange={valorInput}/>
                </FormGroup>

                <FormGroup className="p-2">
                    <Label >ID do Serviço</Label>
                    <Input name="ProdutoId" placeholder="Id do Produto" type="number" 
                        onChange={valorInput}/>
                </FormGroup>

                <FormGroup className="p-2">
                    <Label >Quantidade</Label>
                    <Input name="quantidade" placeholder="Quantidade do item" type="number" 
                        onChange={valorInput}/>
                </FormGroup>

                <FormGroup className="p-2">
                    <Label>
                        Valor
                    </Label>
                    <Input
                        name="valor"
                        placeholder="valor do item"
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