import React, { useEffect, useState } from 'react';
import '../../css/core.css';
import '../../css/styles.css';


const inicioPacientes = () => {
    const [nombre, setNombre] = useState('');
    const [apeUno, setApeuno] = useState('');
    const [apeDos, setApedos] = useState('');
    const [edad, setEdad] = useState('');
    const [tel, setTel] = useState('');
    const [email, setEmail] = useState('');
    const [siguiente, setSiguiente] = useState('');


    const handleAdd = () => {

        /* console.log(email, tipo, contra); */
        var formdata = new FormData();
        formdata.append("nombre", email);
        formdata.append("ape_uno", apeUno);
        formdata.append("ape_dos", apeDos);
        formdata.append("edad", edad);
        formdata.append("tel", tel);
        formdata.append("correo", email);

        var requestOptions = {
            mode: 'no-cors',
            header: {
                'Content-Type': 'application/json; charset=UTF-8'
            },
            method: 'POST',
            body: formdata,
        };
        fetch("http://localhost/saludcitaAPI/index.php/Api/paciente/", requestOptions)
            .then(response => response.text())
            .then((result) => { console.log(result); })
            .catch(error => { console.log('Error fetching data:', error); });

    }

    const cambiar = (e) => {
        e.preventDefault();
        setSiguiente('/paciente');
        { <div className="alert alert-danger">Se registro correctamente</div> }
    };

    useEffect(() => {
        if (siguiente) {

            window.location.href = siguiente;
        }
    }, [siguiente]);


    return (
        <>
            <section className='perfiles'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className='cajabtnmostrar'>
                                <a href="/" className='botoncancelar'>Mostrar datos</a>
                            </div>
                        </div>
                        <div className="col-md-6">

                            <div className='cajabtncancelar'>
                                <a href="/" className='botoncancelar'>Cancelar</a>
                            </div>
                        </div>
                    </div>
                    <div className='cajabtncancelar'>
                        <a href="/" className='botoncancelar'>Cancelar</a>
                    </div>

                    <div className="logo">
                        <img src="/src/Img/logo-perfiles.png" alt="" />
                    </div>
                    <div className="text-center mt-4 name">
                        Crear perfil paciente
                    </div>

                    {/* Formulario */}
                    <form className="needs-validation" onSubmit={cambiar}  >
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-4 mb-3">
                                    <div className="form-field d-flex align-items-center">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="nombre"
                                            placeholder='Nombre'
                                            value={nombre}
                                            onChange={e => setNombre(e.target.value)}
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="col-md-4 mb-3">
                                    <div className="form-field d-flex align-items-center">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="apeUno"
                                            placeholder='Primer apellido'
                                            value={apeUno}
                                            onChange={e => setApeuno(e.target.value)}
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="col-md-4 mb-3">
                                    <div className="form-field d-flex align-items-center">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="apeDos"
                                            placeholder='Segundo apellido'
                                            value={apeDos}
                                            onChange={e => setApedos(e.target.value)}
                                            required
                                        />
                                    </div>
                                </div>

                            </div>

                            <div className="row">
                                <div className="col-md-3 mb-3">
                                    <div className="form-field d-flex align-items-center">
                                        <input
                                            type="number"
                                            className="form-control"
                                            id="edad"
                                            placeholder='Edad'
                                            value={edad}
                                            onChange={e => setEdad(e.target.value)}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="col-md-4 mb-3">
                                    <div className="form-field d-flex align-items-center">
                                        <input
                                            type="tel"
                                            className="form-control"
                                            id="tel"
                                            placeholder='Telefono'
                                            value={tel}
                                            onChange={e => setTel(e.target.value)}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="col-md-5 mb-3">
                                    <div className="form-field d-flex align-items-center">
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="email"
                                            placeholder='Correo electrónico'
                                            value={email}
                                            onChange={e => setEmail(e.target.value)}
                                            required
                                        />
                                    </div>
                                </div>

                            </div>

                            <button
                                type='submit'
                                className="btn btn-dark mx-auto d-block"
                                style={{ marginTop: '30px' }}
                                onClick={() => handleAdd()} >
                                Guardar
                            </button>


                            {/* Fin del formulario */}
                        </div>
                    </form>
                </div>
            </section>
        </>
    )
}

export default inicioPacientes