import React, { useState } from "react";
import { Button, TextField, Grid } from "@material-ui/core";
import cep from 'cep-promise';

function Pesquisa(props) {

    const [cepTexto, setCepTexto] = useState('');

    function AoClick() {
        props.setPaginaSelecionada("carregando");
        cep(cepTexto)
            .then(resposta => {
                const cepDadosBr = {
                    rua: resposta.street,
                    cep: resposta.cep,
                    estado: resposta.state,
                    cidade: resposta.city,
                    bairro: resposta.neighborhood,
                    serviço: resposta.service
                }
                props.setCepDados(cepDadosBr); //state que está vindo do App recebe o objeto criado
                //console.log(cepDadosBr) mostra no console o objeto
                props.setPaginaSelecionada("resultado");
            })
            .catch(() => props.setPaginaSelecionada("erro"))
    }

    return (
        <div className="pesquisa">
            <h1>Qual CEP deseja consultar?</h1>

            <Grid
                container spacing={2}
                direction="column"
                justify="flex-end"
                alignItems="center"
            >
                <Grid item xs={3}>
                    <TextField
                        fullWidth
                        label="CEP (8 dígitos)"
                        variant="outlined"
                        value={cepTexto}
                        onChange={(ev) => setCepTexto(ev.target.value)}
                    />
                </Grid>
                <Grid item xs={6} >
                    <Button variant="contained" color="primary" onClick={AoClick}>
                        Buscar
                    </Button>
                </Grid>
            </Grid>
        </div>
    );
}
export default Pesquisa;