import React from "react";
import './App.css';
import { CircularProgress } from "@material-ui/core";

function Carregando() {

    return (
        <div className="carregando">
            <CircularProgress color="secondary" />

        </div>
    );
}

export default Carregando;