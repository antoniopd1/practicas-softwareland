import React from 'react';

const Imagen = ({ src, alt }) => {
    return <img src={src} alt={alt} style={{ maxWidth: '100%' }} />;
};

export default Imagen;
