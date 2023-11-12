const cors = require("cors");

module.exports = cors({
    origin: 'http://127.0.0.1:5173/', 
    credentials: true, 
});