import React, { useState } from 'react';
import { sendRequest } from '../../services/api-service';

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
    const [submitMessage, setSubmitMessage] = useState('');

    const [hover, setHover] = useState(false);

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

        // Reiniciar los estados de las opciones al cambiar las reasons//
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
    };

    const handlePeriodToChange = (e) => {
        setPeriodTo(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formRequest = {
            requestType,
            name,
            surname,
            tim,
            telephone,
            rank,
            email,
            reason,
            periodFrom,
            periodTo,
        };
        sendRequest(formRequest)
            .then(response => {
                setSubmitMessage('Solicitud enviada con éxito:', response.data);
            })
            .catch(error => {
                setSubmitMessage('Error al enviar la solicitud:', error);
            });
    };

    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title" style={{ color: "#808000", fontWeight: "bold" }}>Leave Request</h5>
                <form onSubmit={handleSubmit}>
                    {/* Request Type */}
                    <div className="mb-3">
                        <label className="form-label" style={{ color: "#808000", fontWeight: "bold" }}>Request Type</label>
                        <select
                            className="form-select"
                            onChange={handleRequestTypeChange}
                            value={requestType}
                            style={{ borderColor: "#808000", borderWidth: "3px" }}
                            required
                        >
                            <option value="">Nobody</option>
                            <option value="holidays">Holidays & Leave</option>
                            <option value="medical">Medical Leave</option>
                            <option value="family">Family Welfare</option>
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
                        {requestType === 'holidays' && (
                            <>
                                <div className="form-check">
                                    <input type="radio"
                                        className="form-check-input"
                                        id="official1"
                                        value="official1"
                                        onChange={handleReasonChange}
                                        checked={reason === "official1"}
                                        disabled={official1}
                                    />
                                    <label className="form-check-label"
                                        htmlFor="official">
                                        Asuntos Propios
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input type="radio"
                                        className="form-check-input"
                                        id="official2"
                                        value="official2"
                                        onChange={handleReasonChange}
                                        checked={reason === 'official2'}
                                        disabled={official2}
                                    />
                                    <label className="form-check-label"
                                        htmlFor="official2">
                                        Descanso Obligatorio
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input type="radio"
                                        className="form-check-input"
                                        id="official3"
                                        value="official3"
                                        onChange={handleReasonChange}
                                        checked={reason === 'official3'}
                                        disabled={official3}
                                    />
                                    <label className="form-check-label"
                                        htmlFor="official3">
                                        Dia Adicional
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input type="radio"
                                        className="form-check-input"
                                        id="official4"
                                        value="official4"
                                        onChange={handleReasonChange}
                                        checked={reason === 'official4'}
                                        disabled={official4}
                                    />
                                    <label className="form-check-label"
                                        htmlFor="official4">
                                        Dia por Preparación
                                    </label>

                                </div>
                            </>
                        )}

                        {/* Medical Reasons */}
                        {requestType === 'medical' && (
                            <>
                                <div className="form-check">
                                    <input type="radio"
                                        className="form-check-input"
                                        id="contingency1"
                                        value="contingency1"
                                        onChange={handleReasonChange}
                                        checked={reason === "contingency1"}
                                        disabled={contingency1}
                                    />
                                    <label className="form-check-label"
                                        htmlFor="contingency">
                                        Contingencia Común
                                    </label>
                                </div>

                                <div className="form-check">
                                    <input type="radio"
                                        className="form-check-input"
                                        id="contingency2"
                                        value="contingency2"
                                        onChange={handleReasonChange}
                                        checked={reason === "contingency2"}
                                        disabled={contingency2}

                                    />
                                    <label className="form-check-label"
                                        htmlFor="contingency">
                                        Contingencia Profesional
                                    </label>
                                </div>

                                <div className="form-check">
                                    <input type="radio"
                                        className="form-check-input"
                                        id="contingency3"
                                        value="contingency3"
                                        onChange={handleReasonChange}
                                        checked={reason === "contingency3"}
                                        disabled={contingency3}

                                    />
                                    <label className="form-check-label"
                                        htmlFor="contingency">
                                        Continuidad de baja
                                    </label>
                                </div>

                                <div className="form-check">
                                    <input type="radio"
                                        className="form-check-input"
                                        id="contingency4"
                                        value="contingency4"
                                        onChange={handleReasonChange}
                                        checked={reason === "contingency4"}
                                        disabled={contingency4}
                                    />
                                    <label className="form-check-label"
                                        htmlFor="contingency">
                                        Día de recuperación
                                    </label>
                                </div>

                            </>
                        )}

                        {/* Family Welfare Reasons */}
                        {requestType === 'family' && (
                            <>
                                <div className="form-check">
                                    <input
                                        type="radio"
                                        className="form-check-input"
                                        id="flexibility"
                                        value="flexibility"
                                        onChange={handleReasonChange}
                                        checked={reason === 'flexibility'}
                                        disabled={flexibility}
                                    />
                                    <label className="form-check-label"
                                        htmlFor="flexibility">
                                        Flexibilidad horaria
                                    </label>
                                </div>

                                <div className="form-check">
                                    <input
                                        type="radio"
                                        className="form-check-input"
                                        id="childUnder3"
                                        value="childUnder3"
                                        onChange={handleReasonChange}
                                        checked={reason === 'childUnder3'}
                                        disabled={childUnder3}
                                    />
                                    <label className="form-check-label"
                                        htmlFor="childUnder3">
                                        Cuidado de hijo menor de 3 años
                                    </label>
                                </div>

                                <div className="form-check">
                                    <input
                                        type="radio"
                                        className="form-check-input"
                                        id="childUnder8"
                                        value="childUnder8"
                                        onChange={handleReasonChange}
                                        checked={reason === 'childUnder8'}
                                        disabled={childUnder8}
                                    />
                                    <label className="form-check-label" htmlFor="childUnder8">
                                        Cuidado de hijo menor de 8 años
                                    </label>
                                </div>

                                <div className="form-check">
                                    <input
                                        type="radio"
                                        className="form-check-input"
                                        id="childUnder12"
                                        value="childUnder12"
                                        onChange={handleReasonChange}
                                        checked={reason === 'childUnder12'}
                                        disabled={childUnder12}
                                    />
                                    <label className="form-check-label" htmlFor="childUnder12">
                                        Cuidado de hijo menor de 12 años
                                    </label>
                                </div>
                            </>
                        )}
                    </div>

                    {/* Periodos */}
                    {reason && (
                        <div className="mb-3">
                            <label className="form-label" style={{ color: "#808000", fontWeight: "bold" }}>Periodos</label>
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
                    <button type="submit"
                        className="btn btn-primary"
                        style={{
                            borderColor: "#808000",
                            borderWidth: "3px",
                            backgroundColor: hover ? "black" : "olive",
                            color: hover ? "white" : "white",
                            fontWeight: "bold",
                            transition: "background-color 0.3s"
                        }}
                        onMouseOver={() => setHover(true)}
                        onMouseOut={() => setHover(false)}
                    >
                        Solicitar
                    </button>
                </form>
            </div >
        </div >
    );
}

export default Create;