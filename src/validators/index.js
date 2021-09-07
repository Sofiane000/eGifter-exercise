import * as yup from 'yup';


const group_gift = yup.object().shape({
    giftName: yup.string()
        .required("Please enter a group gift name!")
        .max(50, 'Maximum length must not exceed 50 Characters.'),
    name: yup.string()
        .required("Please enter your name!")
        .max(100, 'Maximum length must not exceed 100 Characters.'),
    email: yup.string().email('Please enter a valid email!').max(255).required('Email is required')
});

const validators = {
    groupGift: group_gift
};

export default validators;