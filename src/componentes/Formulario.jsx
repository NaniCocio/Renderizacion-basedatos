import { useState } from 'react';

const Formulario =({ onSubmit, setAlert}) => {
    const [colaborador, setColaborador] = useState ({
        nombre: "",
        email: " ",
        edad: "",
        cargo:"",
        telefono:"",
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        if (
            colaborador.nombre === " " ||
            colaborador.email === " " ||
            colaborador.edad === " " ||
            colaborador.cargo === " " ||
            colaborador.telefono === " " 
        ) {
            setAlert({
                error: true,
                msg: "Complete todos los campos",
                color: "danger",
            });
            return;
        }

        onSubmit (colaborador);
        setAlert({
            error: false,
            msg: "Colaborador agregado con éxito",
            color: "success",
        });

        setColaborador({
            nombre: " ",
            email: " ",
            edad: " ",
            cargo:" ",
            telefono:" ",
        })
    }
    
    const handleChange = (e) => {
        const nuevoColaborador = {...colaborador};
        nuevoColaborador[e.target.name] = e.target.value;
        setColaborador(nuevoColaborador);
        console.log(e.target.name, e.target.value);
    };


    return(
        <>
            <form onSubmit={handleSubmit}>
                <h2>Agregar Colaborador</h2>
                <div class="mb-3">
                    <input type="text" 
                    name="nombre"
                    className="form-control" 
                    value={colaborador.nombre}
                    onChange={handleChange}
                    placeholder="Nombre del colaborador" />
                </div>
                <div class="mb-3">
                    <input type="email" 
                    name="email"
                    id="exampleInputEmail1" aria-describedby="emailHelp"
                    className="form-control"
                    value={colaborador.email}
                    onChange={handleChange}
                    placeholder="Email del colaborador" />
                </div>
                <div class="mb-3">
                    <input type="number" 
                    name="edad"
                    className="form-control" 
                    value={colaborador.edad}
                    onChange={handleChange}
                    placeholder="Edad del colaborador" />
                </div>
                <div class="mb-3">
                    <input type="text" 
                    name="cargo"
                    className="form-control"
                    value={colaborador.cargo}
                    onChange={handleChange}
                    placeholder="Cargo del colaborador"/>
                </div>
                <div class="mb-3">
                    <input type="number" 
                    name="telefono"
                    className="form-control" 
                    value={colaborador.telefono}
                    onChange={handleChange}
                    placeholder="Teléfono del colaborador" />
                </div>
                <div className='d-grid mx-auto'>
                    <button type="submit" className="btn btn-primary">Agregar colaborador</button>
                </div>    
            </form>
        </>   
        );
}

export default Formulario;