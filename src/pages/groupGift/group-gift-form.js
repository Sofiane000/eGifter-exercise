import { React, useState } from 'react';
import Paper from '@material-ui/core/Paper';
import { useHistory, withRouter, useLocation } from 'react-router-dom';
import { Typography } from '@material-ui/core';
import Controls from '../../components/forms';
import { useStartGroupGiftStyles } from '../../styles';
import ImagePicker from "../../components/imagePicker/image-picker";
import NumberPicker from '../../components/numberPicker/number-picker';
import HeaderSection from "../../components/sections/header-section";
import Constants from '../../utils/constants';
import validators from '../../validators';
import { isEmptyObj } from '../../utils/common';
import { useFormik } from 'formik';

function GroupGiftForm() {
    const classes = useStartGroupGiftStyles();

    const [headerData, setHeaderData] = useState({ status: "", text: "" });
    const [disableBtn, setDisableBtn] = useState(false);
    const [submitting, setSubmitting] = useState(false);
    const history = useHistory();
    const location = useLocation();
    const editData = location.state?.editData;

    const handleStringFormat = (e) => {
        debugger;
        let values = formik.values;
        values[e.target.name] = e.target.value.trim();
        formik.setValues({
            ...values,
        });
        formik.handleBlur(e);
    };

    function handleImageClick(img) {
        let values = formik.values;
        values['image'] = img;
        formik.setValues({
            ...values,
        });
    }

    function handlePrice(value) {
        const min = Constants.GROUP_GIFT.NUMBER_WIDGET.MIN_PRICE;
        const max = Constants.GROUP_GIFT.NUMBER_WIDGET.MAX_PRICE;
        if (Number(value) >= Number(min) && Number(value) <= Number(max)) {
            let values = formik.values;
            values['giftPrice'] = value;
            formik.setValues({
                ...values,
            });
        }
    }

    function validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    const formik = useFormik({
        initialValues: {
            ...Constants.GROUP_GIFT.INITIAL_VALUES,
            ...editData
        },
        validationSchema: validators.groupGift,

        onSubmit: () => {
            setDisableBtn(true);
            setHeaderData({
                status: "info",
                text: "Submitting..."
            });
            handleNext().catch(err => {
                setDisableBtn(false);
                setHeaderData({
                    status: "warning",
                    text: "Something went wrong!"
                });
            });
        }
    });

    function handleNext() {
        setSubmitting(true);
        debugger;
        console.log(formik.errors.email);
        if (!isEmptyObj(formik.errors) && headerData.status !== "error") {
            setHeaderData({
                status: "error",
                text: "Please fill all the required(*) form fields before submitting."
            });
        }
        else if (headerData.status === "error" && isEmptyObj(formik.errors)) {
            setHeaderData({
                status: "",
                text: ""
            });
        }
        else {
            history.push({
                pathname: "/groupGift/submitGroupGift",
                state: { data: formik.values }
            }
            );
        }
    }
    if (!isEmptyObj(formik.errors) && submitting && headerData.status !== "error") {
        setHeaderData({
            status: "error",
            text: "Please fill all the required(*) form fields before submitting."
        });
    } else if (headerData.status === "error" && isEmptyObj(formik.errors)) {
        setHeaderData({
            status: "",
            text: ""
        });
    }




    return (
        <div className={classes.outerContainer}>

            <Paper elevation={1} square>

                <div className={classes.container}>
                    <Typography className={classes.title} variant="h4" gutterBottom>
                        Start a Group Gift
                    </Typography>
                    <div className={classes.formContainer}>

                        <div className={classes.leftContainer}>
                            <ImagePicker
                                imageList={Constants.GROUP_GIFT.IMAGE_WIDGET.IMAGE_LIST}
                                selectedImage={formik.values.image}
                                onImageChange={handleImageClick}
                            />
                        </div>

                        <div className={classes.leftContainer}>

                            <NumberPicker price={formik.values.giftPrice} priceList={Constants.GROUP_GIFT.NUMBER_WIDGET.PRICE_LIST}
                                handlePrice={handlePrice} />

                            <HeaderSection data={headerData} />
                            <form>
                                <div className={classes.inputContainer}>
                                    <Controls.Input
                                        {...formik.getFieldProps("giftName")}
                                        id="giftName-id"
                                        name="giftName"
                                        label="Group Gift Name*"
                                        value={formik.values.giftName}
                                        error={formik.touched.giftName ? formik.errors.giftName : ""}
                                        onBlur={handleStringFormat}
                                    />

                                </div>

                                <div className={classes.inputContainer}>
                                    <Controls.Input
                                        {...formik.getFieldProps("name")}
                                        id="name-id"
                                        name="name"
                                        label="Your Name*"
                                        value={formik.values.name}
                                        error={formik.touched.name ? formik.errors.name : ""}
                                        onBlur={handleStringFormat}
                                    />
                                </div>

                                <div className={classes.inputContainer}>
                                    <Controls.Input
                                        {...formik.getFieldProps("email")}
                                        id="email-id"
                                        name="email"
                                        label="Your Email*"
                                        value={formik.values.email}
                                        error={formik.touched.email ? formik.errors.email : ""}
                                        onBlur={handleStringFormat}
                                    />
                                </div>
                            </form>

                            <div className={classes.inputContainer}>
                                <button className={classes.nextButton} onClick={handleNext}>Next</button>
                            </div>
                        </div>
                    </div>

                </div>

            </Paper>
        </div>
    );
}

export default withRouter(GroupGiftForm);