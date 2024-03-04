import React, { useEffect, useState } from 'react';
import '../../css/core.css';
import '../../css/styles.css';

const citaForm = () => {
    const [fecha, setFecha] = useState('');
    const [horario, setHorario] = useState('');
    const [motivo, setMotivo] = useState('');
    const [siguiente, setSiguiente] = useState('');
  
  
    const handleAdd = () => {
  
      /* console.log(email, tipo, contra); */
      var formdata = new FormData();
      formdata.append("fecha", fecha);
      formdata.append("horario", horario);
      formdata.append("motivo", motivo);
  
      var requestOptions = {
        mode: 'no-cors',
        header: {
          'Content-Type': 'application/json; charset=UTF-8'
        },
        method: 'POST',
        body: formdata,
      };
      fetch("http://localhost/saludcitaAPI/index.php/Api/cita/", requestOptions)
        .then(response => response.text())
        .then((result) => { console.log(result); })
        .catch(error => { console.log('Error fetching data:', error); });
  
    }
  
    const cambiar = (e) => {
      e.preventDefault();
      setSiguiente('/citas');
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
                    <div className='cajabtncancelar'>
                        <a href="/" className='botoncancelar'>Cancelar</a>
                    </div>

                    <div className="logo">
                        <img src="/src/Img/logo-citas.png" alt="" />
                    </div>
                    <div className="text-center mt-4 name">
                        Agendar cita
                    </div>

                    {/* Formulario */}
                    <form className="needs-validation"  onSubmit={cambiar}  >
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <div className="form-field d-flex align-items-center">
                                        <input
                                            type="date"
                                            className="form-control"
                                            id="fecha"
                                            placeholder='Fecha'
                                            value={fecha}
                                            onChange={e => setFecha(e.target.value)} 
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="col-md-6 mb-3">
                                    <div className="form-field d-flex align-items-center">
                                        <input
                                            type="time"
                                            className="form-control"
                                            id="horario"
                                            placeholder='Horario'
                                            value={horario}
                                            onChange={e => setHorario(e.target.value)}
                                            required
                                        />
                                    </div>
                                </div>

                            </div>
                            <div className="row">
                                <div className="col-md-12 mb-3">
                                    <div className="form-field d-flex align-items-center">
                                        <textarea 
                                            type="text" 
                                            name="motivo" 
                                            id="motivo" 
                                            rows="2" 
                                            placeholder='Motivo'
                                            value={motivo}
                                            onChange={e => setMotivo(e.target.value)}
                                        />
                                    </div>
                                </div>
                            </div>

                            <button
                                type='submit'
                                className="btn btn-dark mx-auto d-block"
                                style={{ marginTop: '30px' }}
                                onClick={() => handleAdd()}>
                                Enviar
                            </button>


                            {/* Fin del formulario */}
                        </div>
                    </form>
                </div>
            </section>
        </>
    )
}

export default citaForm