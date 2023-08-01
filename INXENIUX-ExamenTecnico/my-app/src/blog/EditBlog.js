/*
  TODO:
    - Cambia nombres de funciones y variables a español y nombres significativos
    - Agrega comentarios en español
    - Dale formato a documentos
    - Cambiar colores
    - Haz obligatorio generales
*/

import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const URI = "http://localhost:8000/blogs/gene/";

const CompEditBlog = ({ id }) => {
  /*Generales*/
  const [Nombre, setNombre] = useState("");
  const [Ap_Paterno, setAp_Paterno] = useState("");
  const [Ap_Materno, setAp_Materno] = useState("");
  const [Edad, setEdad] = useState("");
  const [Sexo, setSexo] = useState("");
  /*Fin de generales*/
  /*Direcciones*/
  const [Calle, setCalle] = useState("");
  const [N_Int, setN_Int] = useState("");
  const [N_Ext, setN_Ext] = useState("");
  const [Colonia, setColonia] = useState("");
  const [Municipio, setMunicipio] = useState("");
  const [Estado, setEstado] = useState("");
  /*Fin de Direcciones*/
  /*Particulares*/
  const [I_pers, setI_pers] = useState("");
  const [D_Pref, setD_Pref] = useState("");
  const [T_Hab, setT_Hab] = useState("");
  const [I_Mens, setI_Mens] = useState("");
  const [V_año, setV_año] = useState("");
  const [Libros, setLibros] = useState("");
  /*Fin de Particulares*/

  const Check_Pers = (event) => {
    const { name, checked } = event.target;

    if (checked === false) {
      console.log("no-check");
      console.log("Antes: " + I_pers);
      let prev = I_pers;
      prev = prev.replace(`${name}`, "");
      setI_pers(prev);
      console.log("Despues: " + I_pers);
    } else {
      console.log("check");
      console.log("Antes: " + I_pers);
      let prev = I_pers;
      prev += `${name}`;
      setI_pers(prev);
      console.log("Despues: " + I_pers);
    }
  };

  const CheckboxPref = (event) => {
    const { name, checked } = event.target;

    if (checked === false) {
      console.log("no-check");
      let prev = D_Pref;
      prev = prev.replace(`${name}`, "");
      setD_Pref(prev);
    } else {
      console.log("check");
      let prev = D_Pref;
      prev += `${name}`;
      setD_Pref(prev);
    }
  };

  const navigate = useNavigate();

  let newId = id.replace("#id", "");
  //procedimiento para actualizar
  const updateForm = async (e) => {
    const update1 = await axios.put(
      "http://localhost:8000/blogs/dire/" + newId,
      {
        Calle: Calle,
        N_Int: N_Int,
        N_Ext: N_Ext,
        Colonia: Colonia,
        Municipio: Municipio,
        Estado: Estado,
      }
    );

    const update2 = await axios.put(
      "http://localhost:8000/blogs/part/" + newId,
      {
        I_pers: I_pers,
        D_Pref: D_Pref,
        T_Hab: T_Hab,
        I_Mens: I_Mens,
        V_año: V_año,
        Libros: Libros,
      }
    );

    const update3 = await axios.put(URI + newId, {
      Nombre: Nombre,
      Ap_Paterno: Ap_Paterno,
      Ap_Materno: Ap_Materno,
      Edad: Edad,
      Sexo: Sexo,
    });

    window.location.reload();
  };

  useEffect(() => {
    getBlogById();
    getdireById();
    getpartById();
  }, []);

  const getBlogById = async () => {
    const res = await axios.get(URI + newId);
    setNombre(res.data.Nombre);
    setAp_Paterno(res.data.Ap_Paterno);
    setAp_Materno(res.data.Ap_Materno);
    setEdad(res.data.Edad);
    setSexo(res.data.Sexo);
  };

  const getdireById = async () => {
    const res = await axios.get("http://localhost:8000/blogs/dire/" + newId);
    setCalle(res.data.Calle);
    setN_Int(res.data.N_Int);
    setN_Ext(res.data.N_Ext);
    setColonia(res.data.Colonia);
    setMunicipio(res.data.Municipio);
    setEstado(res.data.Estado);
  };

  const getpartById = async () => {
    const res = await axios.get("http://localhost:8000/blogs/part/" + newId);
    setI_pers(res.data.I_pers);
    setD_Pref(res.data.D_Pref);
    setT_Hab(res.data.T_Hab);
    setI_Mens(res.data.I_Mens);
    setV_año(res.data.V_año);
    setLibros(res.data.Libros);
  };

  const myStyle = {
    color: "black",
  };

  return (
    <div>
    {/*Boton para editar datos del usuario*/}
      <button
        type="button"
        className="btn btn-info buttons"
        data-toggle="modal"
        data-target={`#${id}`}
      >
        <i className="fa-solid fa-pen" style={{color: "#fcfcfc",}}></i>
      </button>
    {/*Fin de boton para editar datos del usuario*/}
    {/*Modal para editar datos del usuario*/}
      <div
        className="modal fade modal-lg"
        id={id}
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        style={myStyle}
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title center" id="exampleModalLabel">
                Modificar datos del usuario : {newId}
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
              <form onSubmit={updateForm}>
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
                      value={Nombre}
                      onChange={(e) => setNombre(e.target.value)}
                      className="form-control"
                      type="text"
                      aria-describedby="basic-addon1"
                      name="Nombre"
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
                      value={Ap_Paterno || ""}
                      onChange={(e) => setAp_Paterno(e.target.value)}
                      type="text"
                      aria-describedby="basic-addon1"
                      name="Ap_Paterno"
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
                      value={Ap_Materno || ""}
                      onChange={(e) => setAp_Materno(e.target.value)}
                      type="text"
                      aria-describedby="basic-addon1"
                      className="form-control"
                      name="Ap_Materno"
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
                        value={Edad || ""}
                        onChange={(e) => setEdad(e.target.value)}
                        type="text"
                        className="form-control"
                        aria-describedby="basic-addon1"
                        name="Edad"
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
                        value={Sexo || ""}
                        onChange={(e) => setSexo(e.target.value)}
                        name="Sexo"
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
                      value={Calle || ""}
                      onChange={(e) => setCalle(e.target.value)}
                      type="text"
                      aria-describedby="basic-addon1"
                      className="form-control"
                      name="Calle"
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
                        value={N_Int || ""}
                        onChange={(e) => setN_Int(e.target.value)}
                        type="text"
                        className="form-control"
                        aria-describedby="basic-addon1"
                        name="N_Int"
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
                        value={N_Ext || ""}
                        onChange={(e) => setN_Ext(e.target.value)}
                        type="text"
                        className="form-control"
                        aria-describedby="basic-addon1"
                        name="N_Ext"
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
                      value={Colonia || ""}
                      onChange={(e) => setColonia(e.target.value)}
                      type="text"
                      aria-describedby="basic-addon1"
                      className="form-control"
                      name="Colonia"
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
                        value={Municipio || ""}
                        onChange={(e) => setMunicipio(e.target.value)}
                        type="text"
                        className="form-control"
                        aria-describedby="basic-addon1"
                        name="Municipio"
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
                        value={Estado || ""}
                        onChange={(e) => setEstado(e.target.value)}
                        type="text"
                        className="form-control"
                        aria-describedby="basic-addon1"
                        name="Estado"
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
                          checked={I_pers.includes("Musica")}
                          onChange={Check_Pers}
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
                          checked={I_pers.includes("Cine")}
                          onChange={Check_Pers}
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
                          checked={I_pers.includes("Modelado")}
                          onChange={Check_Pers}
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
                          checked={I_pers.includes("Compras")}
                          onChange={Check_Pers}
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
                          checked={D_Pref.includes("Desierto")}
                          onChange={CheckboxPref}
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
                          checked={D_Pref.includes("Playa")}
                          onChange={CheckboxPref}
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
                          checked={D_Pref.includes("Ciudad")}
                          onChange={CheckboxPref}
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
                          checked={D_Pref.includes("Montaña")}
                          onChange={CheckboxPref}
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
                        value={T_Hab || ""}
                        onChange={(e) => setT_Hab(e.target.value)}
                        className="form-select"
                        id="inputGroupSelect01"
                        name="T_Hab"
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
                        value={I_Mens || ""}
                        onChange={(e) => setI_Mens(e.target.value)}
                        className="form-select"
                        name="I_Mens"
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
                        value={V_año || ""}
                        onChange={(e) => setV_año(e.target.value)}
                        className="form-select"
                        id="inputGroupSelect01"
                        name="V_año"
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
                        value={Libros || ""}
                        onChange={(e) => setLibros(e.target.value)}
                        className="form-select"
                        id="inputGroupSelect01"
                        name="Libros"
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
        {/*Fin de modal para editar datos del usuario*/}
      </div>
    </div>
  );
};

export default CompEditBlog;
