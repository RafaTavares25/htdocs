import { Alert, Button, Container, Form, FormGroup, Input, Label } from "reactstrap";
import { Link } from "react-router-dom";
import { useState } from "react/cjs/react.development";
import { api } from "../../../config";
import axios from "axios";

export const CadastrarPed = (props) => {

    const [pedido, setPedido] = useState({
        data: '',
        ClienteId: ''
    });
    
    const [status, setStatus] = useState({
        type: '',
        messsage: ''
    });

    const valorInput = e => setPedido({
        ...pedido,[e.target.name]: e.target.value
    });

    const cadPedido = async e =>{
        e.preventDefault();
        console.log(pedido);

        const headers = {
        }
        await axios.post(api+"/pedido", pedido,{headers})
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
                    <h1>Cadastrar Pedido</h1>
                </div>
                <div className="p-2">
                    <Link to="/listar-pedidos" className="btn btn-outline-success btn-sm">Pedido</Link>
                </div>
            </div>

            <hr className="m-1" />

            {status.type === 'error' ? <Alert color="danger">{status.message}</Alert> : ""}

            {status.type === 'success' ? <Alert color="success">{status.message}</Alert> : ""}

            <Form className="p-2" onSubmit={cadPedido}>
                <FormGroup className="p-2">
                    <Label >Data</Label>
                    <Input name="data" placeholder="Data do pedido" type="date" 
                        onChange={valorInput}/>
                </FormGroup>

                <FormGroup className="p-2">
                    <Label>
                        Cliente Id
                    </Label>
                    <Input
                        name="ClienteId"
                        placeholder="Id do cliente"
                        type="number"
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