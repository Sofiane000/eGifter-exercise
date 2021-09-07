import React from 'react';
import { useHeaderStyles } from '../../styles';
import Constants from "../../utils/constants";
function Header() {

    const classes = useHeaderStyles();

    return (
        <div className={classes.root}>

            <img src={Constants.GROUP_GIFT.LOGO} height="70px" width="150px" alt="logo" />

        </div>
    );
}

export default Header;
