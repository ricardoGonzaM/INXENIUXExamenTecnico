import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import FormModal from "./formModal.js";
import CompEditBlog from "./EditBlog.js";
import swal from "sweetalert";
import DataTable from "datatables.net-dt";

const URI = "http://localhost:8000/blogs/gene";

const CompShowBlogs = () => {
  let table = new DataTable("#myTable");

  const [blogs, setBlog] = useState([]);
  useEffect(() => {
    getBlogs();
  }, []);

  //procedimiento para mostrar todos los datos de blogs
  const getBlogs = async () => {
    const res = await axios.get(URI);
    setBlog(res.data);
  };
  //procedimiento para eliminar un dato del blog
  const deleteBlog = async (id) => {
    swal({
      title: "Eliminar",
      text: "Estas seguro que deseas eliminar este usuario?",
      icon: "warning",
      buttons: ["No", "Si"],
    }).then((Respuesta) => {
      if (Respuesta) {
        (async () => {
          await axios.delete(`http://localhost:8000/blogs/gene/${id}`);
          await axios.delete(`http://localhost:8000/blogs/dire/${id}`);
          await axios.delete(`http://localhost:8000/blogs/part/${id}`);
          getBlogs();
        })();
        swal({
          text: "El archivo ha sido eliminado",
          icon: "success",
          timer: 3000,
        });
      }
    });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          {/*tabla de vizualizacion*/}
          <table className="table table-dark mt-4 mb-4">
            <thead className="table-primary">
              <tr>
                <th>Nombre</th>
                <th>Apellido Paterno</th>
                <th>Apellido Materno</th>
                <th>Edad</th>
                <th>Sexo</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {blogs.map((blog) => (
                <tr key={blog.id}>
                  <td>{blog.Nombre}</td>
                  <td>{blog.Ap_Paterno}</td>
                  <td>{blog.Ap_Materno}</td>
                  <td>{blog.Edad}</td>
                  <td>{blog.Sexo}</td>
                  <td className="contenedor col-sm-12 col-xs-12 center">
                      
                      <CompEditBlog id={`#id${blog.id}`}/>
                    <button
                      onClick={() => deleteBlog(blog.id)}
                      className="btn btn-danger buttons"
                    >
                      <i className="fa-solid fa-trash"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <FormModal />
        </div>
      </div>
    </div>
  );
};

export default CompShowBlogs;
