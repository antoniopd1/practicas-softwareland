// Parrafo.js
import React from 'react';
import PropTypes from 'prop-types';

const Parrafo = ({ tipoFuente, tamañoTexto, color, children }) => {
    const estiloParrafo = {
        fontFamily: tipoFuente,
        fontSize: tamañoTexto,
        color: color,
        lineHeight: '1.6', 
        marginBottom: '15px' 
    };

    return <p style={estiloParrafo}>{children}</p>;
};

Parrafo.propTypes = {
    tipoFuente: PropTypes.string,
    tamañoTexto: PropTypes.string,
    color: PropTypes.string
};

export default Parrafo;
