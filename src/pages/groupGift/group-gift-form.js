import { Typography } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import { useFormik } from 'formik';
import createHistory from 'history/createBrowserHistory';
import { React, useEffect, useState } from 'react';
import { useHistory, useLocation, withRouter } from 'react-router-dom';
import Controls from '../../components/forms';
import ImagePicker from "../../components/imagePicker/image-picker";
import NumberPicker from '../../components/numberPicker/number-picker';
import HeaderSection from "../../components/sections/header-section";
import { useStartGroupGiftStyles } from '../../styles';
import { isEmptyObj } from '../../utils/common';
import Constants from '../../utils/constants';
import validators from '../../validators';

function GroupGiftForm() {
    const classes = useStartGroupGiftStyles();

    const [headerData, setHeaderData] = useState({ status: "", text: "" });
    const [disableBtn, setDisableBtn] = useState(false);
    const [submitting, setSubmitting] = useState(false);
    const [imgChanged, setImgChanged] = useState(false);
    const [priceChanged, setPriceChanged] = useState(false);

    const history = useHistory();
    const location = useLocation();

    const handleStringFormat = (e) => {
        let values = formik.values;
        values[e.target.name] = e.target.value.trim();
        formik.setValues({
            ...values,
        });
        formik.handleBlur(e);
    };

    function handleImageClick(img) {
        setImgChanged(true);
        let values = formik.values;
        values['image'] = img;
        formik.setValues({
            ...values,
        });
    }

    function handlePrice(value) {
        const min = Constants.GROUP_GIFT.NUMBER_WIDGET.MIN_PRICE;
        const max = Constants.GROUP_GIFT.NUMBER_WIDGET.MAX_PRICE;
        setPriceChanged(true);
        if (Number(value) >= Number(min) && Number(value) <= Number(max)) {
            let values = formik.values;
            values['giftPrice'] = value;
            formik.setValues({
                ...values,
            });
        }
    }

    useEffect(() => {
        const history = createHistory();
        if (history.location.state && history.location.state.editData) {
            let state = { ...history.location.state };
            delete state.editData;
            history.replace({ ...history.location, state });
        }
    }, []);

    const initialValues = location?.state?.editData ? {
        ...Constants.GROUP_GIFT.INITIAL_VALUES,
        ...location.state.editData
    } : {
        ...Constants.GROUP_GIFT.INITIAL_VALUES,
    };
    const formik = useFormik({
        initialValues,
        validationSchema: validators.groupGift,

        onSubmit: () => {
            setDisableBtn(true);
            setHeaderData({
                status: "info",
                text: "Submitting..."
            });
        }
    });

    function handleNext() {
        setSubmitting(true);
        console.log(formik.errors.email);
        formik.handleSubmit();

        if (!isEmptyObj(formik.errors) && headerData.status !== "error") {
            setHeaderData({
                status: "error",
                text: "Please fill all the required(*) form fields before submitting."
            });
        } else {
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
                                        className={classes.textFieldRoot}
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
                                        className={classes.textFieldRoot}
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
                                        className={classes.textFieldRoot}
                                        value={formik.values.email}
                                        error={formik.touched.email ? formik.errors.email : ""}
                                        onBlur={handleStringFormat}
                                    />
                                </div>
                            </form>

                            <div className={classes.inputContainer}>
                                <button disabled={!formik.dirty && !imgChanged && !priceChanged} className={classes.nextButton}
                                    onClick={handleNext}>Next</button>
                            </div>
                        </div>
                    </div>

                </div>

            </Paper>
        </div>
    );
}

export default withRouter(GroupGiftForm);