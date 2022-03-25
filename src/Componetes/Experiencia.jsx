import * as React from "react";
import Button from "@mui/material/Button";
import PostAddIcon from "@mui/icons-material/PostAdd";
import StorageIcon from "@mui/icons-material/Storage";
import Stack from "@mui/material/Stack";
import Tabla from "./Tabla";
import NuevaExperienciaDialog from "./NuevaExperienciaDialog";

const Experiencia = (props) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  function createData(nro, ocupacion, lugar, start, end) {
    return { ocupacion, lugar, start, end };
  }
  const rows = [
    createData("Jefe de TI", "Empresa 1", "10/01/2022", "10/03/2022"),
    createData("Asistente de TI", "Empresa 2", "20/03/2021", "10/09/2021"),
    createData("Analista Jr", "Empresa 3", "07/04/2021", "10/12/2021"),
    createData("Frotent Developer Sr", "Empresa 4", "11/05/2020", "10/12/2020"),
    createData("Desarrollador Web Jr", "Empresa 5", "07/07/2018", "15/06/2019"),
  ];

  const [filas, setFilas] = React.useState(rows);
  return (
    <section>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h2>Experiencia Laboral</h2>
        <div style={{ margin: "auto 0" }}>
          <Stack direction="row" spacing={2}>
            <Button variant="contained" startIcon={<StorageIcon />}>
              Carga Masiva
            </Button>
            <Button
              variant="contained"
              startIcon={<PostAddIcon />}
              onClick={handleClickOpen}
            >
              Agregar
            </Button>
            <NuevaExperienciaDialog
              abrir={open}
              onClose={() => {
                setOpen(false);
              }}
              filas={filas}
              add={(nueva) => {
                setFilas([...filas, nueva]);
                console.log(nueva);
              }}
            />
          </Stack>
        </div>
      </div>
      <div>
        <Tabla nuevaExperiencia={filas} />
      </div>
    </section>
  );
};
export default Experiencia;
