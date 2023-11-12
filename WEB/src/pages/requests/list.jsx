import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function List() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get("http://l127.0.0.1:3000/v1/requests")
            .then((res) => res.json())
            .then((requestData) => {
                setData(requestData);
            });
    }, []);

    return (
        <section>
            <h1>Este es el listado de las solicitudes </h1>
            <section className="row">
                {data.map((request) => (
                    <div className="col-3 p-5" key={request.id}>
                        <h3>
                            <Link to={`/requests/${request.id}`}>{request.requestType}</Link>
                        </h3>
                    </div>
                ))}
            </section>
        </section>
    );
}

export default List;