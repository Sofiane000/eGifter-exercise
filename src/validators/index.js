import * as yup from 'yup';


const group_gift = yup.object().shape({
    giftName: yup.string().required("Please enter a group gift name!"),
    name: yup.string().required("Please enter your name!"),
    email: yup.string().email('Please enter a valid email!').max(255).required('Email is required')
});

const validators = {
    groupGift: group_gift
};

export default validators;