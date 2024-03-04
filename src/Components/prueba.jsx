import React, { useEffect, useState } from 'react';
import '../../css/core.css';
import '../../css/styles.css';

const Datos_doctor = () => {
    const [data, setData] = useState([]);
    const getDatosdoctor = () => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow',
        };
        fetch("http://localhost/saludcitaAPI/index.php/Api/doctor/", requestOptions)
            .then(response => response.json())
            .then(data => {
                setData(data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });

    }
    useEffect(() => {
        getDatosdoctor();
    }, []);

    return (
        <>
            <section className="perfiles">
                <div className="container">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-6">
                                <div className='cajabtnmostrar'>
                                    <a href="/doctor" className='botoncancelar'>Insertar datos</a>
                                </div>
                            </div>
                            <div className="col-md-6">

                                <div className='cajabtncancelar'>
                                    <a href="/" className='botoncancelar'>Cancelar</a>
                                </div>
                            </div>
                        </div>
                        <div className="text-center mt-4 name">
                            Mostrar perfiles de los doctores
                        </div>

                        <table>
                            <thead>
                                <tr>
                                    <th>Nombre</th>
                                    <th>Edad</th>
                                    <th>Telefono</th>
                                    <th>Correo electronico</th>
                                    <th>Número de cedula</th>
                                    <th>Curriculum</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map(item => (
                                    <tr key={item.id_doctor}>
                                        <td>{item.nombre} {item.ape_uno} {item.ape_dos}</td>
                                        <td>{item.edad}</td>
                                        <td>{item.tel}</td>
                                        <td>{item.correo} </td>
                                        <td>{item.cedula} </td>
                                        <td>{item.cv} </td>
                                    </tr>

                                ))}
                            </tbody>
                        </table>
                    </div>

                </div>

            </section>
        </>
    )
}

export default Datos_doctor