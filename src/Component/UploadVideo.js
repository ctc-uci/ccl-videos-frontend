import React, { useEffect, useState } from "react";
import axios from "axios";
import config from '../config';


const UploadVideo = () => {
    const getURL = async () => {
        const res = await axios.get(`${config.apiURL}/upload`, { withCredentials: true });
        console.log(res.data);
    };

    useEffect(() => {
        getURL();
    }, []);
    return (
        <div>
            Hello World!
        </div>
    );
};

export default UploadVideo;
