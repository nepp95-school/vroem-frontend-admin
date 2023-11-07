import React from "react";
import axios from 'axios';

export default function TestComponent()
{
    const [data, setData] = React.useState([]);

    React.useEffect(() => {
        getData();
    }, []);

    function getData()
    {
        axios.get(process.env.REACT_APP_BASE_URL + "Main/GetData").then(function(response)
        {
            setData(response.data);
        });
    }

    return (
        <div>
            <h4>{data.ID}</h4>
            <h4>{data.Naam}</h4>
            <h4>{data.Leeftijd}</h4>
        </div>
    )
}