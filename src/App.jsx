import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Buscador from "./componentes/Buscador";
import Listado from './componentes/Listado';
import { BaseColaboradores } from "./assets/BaseColaboradores";
import Formulario from './componentes/Formulario';
import Alert from './componentes/Alert';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import './App.css'

export default function App () {
  const [colaboradores, setColaboradores] = useState(BaseColaboradores)
  const [alert, setAlert] = useState({
    error: "",
    msg: "",
    color: "",
  });
  const [search, setSearch] = useState("");

  const handleSubmit = (nuevoColaborador) => {
    const colaboradorFinal = { ...nuevoColaborador, id: Date.now() };
    setColaboradores([...colaboradores, colaboradorFinal]);
  };
  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  {/*const colaboradorFiltrado = colaboradores.filter((colaborador) => {
    if (
      colaborador.nombre.toLowerCase().includes(search.toLowerCase()) ||
      colaborador.email.toLowerCase().includes(search.toLowerCase()) ||
      colaborador.edad.toLowerCase().includes(search.toLowerCase()) ||
      colaborador.cargo.toLowerCase().includes(search.toLowerCase()) ||
      colaborador.telefono.toLowerCase().includes(search.toLowerCase()) 
    ) {
      return true;
    }
    return false;
  });*/



  return (
    <>
    <div className='mx-auto container'>
      <div>
        <h2 className='text-start'>Listado de Colaboradores</h2>
        <Row>
          <Col sm={4}></Col>
          <Buscador search={search} onChange={handleChange}/>
          <Col sm={12} md={12}>
          <Listado colaboradores={colaboradores}/>
          </Col>
          
        </Row>
      </div>
        <Row>
          <Col md={12}>
          <Formulario onSubmit={handleSubmit} setAlert={setAlert}/>
            {alert.msg && <Alert color={alert.color}>{alert.msg}</Alert>}
          </Col>
        </Row>
    </div>
    </>
  );
}}

