const Request = require("../models/request.model");

//LIST REQUEST//
module.exports.list = (req, res, next) => {
    Request.find()
        .then((request) => res.status(201).json(request))
        .catch((error) => next(error));
}

//CREATE REQUEST//
module.exports.create = (req, res, next) => {
    Request.create(req.body)
        .then((request) => res.status(201).json(request))
        .catch((error) => next(error));
}

//APPROVED REQUEST//
module.exports.approve = (req, res, next) => {
    const status = "Approved";

    Request.findByIdAndUpdate(req.params.id, { status }, { new: true })
        .then((request) => res.status(201).json(request))
        .catch((error) => next(error));
}

//DENIED REQUEST//
module.exports.denied = (req, res, next) => {
    const requestId = req.params.id;
    const comments = req.body.comments;

    console.log('Request ID:', requestId);
    console.log('Comments:', comments);

    Request.findByIdAndUpdate(requestId, { status: "Denied", comments }, { new: true })
        .then((request) => res.status(201).json(request))
        .catch((error) => next(error));
}

//CANCELLED REQUEST//
module.exports.cancel = (req, res, next) => {

    Request.findByIdAndUpdate(req.params.id, { status: "Cancel" }, { new: true })
        .then((request) => res.status(201).json(request))
        .catch((error) => next(error));
}

//APPROVEDLIST REQUESTS//
module.exports.listApproved = (req, res, next) => {
    Request.find({ status: "Approved" })
        .then((approvedRequests) => res.status(200).json(approvedRequests))
        .catch((error) => next(error));
}

//PENDINGLIST REQUESTS//
module.exports.listPending = (req, res, next) => {
    console.log('Entró en listPending'); // Añadir este registro
    Request.find({ status: "Pending" })
        .then((pendingRequests) => {
            console.log('Solicitudes Pendientes:', pendingRequests); // Añadir este registro
            res.status(200).json(pendingRequests);
        })
        .catch((error) => next(error));
}
module.exports.listDenied = (req, res, next) => {
    Request.find({ status: "Denied" })
        .then((requests) => res.status(200).json(requests))
        .catch((error) => next(error));
};
module.exports.deleteRequest = (req, res, next) => {
    Request.findByIdAndDelete(req.params.id)
        .then(() => res.status(204).end())
        .catch((error) => next(error));
};