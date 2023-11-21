import React, { useState } from 'react';
import { sendRequest } from '../../services/api-service';
import { Navigate } from "react-router-dom";

function formatDate(dateString) {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

function Create() {
    const [requestType, setRequestType] = useState('');
    const [reason, setReason] = useState('');
    const [periodFrom, setPeriodFrom] = useState('');
    const [periodTo, setPeriodTo] = useState('');
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [tim, setTim] = useState('');
    const [telephone, setTelephone] = useState('');
    const [rank, setRank] = useState('');
    const [email, setEmail] = useState('');
    const [requestSuccess, setRequestSuccess] = useState(false);
    const [requestCancel, setRequestCancel] = useState(false);
    

    const [hoverOrder, setHoverOrder] = useState(false);
    const [hoverCancel, setHoverCancel] = useState(false);

    const handleRequestTypeChange = (e) => {
        setRequestType(e.target.value);
    };
    {/* Estados para las opciones de las Requests Types*/ }
    const [flexibility, setFlexibility] = useState(false);
    const [childUnder3, setChildUnder3] = useState(false);
    const [childUnder8, setChildUnder8] = useState(false);
    const [childUnder12, setChildUnder12] = useState(false);

    const [official1, setOfficial1] = useState(false);
    const [official2, setOfficial2] = useState(false);
    const [official3, setOfficial3] = useState(false);
    const [official4, setOfficial4] = useState(false);

    const [contingency1, setContingency1] = useState(false);
    const [contingency2, setContingency2] = useState(false);
    const [contingency3, setContingency3] = useState(false);
    const [contingency4, setContingency4] = useState(false);

    const handleReasonChange = (e) => {
        setReason(e.target.value);
        console.log('Reason:', e.target.value);
        console.log('State: ', reason);
        
        setFlexibility(false);
        setChildUnder3(false);
        setChildUnder8(false);
        setChildUnder12(false);
        setOfficial1(false);
        setOfficial2(false);
        setOfficial3(false);
        setOfficial4(false);
        setContingency1(false);
        setContingency2(false);
        setContingency3(false);
        setContingency4(false);
    };

    const handlePeriodFromChange = (e) => {
        setPeriodFrom(e.target.value);
        console.log('Period From:', e.target.value);
        console.log('State: ', periodFrom);
    };

    const handlePeriodToChange = (e) => {
        setPeriodTo(e.target.value);
        console.log('Period To:', e.target.value);
        console.log('State: ', periodTo);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formRequest = {
            requestType: requestType,
            name: name,
            surname: surname,
            tim: tim,
            telephone: telephone,
            rank: rank,
            email: email,
            reasons: reason,
            periodFrom: formatDate(periodFrom),
            periodTo: formatDate(periodTo),
        };
        console.log('Solicitud:', formRequest);
        try {
            const response = await sendRequest(formRequest);
            console.log('Solicitud enviada con éxito:', response.data);
            setRequestSuccess(true);
        } catch (error) {
            console.error('Error al enviar la solicitud:', error);
            console.error('Respuesta del servidor:', error.response.data);
            console.error('Error al enviar la solicitud:', error.message || 'Error desconocido');
        }
    };
    const handleCancel = () => {
        setRequestCancel(true);
    };

    if (requestSuccess) {
        return <Navigate to="/home" />;
    }

    if (requestCancel) {
        return <Navigate to="/home" />;
    }

    return (
        <div className="card" style={{ borderColor: "#808000", borderWidth: "5px",marginTop: "150px"}}>
            <div className="card-body" style={{ backgroundColor: "black" }}>
                <h5 className="card-title" style={{ color: "#808000", fontWeight: "bold", fontSize: "30px" }}>Leave Request</h5>
                <form onSubmit={handleSubmit}>
                    {/* Request Type */}
                    <div className="mb-3">
                        <label className="form-label" style={{ color: "#808000", fontWeight: "bold" }}>Request Type</label>
                        <select
                            className="form-select"
                            onChange={handleRequestTypeChange}
                            value={requestType}
                            style={{ borderColor: "#808000", borderWidth: "7px" }}
                            required
                        >
                            <option value="">Nobody</option>
                            <option value="Holidays and Leave">Holidays & Leave</option>
                            <option value="Medical Leave">Medical Leave</option>
                            <option value="Falily Welfare">Falily Welfare</option>
                        </select>
                    </div>

                    {/* Information */}
                    <div className="mb-3">
                        <label className="form-label" style={{ color: "#808000", fontWeight: "bold" }}>Name</label>
                        <input
                            type="text"
                            className="form-control"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="name"
                            style={{ borderColor: "#808000", borderWidth: "3px" }}
                            required
                        />
                        <label className="form-label" style={{ color: "#808000", fontWeight: "bold" }}>Surname</label>
                        <input
                            type="text"
                            className="form-control"
                            value={surname}
                            onChange={(e) => setSurname(e.target.value)}
                            placeholder="surname"
                            style={{ borderColor: "#808000", borderWidth: "3px" }}
                            required

                        />
                        <label className="form-label" style={{ color: "#808000", fontWeight: "bold" }}>TIM</label>
                        <input
                            type="text"
                            className="form-control"
                            value={tim}
                            onChange={(e) => setTim(e.target.value)}
                            placeholder="tim"
                            style={{ borderColor: "#808000", borderWidth: "3px" }}
                            required />
                        <label className="form-label" style={{ color: "#808000", fontWeight: "bold" }}>Telephone Number</label>
                        <input
                            type="text"
                            className="form-control"
                            value={telephone}
                            onChange={(e) => setTelephone(e.target.value)}
                            placeholder="telephone"
                            style={{ borderColor: "#808000", borderWidth: "3px" }}
                            required />
                        <label className="form-label" style={{ color: "#808000", fontWeight: "bold" }}>Rank</label>
                        <select
                            className="form-select"
                            id="validationDefault04"
                            value={rank}
                            onChange={(e) => setRank(e.target.value)}
                            style={{ borderColor: "#808000", borderWidth: "3px" }}
                            required
                        >
                            <option selected disabled value="">Ninguno</option>
                            <option>Teniente Coronel</option>
                            <option>Comandante</option>
                            <option>Capitán</option>
                            <option>Teniente</option>
                            <option>Subteniente</option>
                            <option>Brigada</option>
                            <option>Sargento Primero</option>
                            <option>Sargento</option>
                            <option>Cabo 1º</option>
                            <option>Cabo</option>
                            <option>Soldado</option>
                        </select>
                        <label className="form-label" style={{ color: "#808000", fontWeight: "bold" }}>Email</label>
                        <input
                            type="text"
                            className="form-control"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            style={{ borderColor: "#808000", borderWidth: "3px" }}
                            required

                        />
                    </div>

                    {/* Reasons */}
                    <div className="mb-3">
                        <label className="form-label" style={{ color: "#808000", fontWeight: "bold" }}>Reasons</label>

                        {/* Holidays & Leave Reasons */}
                        {requestType === 'Holidays and Leave' && (
                            <>
                                <div className="form-check">
                                    <input type="radio"
                                        className="form-check-input"
                                        id="official1"
                                        value="Permiso Oficial"
                                        onChange={handleReasonChange}
                                        checked={reason === "Permiso Oficial"}
                                        disabled={official1}
                                    />
                                    <label className="form-check-label"
                                        htmlFor="official"
                                        style={{ color: "#808000", fontWeight: "bold" }}
                                    >
                                       Own Affairs
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input type="radio"
                                        className="form-check-input"
                                        id="official2"
                                        value="Descanso Obligatorio"
                                        onChange={handleReasonChange}
                                        checked={reason === 'Descanso Obligatorio'}
                                        disabled={official2}
                                    />
                                    <label className="form-check-label"
                                        htmlFor="official2"
                                        style={{ color: "#808000", fontWeight: "bold" }}
                                    >
                                        Obligatory Rest
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input type="radio"
                                        className="form-check-input"
                                        id="official3"
                                        value="Día Adicional"
                                        onChange={handleReasonChange}
                                        checked={reason === 'Dia Adicional'}
                                        disabled={official3}
                                    />
                                    <label className="form-check-label"
                                        htmlFor="official3"
                                        style={{ color: "#808000", fontWeight: "bold" }}
                                    >
                                        Additional Day
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input type="radio"
                                        className="form-check-input"
                                        id="official4"
                                        value="Dia por preparacion"
                                        onChange={handleReasonChange}
                                        checked={reason === 'Dia por preparacion'}
                                        disabled={official4}
                                    />
                                    <label className="form-check-label"
                                        htmlFor="official4"
                                        style={{ color: "#808000", fontWeight: "bold" }}
                                    >
                                       Day by Preparation
                                    </label>

                                </div>
                            </>
                        )}

                        {/* Medical Reasons */}
                        {requestType === 'Medical Leave' && (
                            <>
                                <div className="form-check">
                                    <input type="radio"
                                        className="form-check-input"
                                        id="contingency1"
                                        value="Contingencia Comun"
                                        onChange={handleReasonChange}
                                        checked={reason === "Contingencia Comun"}
                                        disabled={contingency1}
                                    />
                                    <label className="form-check-label"
                                        htmlFor="contingency"
                                        style={{ color: "#808000", fontWeight: "bold" }}
                                    >
                                       Common Contingency
                                    </label>
                                </div>

                                <div className="form-check">
                                    <input type="radio"
                                        className="form-check-input"
                                        id="contingency2"
                                        value="Contingencia Profesional"
                                        onChange={handleReasonChange}
                                        checked={reason === "Contingencia Profesional"}
                                        disabled={contingency2}

                                    />
                                    <label className="form-check-label"
                                        htmlFor="contingency"
                                        style={{ color: "#808000", fontWeight: "bold" }}
                                    >
                                       Occupational Contingency
                                    </label>
                                </div>

                                <div className="form-check">
                                    <input type="radio"
                                        className="form-check-input"
                                        id="contingency3"
                                        value="Continuidad de baja"
                                        onChange={handleReasonChange}
                                        checked={reason === "Continuidad de baja"}
                                        disabled={contingency3}

                                    />
                                    <label className="form-check-label"
                                        htmlFor="contingency"
                                        style={{ color: "#808000", fontWeight: "bold" }}
                                    >
                                        Continuity of Sick Leave
                                    </label>
                                </div>
                                
                                <div className="form-check">
                                    <input type="radio"
                                        className="form-check-input"
                                        id="contingency4"
                                        value="Dia de Recuperacion"
                                        onChange={handleReasonChange}
                                        checked={reason === "Dia de Recuperacion"}
                                        disabled={contingency4}
                                    />
                                    <label className="form-check-label"
                                        htmlFor="contingency"
                                        style={{ color: "#808000", fontWeight: "bold" }}
                                    >
                                        Recovery Day
                                    </label>
                                </div>
                            </>
                        )}

                        {/* Family Welfare Reasons */}
                        {requestType === 'Falily Welfare' && (
                            <>
                                <div className="form-check">
                                    <input
                                        type="radio"
                                        className="form-check-input"
                                        id="flexibility"
                                        value="Flexibilidad Horaria"
                                        onChange={handleReasonChange}
                                        checked={reason === 'Flexibilidad Horaria'}
                                        disabled={flexibility}
                                    />
                                    <label className="form-check-label"
                                        htmlFor="flexibility"
                                        style={{ color: "#808000", fontWeight: "bold" }}
                                    >
                                        Flexible Hours
                                    </label>
                                </div>

                                <div className="form-check">
                                    <input
                                        type="radio"
                                        className="form-check-input"
                                        id="childUnder3"
                                        value="Hijo menor de 3 años"
                                        onChange={handleReasonChange}
                                        checked={reason === 'Hijo menor de 3 años'}
                                        disabled={childUnder3}
                                    />
                                    <label className="form-check-label"
                                        htmlFor="childUnder3"
                                        style={{ color: "#808000", fontWeight: "bold" }}
                                    >
                                        Childcare for children under 3 years.
                                    </label>
                                </div>

                                <div className="form-check">
                                    <input
                                        type="radio"
                                        className="form-check-input"
                                        id="childUnder8"
                                        value="Hijo menor de 8 años"
                                        onChange={handleReasonChange}
                                        checked={reason === 'Hijo menor de 8 años'}
                                        disabled={childUnder8}
                                    />
                                    <label className="form-check-label" htmlFor="childUnder8"
                                        style={{ color: "#808000", fontWeight: "bold" }}
                                    >
                                        Childcare for children under 8 years.
                                    </label>
                                </div>

                                <div className="form-check">
                                    <input
                                        type="radio"
                                        className="form-check-input"
                                        id="childUnder12"
                                        value="Hijo menor de 12 años"
                                        onChange={handleReasonChange}
                                        checked={reason === 'Hijo menor de 12 años'}
                                        disabled={childUnder12}
                                    />
                                    <label className="form-check-label"
                                        htmlFor="childUnder12"
                                        style={{ color: "#808000", fontWeight: "bold" }}
                                    >
                                        Childcare for children under 12 years.
                                    </label>
                                </div>
                            </>
                        )}
                    </div>

                    {/* Periodos */}
                    {reason && (
                        <div className="mb-3">
                            <label className="form-label" style={{ color: "#808000", fontWeight: "bold" }}>Periods</label>
                            <div className="row">
                                <div className="col">
                                    <input type="date"
                                        className="form-control"
                                        value={periodFrom}
                                        onChange={handlePeriodFromChange}
                                        style={{ borderColor: "#808000", borderWidth: "3px" }}
                                        required />
                                </div>
                                <div className="col">
                                    <input type="date"
                                        className="form-control"
                                        value={periodTo}
                                        onChange={handlePeriodToChange}
                                        style={{ borderColor: "#808000", borderWidth: "3px" }}
                                        required />
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="btn btn-primary"
                        style={{
                            borderColor: "#808000",
                            borderWidth: "3px",
                            backgroundColor: hoverOrder ? "black" : "olive",
                            color: hoverOrder ? "white" : "white",
                            fontWeight: "bold",
                            transition: "background-color 0.3s"
                        }}
                        onMouseOver={() => setHoverOrder(true)}
                        onMouseOut={() => setHoverOrder(false)}
                    >
                        Order
                    </button>

                    <button
                        type="button"
                        className="btn btn-danger"
                        onClick={handleCancel}
                        style={{
                            borderColor: "#808000",
                            borderWidth: "3px",
                            backgroundColor: hoverCancel ? "LightCoral" : "red",
                            color: hoverCancel ? "white" : "white",
                            fontWeight: "bold",
                            marginLeft: "25px",
                            transition: "background-color 0.3s"
                        }}
                        onMouseOver={() => setHoverCancel(true)}
                        onMouseOut={() => setHoverCancel(false)}
                    >
                        Cancel
                    </button>

                </form>
            </div >
        </div >
    );
}

export default Create;