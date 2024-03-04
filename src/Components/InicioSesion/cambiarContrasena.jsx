import React, { useEffect, useState } from 'react';
import '../../css/core.css';
import '../../css/styles.css';

const cambiarContrasena = () => {
    const [email, setEmail] = useState('');
    const [contra, setcontra] = useState('');
    const [siguiente, setsiguiente] = useState('');
    const [error, setError] = useState('');
    const [correos, setCorreos] = useState([]);


    const getUsuario = (email) => {
        var requestOptions = {
            mode: 'no-cors',
            method: 'GET',
            redirect: 'follow',
        };
        fetch(`http://localhost/saludcitaAPI/index.php/Api/cambiarcontra/${email}`, requestOptions)
            .then(response => response.json())
            .then(data => {
                const extractedUsers = data.map(item => ({
                    id_usuario: item.id_usuario,
                    contra: item.contra,

                }));
                setCorreos(extractedUsers);

                console.log("Usuarios Disponibles", extractedUsers);

            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }




    const buscarcorreo = () => {
        const foundUser = correos.find(correo => correo.email === email);
        if (foundUser) {
            console.log("El usuario es: ", foundUser);
        } else {
            setError('Usuario o contraseña incorrectos');
        }
    };

    return (
        <>
            <section>
                <div className="wrapper">
                    <div className='cajabtncancelar'>
                        <a href="/" className='botoncancelar'>Cancelar</a>
                    </div>
                    <div className="logo">
                        <img src="/src/Img/logo-login.png" alt="" />
                    </div>
                    <div className="text-center mt-4 name">
                        SaludCita
                    </div>

                    <div className="hold-transition login-page">
                        <div className="login-box">
                            <div className="card-body">
                                {/* Formulario */}
                                <div className="mb-3">
                                    <div className="form-field d-flex align-items-center">
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="correo"
                                            placeholder='Correo electronico'
                                            value={email}
                                            onChange={e => setEmail(e.target.value)}

                                        />
                                    </div>
                                </div>



                                <button
                                    className="btn btn-dark mx-auto d-block"
                                    style={{ marginTop: '30px' }}
                                    onClick={getUsuario(email)}
                                >
                                    Buscar
                                </button>


                                {/* Fin del formulario */}
                            </div>
                        </div>
                    </div>



                </div>
            </section>

        </>
    )
}

export default cambiarContrasena