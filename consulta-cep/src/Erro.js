import React from "react";

import { Typography, Button } from "@material-ui/core";



function Erro(props) {

    function TenteNovamente() {
        props.setPaginaSelecionada("pesquisa");
    }

    return (
        <div className="erro">
            <Typography variant="subtitle1"><strong>Desculpe ocorreu um erro ao buscar =( </strong></Typography>
            <br />
            <Button variant="contained" color="primary" onClick={TenteNovamente}>Tentar Novamente</Button>

        </div>
    );
}

export default Erro;