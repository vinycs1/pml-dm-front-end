import React, {useEffect, useState} from "react";
import axios from "axios";

export const CavaleirosDoZodiacoSprint = () => {
    const [cavaleiro, setCavaleiro] = useState();

    useEffect(() => {
        axios.get(`https://saint-seiya-api.herokuapp.com/api/character/${370}`)
            .then(res => {
                setCavaleiro(res.data);
            });
    }, []);

    return (

        <img
            src={`https://diegochagas.com/saint-seiya-api/${cavaleiro?.image}`}
            height="400px"
            width="400px"
            alt={cavaleiro?.name}
        />
    );
};
