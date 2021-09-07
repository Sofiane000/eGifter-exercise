import { Paper, Typography } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { withStyles } from "@material-ui/core/styles";
import { React, useState } from 'react';
import { useHistory, useLocation, withRouter } from 'react-router-dom';
import { createGroupGift } from "../../services/group-gift";
import { usePreviewGroupGiftStyles } from "../../styles";

function PreviewGroupGift() {
    const classes = usePreviewGroupGiftStyles();
    const location = useLocation();
    const data = location.state?.data;
    const [resultData, setResultData] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const history = useHistory();
    const GreenTextTypography = withStyles({
        root: {
            color: "#5FE156"
        }
    })(Typography);

    function handleBack() {
        history.push({
            pathname: "/groupGift/startGroupGift",
            state: { editData: location.state?.data }
        }
        );
    }

    function handleSubmit() {
        let payload = { ...data, source: "ALIAS" };
        createGroupGift(payload).then(res => {
            console.log(res);
            if (res?.data?.source) {
                setIsSubmitted(true);
                setResultData(res.data.result);
            }
        });

    }

    return (

        <div className={classes.outerContainer}>
            <Paper elevation={1} square>

                <div className={classes.container}>
                    <Card className={classes.card}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                image={data?.image}

                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h4">
                                    {data?.giftName}
                                </Typography>
                                <Typography gutterBottom component="span" variant="h6" color="textSecondary" >
                                    From: <Typography component="h4" color="textPrimary" variant="h6" display="inline">{data?.name}</Typography>
                                </Typography>
                                <Card className={classes.innerCard}>
                                    <CardContent>
                                        <Typography className={classes.pos} variant="h6" color="textSecondary">
                                            Group Gift Goal
                                        </Typography>
                                        <Typography className={classes.price} variant="h5" component="h2">
                                            ${data?.giftPrice}
                                        </Typography>

                                    </CardContent>

                                </Card>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                    {!isSubmitted ?

                        <div className={classes.buttonContainer}>
                            <button className={classes.backButton} onClick={handleBack}>Back</button>
                            <button className={classes.submitButton} onClick={handleSubmit} >Launch Group Gift</button>
                        </div>



                        :

                        <div className={classes.successContainer}>
                            <GreenTextTypography variant="h4" component="h4" align="center">Success!</GreenTextTypography>
                            <Typography className={classes.successText} variant="h6" color="textSecondary">Your Group Gift has successfully launched.</Typography>
                        </div>

                    }


                </div>


            </Paper>



        </div>
    );
}

export default withRouter(PreviewGroupGift);
