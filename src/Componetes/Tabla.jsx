import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { blue, red } from "@mui/material/colors";

const Tabla = ({ nuevaExperiencia }) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>N°</TableCell>
            <TableCell align="center">Ocupación</TableCell>
            <TableCell align="center">Lugar/Empresa</TableCell>
            <TableCell align="center">Fecha Inicio</TableCell>
            <TableCell align="center">Fecha Fin</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {nuevaExperiencia.map((row, index) => (
            <TableRow
              key={row.nro}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {index}
              </TableCell>
              <TableCell align="center">{row.ocupacion}</TableCell>
              <TableCell align="center">{row.lugar}</TableCell>
              <TableCell align="center">{row.start}</TableCell>
              <TableCell align="center">{row.end}</TableCell>
              <TableCell align="center">
                <EditIcon sx={{ color: blue[500] }} />
              </TableCell>
              <TableCell align="center">
                <DeleteIcon sx={{ color: red[600] }} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default Tabla;
