import React, { useEffect, useState } from 'react';
import '../../css/core.css';
import '../../css/styles.css';


const inicioDoctores = () => {

  /* Variables de estado */
  const [nombre, setNombre] = useState('');
  const [apeUno, setApeuno] = useState('');
  const [apeDos, setApedos] = useState('');
  const [especialidad, setEspecialidad] = useState('');
  const [edad, setEdad] = useState('');
  const [tel, setTel] = useState('');
  const [email, setEmail] = useState('');
  const [cedula, setCedula] = useState('');
  const [cv, setCv] = useState('');
  const [siguiente, setSiguiente] = useState('');
  /* ----------------------------------------- */

  /* Desbloqueo del boton enviar si todos son diferentes de vacio*/
  const [estatusbtn, setEstatusbtn] = useState(true);
    const habilitarbtn = () => {

        if (nombre !== "" && apeUno !== "" && apeDos !==""
            && especialidad !== "Especialidad" && edad !== ""
            && tel !== "" && email !== "" && cedula !== "" && cv !== "") {
            console.log("Es diferente de vacio")
            setEstatusbtn(false);

        }
    }
  /* --------------------------------------------- */

  /* Envia los datos del formulario a la base de datos*/
  const handleAdd = () => {

    /* console.log(email, tipo, contra); */
    var formdata = new FormData();
    formdata.append("nombre", nombre);
    formdata.append("ape_uno", apeUno);
    formdata.append("ape_dos", apeDos);
    formdata.append("especialidad", especialidad);
    formdata.append("edad", edad);
    formdata.append("tel", tel);
    formdata.append("correo", email);
    formdata.append("cedula", cedula);
    formdata.append("cv", cv);


    var requestOptions = {
      mode: 'no-cors',
      header: {
        'Content-Type': 'application/json; charset=UTF-8'
      },
      method: 'POST',
      body: formdata,
    };
    fetch("http://localhost/saludcitaAPI/index.php/Api/doctor/", requestOptions)
      .then(response => response.text())
      .then((result) => { console.log(result); })
      .catch(error => { console.log('Error fetching data:', error); });

  }
  /* ----------------------------------------------- */

  /* Cambiar de pantalla */
  const cambiar = (e) => {
    e.preventDefault();
    setSiguiente('/doctor');
    { <div className="alert alert-danger">Se registro correctamente</div> }
  };
  /* ----------------------------- */

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
                <a href="/Perfiles-Doctores" className='botoncancelar'>Mostrar datos</a>
              </div>
            </div>
            <div className="col-md-6">
              
              <div className='cajabtncancelar'>
                <a href="/" className='botoncancelar'>Cancelar</a>
              </div>
            </div>
          </div>

          <div className="logo">
            <img src="/src/Img/logo-perfiles.png" alt="" />
          </div>
          <div className="text-center mt-4 name">
            Crear perfil doctor
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
                      onChange={e => {setNombre(e.target.value); habilitarbtn();}}
                      required
                    />
                  </div>
                </div>

                <div className="col-md-4 mb-3">
                  <div className="form-field d-flex align-items-center">
                    <input
                      type="text"
                      className="form-control"
                      id="ape_uno"
                      placeholder='Primer apellido'
                      value={apeUno}
                      onChange={e => {setApeuno(e.target.value); habilitarbtn();}}
                      required
                    />
                  </div>
                </div>

                <div className="col-md-4 mb-3">
                  <div className="form-field d-flex align-items-center">
                    <input
                      type="text"
                      className="form-control"
                      id="ape_dos"
                      placeholder='Segundo apellido'
                      value={apeDos}
                      onChange={e => {setApedos(e.target.value); habilitarbtn()}}
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
                      onChange={e => {setEdad(e.target.value); habilitarbtn()}}
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
                      placeholder='Teléfono'
                      value={tel}
                      onChange={e => {setTel(e.target.value); habilitarbtn()}}
                      required
                    />
                  </div>
                </div>

                <div className=" col-md-5 mb-3">
                  <div className="form-field d-flex align-items-center">
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder='Correo electrónico'
                      value={email}
                      onChange={e => {setEmail(e.target.value); habilitarbtn();}}
                      required
                    />
                  </div>
                </div>

              </div>

              <div className="row">
                <div className="col-md-6 mb-3">
                  <div className="form-field d-flex align-items-center">
                    <select name="especialidad" id="especialidad" value={especialidad}
                      onChange={e => {setEspecialidad(e.target.value); habilitarbtn()}} >
                      <option value="#">Especialidad</option>
                      <option value="Cirujano">Cirujano</option>
                      <option value="Destista">Dentista</option>
                    </select>
                  </div>
                </div>

                <div className="col-md-6 mb-3">
                  <div className="form-field d-flex align-items-center">
                    <input
                      type="text"
                      className="form-control"
                      id="cedula"
                      placeholder='Número de cedula'
                      value={cedula}
                      onChange={e => {setCedula(e.target.value); habilitarbtn();}}
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="mb-3">
                <div className="form-field d-flex align-items-center">
                  <input
                    type="file"
                    className="form-control"
                    id="cv"
                    value={cv}
                    onChange={e => {setCv(e.target.value); habilitarbtn();}}
                    required
                  />
                </div>
              </div>

              <button
                type='submit'
                className="btn btn-dark mx-auto d-block"
                disabled={estatusbtn}
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

export default inicioDoctores