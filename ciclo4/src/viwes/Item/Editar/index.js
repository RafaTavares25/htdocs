import { Alert, Button, Container, Form, FormGroup, Input, Label } from "reactstrap";
import { Link } from "react-router-dom";
import { useState } from "react/cjs/react.development";
import { api } from "../../../config";
import axios from "axios";

export const EditarItemP = (props) => {
    const [id1, setId1] = useState(props.match.params.id1)
    const [id2, setId2] = useState(props.match.params.id2)
    const [itemp, setItemp] = useState({
        PedidoId: '',
        ServicoId: '',
        quantidade: '',
        valor: ''
    });
    
    const [status, setStatus] = useState({
        type: '',
        messsage: ''
    });

    const valorInput = e => setItemp({
        ...itemp,[e.target.name]: e.target.value
    });

    const cadPedido = async e =>{
        e.preventDefault();
        console.log(itemp);

        const headers = {
        }
        await axios.post(api+"/attitempedido/"+id1+'/'+id2, itemp,{headers})
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
                    <h1>Cadastrar Item pedido</h1>
                </div>
                <div className="p-2">
                    <Link to="/listar-itemp" className="btn btn-outline-success btn-sm">Item pedido</Link>
                </div>
            </div>

            <hr className="m-1" />

            {status.type === 'error' ? <Alert color="danger">{status.message}</Alert> : ""}

            {status.type === 'success' ? <Alert color="success">{status.message}</Alert> : ""}

            <Form className="p-2" onSubmit={cadPedido}>
                <FormGroup className="p-2">
                    <Label ></Label>
                    <Input name="PedidoId" placeholder="Id do Pedido" type="number" value={id1}
                        onChange={valorInput}/>
                </FormGroup>

                <FormGroup className="p-2">
                    <Label ></Label>
                    <Input name="ServicoId" placeholder="Id do Serviço" type="number" value={id2}
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