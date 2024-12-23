const express = require('express');
const cors = require('cors');
const ping = require('ping');

const app = express();
const PORT = 3000;

app.use(cors()); // Permite o frontend acessar o backend

// Endpoint para verificar o status dos dispositivos
app.get('/ping', async (req, res) => {
    const devices = [
        { name: "joelmServer.Home", ip: "192.168.1.80" },
        { name: "NULL.Home", ip: "192.168.1.88" },
        { name: "LGwebOSTV.Home", ip: "192.168.1.65" },
        { name: "LGwebOSTV.Home", ip: "192.168.1.83"},
        { name: "Impressora", ip: "192.168.1.99"},
        { name: "Eunice Server", ip: "192.168.1.94"},
        { name: "iPhone.Home", ip: "192.168.1.124"},
        { name: "Null.Home", ip: "192.168.1.76"},
        { name: "BD3014575.Home", ip:"192.168.1.130"},
        { name: "DV8555-PT.Home", ip:"192.168.1.134"}
    ];

    const results = await Promise.all(devices.map(async (device) => {
        const isAlive = await ping.promise.probe(device.ip, { timeout: 2 });
        return {
            name: device.name,
            ip: device.ip,
            status: isAlive.alive ? "Online" : "Offline"
        };
    }));

    res.json(results);
});

app.listen(PORT, () => {
    console.log(`Server porta:  ${PORT}`);
});
