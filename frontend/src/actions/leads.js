import axios from "axios";


import {GET_LEADS} from "./types";

//get leads methods


export const getLeads = () => dispatch => {

    axios.get("/api/lead/").then(res => {
        dispatch({
            type : GET_LEADS,
            payload : res.data
        });
    })
    .catch(err => console.log(err));

};