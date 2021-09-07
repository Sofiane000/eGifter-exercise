import React from 'react';
import { TextField, Typography } from '@material-ui/core';
import { useNumberPickerStyles } from "../../styles";


function NumberPicker({ price, priceList, handlePrice }) {

    const classes = useNumberPickerStyles();


    return (
        <div className={classes.numberPickerContainer}>
            <Typography variant="h6" align="center" gutterBottom>
                Enter your gift's goal
            </Typography>
            <div className={classes.root}>
                <button className={classes.numberButton} onClick={() => handlePrice(String(Number(price) - 1))}>-</button>
                <div className={classes.numberbutton}>
                    <TextField className={classes.priceInput} type="number" variant="outlined" value={parseInt(price)}
                        inputProps={{ style: { textAlign: "center" } }} onChange={(e) => { handlePrice(Number(e.target.value)); }}
                    >

                    </TextField>
                </div>
                <button className={classes.numberButton} onClick={() => handlePrice(String(Number(price) + 1))}>+</button>


            </div>
            <Typography className={classes.range} align="center">
                ($25 to $10,000)
            </Typography>

            <div className={classes.priceButtonContainer}>
                {priceList.map((value, i) => (
                    <button key={value} className={value == price ? classes.priceButtonSelected : classes.priceButton} onClick={() => handlePrice(value)}>${value}</button>
                ))}
            </div>

        </div>
    );
}

export default NumberPicker;
