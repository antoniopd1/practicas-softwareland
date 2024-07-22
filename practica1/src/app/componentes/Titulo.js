import React from 'react';
import PropTypes from 'prop-types';

const Titulo = ({ tipoFuente, tamañoTexto, color, children }) => {
    const estiloTitulo = {
        fontFamily: tipoFuente,
        fontSize: tamañoTexto,
        color: color,
        marginBottom: '10px' 
    };

    return <h1 style={estiloTitulo}>{children}</h1>;
};

Titulo.propTypes = {
    tipoFuente: PropTypes.string,
    tamañoTexto: PropTypes.string,
    color: PropTypes.string
};

export default Titulo;
