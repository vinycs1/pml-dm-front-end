import React, {useEffect, useState} from "react";
import axios from "axios";

export const CavaleirosDoZodiacoSprint = () => {
    const [cavaleiro, setCavaleiro] = useState();

    useEffect(() => {
        axios.get(`https://saint-seiya-api.herokuapp.com/api/character/${15}`)
            .then(res => {
                setCavaleiro(res.data);
            });
    }, []);

    return (

        <img
            src={`https://diegochagas.com/saint-seiya-api/${cavaleiro?.image}`}
            height="500px"
            width="500px"
            alt={cavaleiro?.name}
        />
    );
};
