import React, { useEffect, useState } from 'react';
import '../../css/core.css';
import '../../css/styles.css';

const registrate = () => {
    const [email, setEmail] = useState('');
    const [contra, setcontra] = useState('');
    const [siguiente, setsiguiente] = useState('');
    const [error, setError] = useState('');
    const [correos, setCorreos] = useState([]);
    const [idusuarios, setIdusuarios] = useState([]);



    /*Validacion de la contraseña */

    const [shown, setShown] = useState(false);
    const switchShown = () => setShown(!shown);
    const onChange = ({ currentTarget }) => setcontra(currentTarget.value);

    /* ----------------------- */

    /* Bloqueo de formulario */
    /* const [estatuscontra, setEstatusContra]= useState(true); */
    const [estatusbtn, setEstatusbtn] = useState(true);
    const habilitarbtn = () => {

        if (email !== "" && contra !== "") {
            console.log("Es diferente de vacio")
            setEstatusbtn(false);

        }
    }


    /* ----------------- */

    /*.............................. */

    const getUsuario = () => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow',
        };
        fetch("http://localhost/saludcitaAPI/index.php/Api/login/", requestOptions)
            .then(response => response.json())
            .then(data => {
                const extractedUsers = data.map(item => ({
                    id: item.id_usuario,
                    email: item.correo,
                    contra: item.contra,
                    tipo: item.tipo,

                }));
                setCorreos(extractedUsers);

                console.log("Usuarios Disponibles", extractedUsers);

            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }

    useEffect(() => {
        getUsuario();


    }, []);


    const handleLogin = () => {
        const foundUser = correos.find(correo => correo.email === email && correo.contra === contra && correo.tipo === "Doctor");
        if (foundUser) {
            setIdusuarios(foundUser);
            /* const iddefinido = idusuarios.find(idusuario => idusuario.id_usuario); */
            setsiguiente('/');
            console.log(iddefinido);
        } else {
            const foundUser = correos.find(correo => correo.email === email && correo.contra === contra && correo.tipo === "Paciente");
            if (foundUser) {
                /* setIdusuarios(foundUser);
                const iddefinido = foundUser; */
                 setsiguiente('/'); 
                /* console.log(iddefinido.find(item => { item.id })); */
            }
            else {
                setError('Usuario o contraseña incorrectos');
            }
        }
    };

    useEffect(() => {

        if (siguiente) {
            window.location.href = siguiente;
        }
    }, [siguiente]);

    return (
        <>
            <section>
                <div className="wrapper">
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
                                            onChange={e => { setEmail(e.target.value); habilitarbtn(); }}

                                        />
                                    </div>
                                </div>

                                <div className="mb-3">
                                    <div className="form-field d-flex align-items-center">
                                        <input
                                            type={shown ? 'text' : 'password'}
                                            className="form-control"
                                            id="contrasena"
                                            /* disabled={estatuscontra} */
                                            placeholder='Contraseña'
                                            value={contra}
                                            onChange={(e) => { setcontra(e.target.value); onChange; habilitarbtn(); }}

                                        />

                                        <div onClick={switchShown}>
                                            {shown ? <img src="src/Img/mostrar-contra.png" alt="" style={{ width: "20px" }} /> : <img src="src/Img/ocultar-contra.png" alt="" style={{ width: "20px" }} />}
                                        </div>
                                    </div>
                                </div>

                                {error && <div className="alert alert-danger">{error}</div>}

                                <button
                                    id='botonenviar'
                                    disabled={estatusbtn}
                                    className="btn btn-dark mx-auto d-block"
                                    style={{ marginTop: '30px' }}
                                    onClick={handleLogin}
                                >
                                    Iniciar Sesión
                                </button>


                                {/* Fin del formulario */}
                            </div>
                        </div>
                    </div>

                    <div className="text-center fs-6">
                        <a className='olvidaste' href="/cambiarcontrasena">Olvidaste tu contraseña?</a> o <a className='registrarte' href="/registro">Registrate</a>
                    </div>

                </div>
            </section>

        </>
    )
}

export default registrate