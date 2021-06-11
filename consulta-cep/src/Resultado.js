import React from "react";
import { Button, Grid } from "@material-ui/core";


function Resultado(props) {

    function OutraBusca() {
        props.setPaginaSelecionada("pesquisa");
    }

    return (
        <div className="resultado">

            <h1>CEP: {props.cepDados.cep}</h1>
            <h2>Rua: {props.cepDados.rua}</h2>
            <h2>Bairro: {props.cepDados.bairro}</h2>
            <h2>Cidade: {props.cepDados.cidade}</h2>
            <h2>Estado: {props.cepDados.estado}</h2>
            <h2>Serviço: {props.cepDados.serviço}</h2>

            <Grid
                container spacing={2}
                direction="column"
                justify="flex-end"
                alignItems="center"
            >
                <Grid item xs={6} >
                    <Button variant="contained" color="primary" onClick={OutraBusca} >
                        Fazer Outra Busca
                    </Button>
                </Grid>
            </Grid>

        </div>
    );
}

export default Resultado;