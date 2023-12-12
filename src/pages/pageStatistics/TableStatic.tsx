import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { inherits } from 'util';
import cls from './Table.module.css'

function createData(
  stock: string,
  last: number,
  chg: number,
  chgP: number,
) {
  return { stock, last, chg, chgP };
}

const rows = [
  createData('Gold', 1985.80, +12.30, +0.62),
  createData('S&P500', 3916.04, -43.64, -1.10),
  createData('APPL', 155.00, -0.85, -0.55),
  createData('VIX', 26.74, +3.75, +16.31),
  createData('TSLA', 180.13, -4.00, -2.17),
  createData('MKR', 191.13, -9.00, -10.17),
  createData('RDD', 980.13, +4.00, +2.17)
];

export default function TableStatic() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ width: '100%' }} aria-label="simple table">
        <TableHead style={{backgroundColor: ' rgba(12, 10, 100, 0.89) ', color: 'white',}}>
          <TableRow >
            <TableCell style={{color: 'white', textAlign: 'center'}}>Stocks</TableCell>
            <TableCell style={{color: 'white', textAlign: 'center'}}>Last</TableCell>
            <TableCell style={{color: 'white', textAlign: 'center'}}>Chg</TableCell>
            <TableCell style={{color: 'white', textAlign: 'center'}}>Chg%</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.stock}
              sx={{ '&:last-child td, &:last-child th': { border: 0, backgroundColor:'#AAA8D4'} }}
            >
              <TableCell style= {{backgroundColor:'#AAA8D4'}} component="th" scope="row">
                {row.stock}
              </TableCell>
              <TableCell style= {{backgroundColor:'#AAA8D4'}} align="left" >{row.last}</TableCell>
              <TableCell style= {{backgroundColor:'#AAA8D4'}} align="left">{row.chg}</TableCell>
              <TableCell style= {{backgroundColor:'#AAA8D4'}} align="left">{row.chgP}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}