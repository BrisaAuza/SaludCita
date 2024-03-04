import React, { useEffect, useState } from 'react';
import validator from 'validator'
import '../../css/core.css';
import '../../css/styles.css';

const registrate = () => {

    /* Variables de estado */
    const [email, setEmail] = useState('');
    const [tipo, setTipo] = useState('');
    const [contra, setContra] = useState('');
    const [siguiente, setSiguiente] = useState('');
    const [msj, setMsj] = useState('');
    /* --------------------- */

    /*Validacion de la contraseña */

    const [shown, setShown] = useState(false);
    const switchShown = () => setShown(!shown);
    const onChange = ({ currentTarget }) => setcontra(currentTarget.value);

    const [errorMessage, setErrorMessage] = useState('');


    const validate = (value) => {

        if (validator.isStrongPassword(value, {
            minLength: 8, minLowercase: 1,
            minUppercase: 1, minNumbers: 1, minSymbols: 1
        })) {

            setErrorMessage('Contraseña segura');

        } else {
            setErrorMessage('Contraseña débil')
        }


    }
    /* ------------------------------------ */

    /* Desbloqueo del boton enviar si todos son diferentes de vacio*/
    const [estatusbtn, setEstatusbtn] = useState(true);
    const habilitarbtn = () => {

        if (email !== "" && contra !== "" && tipo !=="Tipo de usuario") {
            console.log("Es diferente de vacio")
            setEstatusbtn(false);

        }
    }
    /* ---------------------- */


    /*Envia datos del formulario a la base de datos */

    const handleAdd = () => {

        console.log(email, tipo, contra);
        var formdata = new FormData();
        formdata.append("correo", email);
        formdata.append("contra", contra);
        formdata.append("tipo", tipo);


        var requestOptions = {
            mode: 'no-cors',
            header: {
                'Content-Type': 'application/json; charset=UTF-8'
            },
            method: 'POST',
            body: formdata,
        };
        fetch("http://localhost/saludcitaAPI/index.php/Api/login/", requestOptions)
            .then(response => response.text())
            .then((result) => { console.log(result);})
            .catch(error => { console.log('Error fetching data:', error); });

    }
    /* ----------------------------------- */

    /* Cambiar de pantalla */
    const cambiar = (e) => {
        e.preventDefault();
        setSiguiente('/');
        { <div className="alert alert-danger">Se registro correctamente</div> }
    };
    /* ------------------------ */

    useEffect(() => {
        if (siguiente) {
            setMsj('Se registro correctamente')
            window.location.href = siguiente;
        }
    }, [siguiente]);

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
                        Registrate
                    </div>

                    <form className="needs-validation" onSubmit={cambiar} >
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
                                        onChange={e => {setEmail(e.target.value); habilitarbtn();}}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="mb-3">
                                <div className="form-field d-flex align-items-center">
                                    <select name="tipo" id="tipo" value={tipo}
                                        onChange={e => {setTipo(e.target.value); habilitarbtn();}} >
                                        <option value="#">Tipo de usuario</option>
                                        <option value="Doctor">Doctor</option>
                                        <option value="Paciente">Paciente</option>
                                    </select>
                                </div>
                            </div>

                            <div className="mb-3">
                                <div className="form-field d-flex align-items-center">
                                    <input
                                        type={shown ? 'text' : 'password'}
                                        className="form-control"
                                        id="contrasena"
                                        placeholder='Contraseña'
                                        value={contra}
                                        onChange={e => { setContra(e.target.value); validate(e.target.value); onChange; habilitarbtn();}}
                                        required
                                    />
                                    <div onClick={switchShown}>
                                        {shown ? <img src="src/Img/mostrar-contra.png" alt="" style={{ width: "20px" }} /> : <img src="src/Img/ocultar-contra.png" alt="" style={{ width: "20px" }} />}
                                    </div>
                                </div>
                                {errorMessage === 'Contraseña segura' ? <span style={{
                                    fontWeight: 'bold',
                                    color: 'green',
                                }}>
                                    {errorMessage}
                                </span> :
                                    <span style={{
                                        fontWeight: 'bold',
                                        color: 'red',
                                    }}>
                                        {errorMessage}
                                    </span>}
                            </div>

                            <button
                                type='submit'
                                className="btn btn-dark mx-auto d-block"
                                disabled={estatusbtn}
                                style={{ marginTop: '30px' }}
                                onClick={() => handleAdd()} >
                                Crear usuario
                            </button>


                            {/* Fin del formulario */}
                        </div>
                    </form>



                </div>
            </section>

        </>
    )
}

export default registrate