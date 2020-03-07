import React from 'react'
import MaterialTable from 'material-table';
import { makeStyles } from '@material-ui/core/styles';
import { Button ,ButtonGroup} from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import DeleteIcon from '@material-ui/icons/Delete';
const useStyles = makeStyles({
    table: {
        minWidth: 500,
        maxWidth: 650,
    },
    flex:{
        display:"flex",
        justifyContent:"center"
    }
});
export default function ShowItems(props) {
    const classes = useStyles();
    let { items, deleteItem } = props
    return (
        <>
            <div>
                
                <ButtonGroup size="large" color="primary" aria-label="large outlined primary button group">
                    <Button onClick={e=>{props.sortName("NAME")}}>Name</Button>
                    <Button onClick={e=>{props.sortName("QTY")}}>Quantity</Button>
                    <Button onClick={e=>{props.sortName("TIME")}}>Time</Button>
                    <Button onClick={e=>{props.sortName("REV")}}>Rev</Button>
                </ButtonGroup>
            </div>




            <TableContainer component={Paper} className={classes.flex}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">NAME</TableCell>
                            <TableCell align="center">QUANTITY</TableCell>
                            <TableCell align="center">ACTION</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {items.map(row => (
                            <TableRow key={row.name}>
                                <TableCell align="center" component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="center">{row.qty}</TableCell>
                                <TableCell align="center">
                                    <DeleteIcon onClick={e => deleteItem(row.name)} />
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}
