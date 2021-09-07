
import { createTheme, makeStyles } from "@material-ui/core/styles";
import { findByLabelText } from "@testing-library/dom";

export const theme = createTheme({
  palette: {
    background: {
      default: "#eaeaea",
    },
    primary: {

      main: "#072C4A",

    },
  },

});

export const useFormEleStyles = makeStyles((theme) => ({
  root: {
    padding: "12px 10px !important",
    "&.MuiSelect-outlined": {
      paddingRight: "32px !important",
    },
  },
  labelRoot: {
    paddingBottom: "5px !important"

  },
  selectRoot: {
    padding: "12px 10px !important",
  },
  labelFocused: {
  },
  container: {
    "&>div": {
      padding: 0,
    },
  },
}));

export const useSplashStyles = makeStyles((theme) => ({
  root: {


  },
}));

export const useMainStyles = makeStyles((theme) => ({

  main: {

    paddingTop: "50px",
    height: "110vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",


  }

}));

export const useHeaderStyles = makeStyles((theme) => ({
  root: {

    width: "60%",
    paddingBottom: "5px",
    height: "fit-content",
    [theme.breakpoints.down('md')]: {
      width: "80%"
    }

  },
}));

export const usePreviewGroupGiftStyles = makeStyles((theme) => ({

  outerContainer: {
    width: "60%",
    [theme.breakpoints.down('md')]: {
      width: "80%"
    }

  },
  container: {
    padding: "25px",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
  },
  card: {
    minWidth: "60%",
    marginBottom: "10px"
  },
  innerCard: {
    marginTop: "20px",
    maxWidth: "99%",
    textAlign: "center"
  },
  pos: {
    marginBottom: "20px !important"
  },
  price: {
    color: "#072c4a",
    marginBottom: "18px !important"
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "column",
    minWidth: "60%",
    marginTop: "15px"
  },
  backButton: {
    backgroundColor: "white",
    color: "#072c4a",
    border: "1px solid #072C4a",
    paddingTop: "6px",
    paddingBottom: "6px",
    width: "100%",
    marginBottom: "15px"

  },
  submitButton: {
    backgroundColor: "#072C4a",
    color: "white",
    border: "1px solid lightgrey",
    paddingTop: "6px",
    paddingBottom: "6px",
    width: "100%"
  },
  successContainer: {
    marginTop: "20px"
  },
  successText: {
    marginTop: "18px"
  }

}));


export const useStartGroupGiftStyles = makeStyles((theme) => ({
  textFieldRoot: {
    '& .MuiOutlinedInput-root': {
      '&.Mui-focused fieldset': {
        borderColor: "#072C4a"
      },
    },

  },
  outerContainer: {
    width: "60%",
    [theme.breakpoints.down('md')]: {
      width: "80%"
    }

  },

  container: {
    padding: "25px",
  },
  title: {
    [theme.breakpoints.down('sm')]: {

      textAlign: "center"
    }

  },
  formContainer: {
    display: "flex",
    [theme.breakpoints.down('sm')]: {
      flexDirection: "column"
    }
  },
  leftContainer: {
    width: "50%",
    [theme.breakpoints.down('sm')]: {
      width: "100%"
    }
  },
  inputContainer: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    marginLeft: "10px",
    marginTop: "25px"
  },
  inputLabel: {
    paddingBottom: "10px !important"
  },
  nextButton: {
    backgroundColor: "#072c4a",
    color: "white",
    border: "1px solid lightgrey",
    paddingTop: "8px",
    paddingBottom: "8px",
  },


}));

export const useHeaderSectionStyles = makeStyles((theme) => ({

  headerSection: {
    marginLeft: "10px",
    marginTop: "25px"
  }
}));

export const useImagePickerStyles = makeStyles((theme) => ({

  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",

  },
  img: {
    width: "203px",
    height: "125px",
    objectFit: "cover",

  },
  imageContainerSelected: {
    position: "relative",
    border: "3px solid #072C4A",
    marginTop: "8px",
    marginBottom: "8px",
    padding: "4px"

  },
  imageContainer: {
    marginTop: "8px",
    marginBottom: "8px",
    padding: "4px"
  },
  tick: {
    display: "none !important"
  },
  tickSelected: {
    color: "#072C4A",
    position: "absolute",
    top: 0,
    right: 0,
  }

}));



export const useNumberPickerStyles = makeStyles((theme) => ({
  numberPickerContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",


  },
  root: {
    display: "flex",
    justifyContent: "center",


  },
  priceInput: {
    width: "250px",
    [theme.breakpoints.down('sm')]: {
      width: "150px"
    }

  },
  priceField: {
    textAlign: "center"
  },
  numberbutton: {
    marginLeft: "15px",
    marginRight: "15px",


  },
  numberButton: {
    width: "12%",
    backgroundColor: "white",
    border: "1px solid lightgrey",
    fontSize: "24px",
    "&:hover": {
      backgroundColor: "#072c4a",
      color: "white",
    }
  },
  number: {
    fontSize: "2rem"
  },
  range: {
    marginTop: "20px !important",
    color: "grey"
  },
  priceButtonContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    width: "75%",
    marginLeft: "auto",
    marginRight: "auto",
    paddingTop: "10px"
  },
  priceButton: {
    display: "flex",
    flexBasis: "30%",
    margin: "5px",
    justifyContent: "center",
    paddingTop: "8px",
    paddingBottom: "8px",
    backgroundColor: "white",
    border: "1px solid lightgrey",
    "&:hover": {
      backgroundColor: "#072c4a",
      color: "white",
    }
  },
  priceButtonSelected: {
    backgroundColor: "#072c4a",
    display: "flex",
    flexBasis: "30%",
    margin: "5px",
    justifyContent: "center",
    paddingTop: "8px",
    paddingBottom: "8px",
    color: "white",
    border: "1px solid lightgrey"

  }

}));



