import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Profile(){
    return(
        <Card className='perfilUsuario'>
            <Card.Header as="h5">Perfil Usuario</Card.Header>
            <Card.Body>
                <Card.Text>Correo: camilajpavezc@gmail.com</Card.Text>
                <Button variant="primary">Cerrar Sesión</Button>
            </Card.Body>
        </Card>
    );
};

export default Profile;