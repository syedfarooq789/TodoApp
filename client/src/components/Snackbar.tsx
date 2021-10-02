import { Fragment } from "react";
import { Snackbar } from '@mui/material';
import { Button, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close'
import { snackBarProps } from '../interfaces/snackbar.props.interface'
const Todos = ({ openSnackBar, handleClose }: snackBarProps) => {

    const action = (
        <Fragment>
            <Button color="secondary" size="small" onClick={() => handleClose}>
                UNDO
            </Button>
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
            ></IconButton>
            <CloseIcon fontSize="small" onClick={handleClose} />
        </Fragment>
    );



    return (
        <Snackbar
            open={openSnackBar}
            autoHideDuration={6000}
            onClose={handleClose}
            message="Error from the server"
            action={action}
        />
    )
}

export default Todos;