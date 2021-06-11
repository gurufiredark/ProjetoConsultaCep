import React, { useState } from "react";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";

import './App.css';
import Pesquisa from "./Pesquisa.js";
import Carregando from "./Carregando";
import Resultado from "./Resultado.js";
import Erro from "./Erro.js";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#478BC9",
    },
    secondary: {
      main: "#80F1D3",
    },
  },
});

function App() {

  const [cepDados, setCepDados] = useState("")
  const [paginaSelecionada, setPaginaSelecionada] = useState("pesquisa")

  return (
    <div className="app">
      <MuiThemeProvider theme={theme}>
        <Box p={3}>
          {paginaSelecionada === 'pesquisa' ? (
            <Pesquisa
              cepDados={cepDados}
              setCepDados={setCepDados}
              setPaginaSelecionada={setPaginaSelecionada}
            />) : null}
          {paginaSelecionada === 'carregando' ? <Carregando /> : null}
          {paginaSelecionada === 'resultado' ? (
            <Resultado
              cepDados={cepDados}
              setCepDados={setCepDados}
              setPaginaSelecionada={setPaginaSelecionada}
            />) : null}
          {paginaSelecionada === 'erro' ? (
            <Erro
              setPaginaSelecionada={setPaginaSelecionada}
            />) : null}
        </Box>
      </MuiThemeProvider>
    </div>
  );
}

export default App;
