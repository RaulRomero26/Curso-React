import PropTypes from 'prop-types';
/*
const newMessage = {
    message: 'Hola Mundo',
    title: 'Raúl'
}

const getMessage = (message) => {
    return message.title;
}*/

export const FirstApp = ({ title, subtitle, name }) =>{

    // if(!title){
    //     throw new Error('No existe el titulo')
    // }
    // //console.log(props);

    return(
        <>
            <h1 data-testid="test-title">{ title }</h1>
            {/* <code>{ JSON.stringify(newMessage) } </code> */}
            <p>{ subtitle }</p>
            <p>{ subtitle }</p>
            <p>{ name }</p>
        </>
    );
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired
}

FirstApp.defaultProps = {
    name: 'Raul Romero',
    subtitle: 'No hay subtitulo'
    // title: 'No hay titulo',
}