import axios from "axios";
import { useState, useEffect } from "react";
import "./createBlog.css";

const URI = "http://localhost:8000/blogs/gene";

const FormModal = () => {

  // Banco de informacion
  const [nuevoUsuario, setnuevoUsuario] = useState({
    Nombre: "",
    Ap_Paterno: "",
    Ap_Materno: "",
    Edad: "",
    Sexo: "",
    Calle: "",
    N_Int: "",
    N_Ext: "",
    Colonia: "",
    Municipio: "",
    Estado: "",
    T_Hab: "",
    I_Mens: "",
    V_año: "",
    Libros: "",
  });

  // state de la info
  const [checkboxInters_Per, setcheckboxInters_Per] = useState({
    Musica: false,
    Cine: false,
    Modelado: false,
    Compras: false,
  });

  const [checkboxDest, setCheckboxDest] = useState({
    Desierto: false,
    Playa: false,
    Ciudad: false,
    Montaña: false,
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  // Methods
  const handleCheckboxInters_Pers = (event) => {
    const { name, checked } = event.target;
    setcheckboxInters_Per((prevValues) => ({
      ...prevValues,
      [name]: checked,
    }));
  };

  const handleCheckboxDest = (event) => {
    const { name, checked } = event.target;
    setCheckboxDest((prevValues) => ({
      ...prevValues,
      [name]: checked,
    }));
  };

  const handleChange = (e) => {
    setnuevoUsuario({
      ...nuevoUsuario,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const selectedInters_Pers = Object.keys(checkboxInters_Per)
      .filter((key) => checkboxInters_Per[key])
      .join(",");

    const selectedDest = Object.keys(checkboxDest)
      .filter((key) => checkboxDest[key])
      .join(",");

    try {
      setLoading(true);
      setError(null);

      const postGeneral = await axios.post(URI, {
        Nombre: nuevoUsuario.Nombre,
        Ap_Paterno: nuevoUsuario.Ap_Paterno,
        Ap_Materno: nuevoUsuario.Ap_Materno,
        Edad: nuevoUsuario.Edad,
        Sexo: nuevoUsuario.Sexo,
      });

      const postDirec = await axios.post("http://localhost:8000/blogs/dire", {
        Calle: nuevoUsuario.Calle,
        N_Int: nuevoUsuario.N_Int,
        N_Ext: nuevoUsuario.N_Ext,
        Colonia: nuevoUsuario.Colonia,
        Municipio: nuevoUsuario.Municipio,
        Estado: nuevoUsuario.Estado,
      });

      const postParti = await axios.post("http://localhost:8000/blogs/part", {
        I_pers: selectedInters_Pers,
        D_Pref: selectedDest,
        T_Hab: nuevoUsuario.T_Hab,
        I_Mens: nuevoUsuario.I_Mens,
        V_año: nuevoUsuario.V_año,
        Libros: nuevoUsuario.Libros,
      });
      setLoading(false);
      window.location.reload();
    } catch (err) {
      setLoading(false);
      setError("Un error ha ocurrido al crear nuevo usuario.");
      console.error(err);
    }
  }; 

  return (
    <div className="modal-container">
        <button
          type="button"
          className="shadow__btn"
          data-toggle="modal"
          data-target="#myModal"
          ><i className="fa-solid fa-plus"> Nuevo usuario</i>
        </button>
      <div
        className="modal fade modal-lg" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title center" id="exampleModalLabel">
                Crear nuevo usuario
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit}>
                {/* Generales */}
                <fieldset className="field-container row form-group">
                  <legend>Generales</legend>
                  {/* Name */}
                  <div className="input-group mb-3 ">
                    <div className="input-group-prepend">
                      <span className="input-group-text" id="Nombre">
                        Nombre
                      </span>
                    </div>
                    <input
                      className="form-control"
                      type="text"
                      aria-describedby="basic-addon1"
                      value={nuevoUsuario.Nombre}
                      name="Nombre"
                      onChange={handleChange}
                    />
                  </div>
                  {/* Ap. Paterno */}
                  <div className="input-group mb-3">
                    <div className="input-group-prepend">
                      <span className="input-group-text" id="Ap_Paterno">
                        Ap. Paterno
                      </span>
                    </div>
                    <input
                      type="text"
                      aria-describedby="basic-addon1"
                      name="Ap_Paterno"
                      value={nuevoUsuario.Ap_Paterno}
                      onChange={handleChange}
                      className="form-control"
                    />
                  </div>
                  {/* Ap. Materno */}
                  <div className="input-group mb-3">
                    <div className="input-group-prepend">
                      <span className="input-group-text" id="Ap_Materno">
                        Ap. Materno
                      </span>
                    </div>
                    <input
                      type="text"
                      aria-describedby="basic-addon1"
                      className="form-control"
                      name="Ap_Materno"
                      value={nuevoUsuario.Ap_Materno}
                      onChange={handleChange}
                    />
                  </div>
                  {/* Edad & sexo */}
                  <div className="nested-field">
                    <div className="input-group mb-3 nested-input">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="Edad">
                          Edad
                        </span>
                      </div>
                      <input
                        type="text"
                        className="form-control"
                        aria-describedby="basic-addon1"
                        name="Edad"
                        value={nuevoUsuario.Edad}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="input-group mb-3">
                      <div className="input-group-prepend">
                        <label className="input-group-text" htmlFor="sexo_id">
                          Sexo
                        </label>
                      </div>
                      <select
                        className="form-select"
                        id="sexo_id"
                        name="Sexo"
                        value={nuevoUsuario.Sexo}
                        onChange={handleChange}
                      >
                        <option value="Seleccionar">Seleccionar el sexo</option>
                        <option value="Hombre">Hombre</option>
                        <option value="Mujer">Mujer</option>
                      </select>
                    </div>
                  </div>
                </fieldset>
                {/* Direccion */}
                <fieldset className="field-container row form-group">
                  <legend>Direccion</legend>
                  {/* Calle */}
                  <div className="input-group mb-3">
                    <div className="input-group-prepend">
                      <span className="input-group-text" id="basic-addon1">
                        Calle
                      </span>
                    </div>
                    <input
                      type="text"
                      aria-describedby="basic-addon1"
                      className="form-control"
                      name="Calle"
                      value={nuevoUsuario.Calle}
                      onChange={handleChange}
                    />
                  </div>
                  {/* Num. Int */}
                  <div className="nested-field">
                    <div className="input-group mb-3 nested-input">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">
                          Num. Int
                        </span>
                      </div>
                      <input
                        type="text"
                        className="form-control"
                        aria-describedby="basic-addon1"
                        name="N_Int"
                        value={nuevoUsuario.N_Int}
                        onChange={handleChange}
                      />
                    </div>
                    {/* Num. Exit */}
                    <div className="input-group mb-3 ">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">
                          Num. Exit
                        </span>
                      </div>
                      <input
                        type="text"
                        className="form-control"
                        aria-describedby="basic-addon1"
                        name="N_Ext"
                        value={nuevoUsuario.N_Ext}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  {/* Colonia */}
                  <div className="input-group mb-3">
                    <div className="input-group-prepend">
                      <span className="input-group-text" id="basic-addon1">
                        Colonia
                      </span>
                    </div>
                    <input
                      type="text"
                      aria-describedby="basic-addon1"
                      className="form-control"
                      name="Colonia"
                      value={nuevoUsuario.Colonia}
                      onChange={handleChange}
                    />
                  </div>
                  {/* Municipio */}
                  <div className="nested-field">
                    <div className="input-group mb-3 nested-input">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">
                          Municipio
                        </span>
                      </div>
                      <input
                        type="text"
                        className="form-control"
                        aria-describedby="basic-addon1"
                        name="Municipio"
                        value={nuevoUsuario.Municipio}
                        onChange={handleChange}
                      />
                    </div>
                    {/* Estado */}
                    <div className="input-group mb-3">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">
                          Estado
                        </span>
                      </div>
                      <input
                        type="text"
                        className="form-control"
                        aria-describedby="basic-addon1"
                        name="Estado"
                        value={nuevoUsuario.Estado}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </fieldset>
                {/* Particulares */}
                <fieldset className="field-container row form-group">
                  <legend>Particulares</legend>
                  {/* Inters pers */}
                  <div className="input-group mb-3 alert">
                    <div className="input-group-prepend">
                      <span className="input-group-text" id="basic-addon1">
                        Inters pers.:
                      </span>
                    </div>
                    <br />
                    <div className="mt-1 center radio-buttons-container">
                      {/*Opciones de interes pers*/}
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value="Música"
                          id="Música"
                          name="Musica"
                          checked={checkboxInters_Per.Musica}
                          onChange={handleCheckboxInters_Pers}
                        />
                        <label className="form-check-label" htmlFor="Música">
                          Música
                        </label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value="Cine"
                          id="Cine"
                          name="Cine"
                          checked={checkboxInters_Per.Cine}
                          onChange={handleCheckboxInters_Pers}
                        />
                        <label className="form-check-label" htmlFor="Cine">
                          Cine
                        </label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value="Modelado"
                          id="Modelado"
                          name="Modelado"
                          checked={checkboxInters_Per.Modelado}
                          onChange={handleCheckboxInters_Pers}
                        />
                        <label className="form-check-label" htmlFor="Modelado">
                          Modelado
                        </label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value="Compras"
                          id="Compras"
                          name="Compras"
                          checked={checkboxInters_Per.Compras}
                          onChange={handleCheckboxInters_Pers}
                        />
                        <label className="form-check-label" htmlFor="Compras">
                          Compras
                        </label>
                      </div>
                    </div>
                    {/*Opciones de interes pers*/}
                  </div>
                  {/* Dest. Pref */}
                  <div className="input-group mb-3 alert">
                    <div className="input-group-prepend">
                      <span className="input-group-text" id="basic-addon1">
                        Desti. Pref.:
                      </span>
                    </div>
                    <div className="mt-1 center radio-buttons-container">
                      {/*Opciones de Dest. Pref*/}
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value="Desierto"
                          id="Desierto"
                          name="Desierto"
                          checked={checkboxDest.Desierto}
                          onChange={handleCheckboxDest}
                        />
                        <label className="form-check-label" htmlFor="Desierto">
                          Desierto
                        </label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value="Playa"
                          id="Playa"
                          name="Playa"
                          checked={checkboxDest.Playa}
                          onChange={handleCheckboxDest}
                        />
                        <label className="form-check-label" htmlFor="Playa">
                          Playa
                        </label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value="Ciudad"
                          id="Ciudad"
                          name="Ciudad"
                          checked={checkboxDest.Ciudad}
                          onChange={handleCheckboxDest}
                        />
                        <label className="form-check-label" htmlFor="Ciudad">
                          Ciudad
                        </label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value="Montaña"
                          id="Montaña"
                          name="Montaña"
                          checked={checkboxDest.Montaña}
                          onChange={handleCheckboxDest}
                        />
                        <label className="form-check-label" htmlFor="Montaña">
                          Montaña
                        </label>
                      </div>
                    </div>
                    {/*Opciones de Dest. Pref*/}
                  </div>
                  {/* Tipo Hab & Ingrs. Mens */}
                  <div className="nested-field">
                    <div className="input-group mb-3 alert ">
                      <div className="input-group-prepend">
                        <label
                          className="input-group-text"
                          htmlFor="inputGroupSelect01"
                        >
                          Tipo Hab:
                        </label>
                      </div>
                      <select
                        className="form-select"
                        id="inputGroupSelect01"
                        name="T_Hab"
                        value={nuevoUsuario.T_Hab}
                        onChange={handleChange}
                      >
                        <option value="Seleccionar">
                          Seleccionar su habitacion
                        </option>
                        <option value="Casa propia">Casa propia</option>
                        <option value="Departamento">Departamento</option>
                        <option value="Hombre">Renta</option>
                      </select>
                    </div>
                    <div className="input-group mb-3 alert ">
                      <div className="input-group-prepend">
                        <label
                          className="input-group-text"
                          htmlFor="inputGroupSelect01"
                        >
                          Ingrs. Mens:
                        </label>
                      </div>
                      <select
                        className="form-select"
                        id="inputGroupSelect01"
                        name="I_Mens"
                        value={nuevoUsuario.I_Mens}
                        onChange={handleChange}
                      >
                        <option value="Seleccionar">
                          Seleccionar su ingr mensual
                        </option>
                        <option value="2,500 – 5,000">2,500 – 5,000</option>
                        <option value="5,001 – 7,000">5,001 – 7,000</option>
                        <option value="7,001 – 10,000">7,001 – 10,000</option>
                      </select>
                    </div>
                  </div>
                  {/* Viajes al año & Libros */}
                  <div className="nested-field">
                    <div className="input-group mb-3 alert">
                      <div className="input-group-prepend">
                        <label
                          className="input-group-text"
                          htmlFor="inputGroupSelect01"
                        >
                          Viajes al año:
                        </label>
                      </div>
                      <select
                        className="form-select"
                        id="inputGroupSelect01"
                        name="V_año"
                        value={nuevoUsuario.V_año}
                        onChange={handleChange}
                      >
                        <option value="Seleccionar">
                          Seleccionar sus V por año
                        </option>
                        <option value="1 – 3">1 – 3</option>
                        <option value="4 – 6">4 – 6</option>
                        <option value="7 – 10">7 – 10</option>
                      </select>
                    </div>
                    <div className="input-group mb-3 alert">
                      <div className="input-group-prepend">
                        <label
                          className="input-group-text"
                          htmlFor="inputGroupSelect01"
                        >
                          Libro:
                        </label>
                      </div>
                      <select
                        className="form-select"
                        id="inputGroupSelect01"
                        name="Libros"
                        value={nuevoUsuario.Libros}
                        onChange={handleChange}
                      >
                        <option value="Seleccionar">
                          Seleccionar su Libro
                        </option>
                        <option value="Romance">Romance</option>
                        <option value="Novela">Novela</option>
                        <option value="Fantasía">Fantasía</option>
                        <option value="Política">Política</option>
                        <option value="Científicos">Científicos</option>
                      </select>
                    </div>
                  </div>
                </fieldset>
                <button type="submit" className="btn btn-primary buttons ">
                  <strong>Guardar</strong>
                </button>
                <button
                  type="button"
                  className="btn btn-secondary buttons"
                  data-dismiss="modal"
                >
                  Cerrar
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormModal;
