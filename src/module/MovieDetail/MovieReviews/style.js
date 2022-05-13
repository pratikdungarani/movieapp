import makeStyles from "@mui/styles/makeStyles";
import theme from "assets/styles/theme";

const useStyles = makeStyles((theme) => ({ 
    overlay: {
        background:"rgba(0,0,0,0.7)",
        padding: "100px 0",
    },
    nextprev:{
        width:"50px", 
        height:"50px",
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor:"pointer",
        margin:"0 5px",
        transition:"0.3s ease",
        position:"relative",
    },
    prev:{
        "&:hover": {
            transform:"translateX(-10px)",
            background:theme.palette.neutral.main
        }
    },
    next:{
        "&:hover": {
            transform:"translateX(10px)",
            background:theme.palette.neutral.main
        }
    }
}))

export default useStyles;