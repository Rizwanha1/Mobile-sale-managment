import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Navigate, useNavigate } from 'react-router-dom';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));
export default function CustomizedTables({ dataSet }) {
    const navigate = useNavigate()
    navigate('/')
    console.log(dataSet);
    if(dataSet === false){
        navigate('/')
    }
    return (
        <TableContainer component={Paper} sx={{ height: '400px', overflow: 'scrollY' }}>
            <Table aria-label="customized table">
                <TableHead >
                    <TableRow>
                        <StyledTableCell>#</StyledTableCell>
                        <StyledTableCell>Sellers</StyledTableCell>
                        <StyledTableCell align="center">Contact</StyledTableCell>
                        <StyledTableCell align="center">Sold</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {dataSet.map((seller, indx) => (
                        seller.isSeller ? (<StyledTableRow key={seller.name} sx={{ '&:hover': { boxShadow: '0px 1px 10px #1E1E1E', transition: '.5s', cursor: 'pointer' } }}>
                            <StyledTableCell>  {indx} </StyledTableCell>
                            <StyledTableCell >{seller.sellerFirstName + " " + seller.sellerLastName}</StyledTableCell>
                            <StyledTableCell align="center">{seller.sellerEmail}</StyledTableCell>
                            <StyledTableCell align="center">{(seller.sellingHistory).length}</StyledTableCell>
                        </StyledTableRow>) : null
                    ))}

                </TableBody>
            </Table>
        </TableContainer>

    );
}
