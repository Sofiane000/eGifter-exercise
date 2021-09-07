import axios from "axios";
import apiDomain from './api';
import Constants from "../utils/constants";


export const createGroupGift = data => {

    //API CALL

    return axios.post(apiDomain + Constants.GROUP_GIFT.API, data, {
      headers: {
        "content-type": "application/json"
      }
    });

   //return ({data:{result:['success']}})


  };