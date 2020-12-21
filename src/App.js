import React, { useRef } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactHTMLTableToExcel from "react-html-table-to-excel";
import Pdf from "react-to-pdf";
import { useReactToPrint } from "react-to-print";
import {Button} from 'reactstrap';

const ref = React.createRef();

function App() {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <>
      <div align="center">
        <Pdf targetRef={ref} filename="Usuarios.pdf">
          {({ toPdf }) => (
            <button className="btn btn-success" onClick={toPdf}>
              Generate Pdf
            </button>
          )}
        </Pdf>
      </div>

      <br />

      <div align="center">
        <ReactHTMLTableToExcel
          id="buttonExportExcel"
          className="btn btn-success"
          table="tableUsuarios"
          filename="Usuarios"
          sheet="pagina 1"
          buttonText="Exportar a Ecxel"
        />
      </div>
      <br />
      <div align="center">
        <button className="btn btn-success" onClick={handlePrint}>
          Imprimir
        </button>
      </div>

      <br />

      <div className="table-responsive" ref={componentRef}>
        <table id="tableUsuarios" className="table table-bordered" ref={ref}>
          <thead className="table-dark">
            <tr>
              <th>Folio</th>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Direccion</th>
              <th>Correo</th>
              <th>Telefono</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-primary">
              <td className="bg-secondary">1</td>
              <td>Jaquin</td>
              <td>Chable</td>
              <td>CDMX</td>
              <td>correo@gmail.com</td>
              <td>1234567</td>
            </tr>
            <tr className="bg-info">
              <td className="bg-secondary">2</td>
              <td>Alberto</td>
              <td>Rodriguez</td>
              <td>Guadalajara</td>
              <td>correo@gmail.com</td>
              <td>1234567</td>
            </tr>
            <tr className="bg-danger">
              <td className="bg-secondary">3</td>
              <td>Juan</td>
              <td>Cha</td>
              <td>Merida</td>
              <td>correo@gmail.com</td>
              <td>1234567</td>
            </tr>
            <tr className="bg-success">
              <td className="bg-secondary">4</td>
              <td>ALan</td>
              <td>Cle</td>
              <td>CDMX</td>
              <td>correo@gmail.com</td>
              <td>1234567</td>
            </tr>
            <tr className="bg-primary">
              <td className="bg-secondary">1</td>
              <td>Jaquin</td>
              <td>Chable</td>
              <td>CDMX</td>
              <td>correo@gmail.com</td>
              <td>1234567</td>
            </tr>
            <tr className="bg-info">
              <td className="bg-secondary">2</td>
              <td>Alberto</td>
              <td>Rodriguez</td>
              <td>Guadalajara</td>
              <td>correo@gmail.com</td>
              <td>1234567</td>
            </tr>
            <tr className="bg-danger">
              <td className="bg-secondary">3</td>
              <td>Juan</td>
              <td>Cha</td>
              <td>Merida</td>
              <td>correo@gmail.com</td>
              <td>1234567</td>
            </tr>
            <tr className="bg-success">
              <td className="bg-secondary">4</td>
              <td>ALan</td>
              <td>Cle</td>
              <td>CDMX</td>
              <td>correo@gmail.com</td>
              <td>1234567</td>
            </tr>
            <tr className="bg-primary">
              <td className="bg-secondary">1</td>
              <td>Jaquin</td>
              <td>Chable</td>
              <td>CDMX</td>
              <td>correo@gmail.com</td>
              <td>1234567</td>
            </tr>
            <tr className="bg-info">
              <td className="bg-secondary">2</td>
              <td>Alberto</td>
              <td>Rodriguez</td>
              <td>Guadalajara</td>
              <td>correo@gmail.com</td>
              <td>1234567</td>
            </tr>
            <tr className="bg-danger">
              <td className="bg-secondary">3</td>
              <td>Juan</td>
              <td>Cha</td>
              <td>Merida</td>
              <td>correo@gmail.com</td>
              <td>1234567</td>
            </tr>
            <tr className="bg-success">
              <td className="bg-secondary">4</td>
              <td>ALan</td>
              <td>Cle</td>
              <td>CDMX</td>
              <td>correo@gmail.com</td>
              <td>1234567</td>
            </tr>
            <tr className="bg-primary">
              <td className="bg-secondary">1</td>
              <td>Jaquin</td>
              <td>Chable</td>
              <td>CDMX</td>
              <td>correo@gmail.com</td>
              <td>1234567</td>
            </tr>
            <tr className="bg-info">
              <td className="bg-secondary">2</td>
              <td>Alberto</td>
              <td>Rodriguez</td>
              <td>Guadalajara</td>
              <td>correo@gmail.com</td>
              <td>1234567</td>
            </tr>
            <tr className="bg-danger">
              <td className="bg-secondary">3</td>
              <td>Juan</td>
              <td>Cha</td>
              <td>Merida</td>
              <td>correo@gmail.com</td>
              <td>1234567</td>
            </tr>
            <tr className="bg-success">
              <td className="bg-secondary">4</td>
              <td>ALan</td>
              <td>Cle</td>
              <td>CDMX</td>
              <td>correo@gmail.com</td>
              <td>1234567</td>
            </tr>
          </tbody>
        </table>
      </div>


      <Button color="success">Exportar</Button>
    </>
  );
}

export default App;
