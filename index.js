window.onload = function() {
    
    const TabelaPing = document.getElementById("tabela");

    async function checkDevices() {
        try {
            const response = await fetch('http://localhost:3000/ping');
            
            const devices = await response.json();
    
            devices.forEach(device => {
                console.log("Nome: " + device.name + "\nIP: " + device.ip + "\nStatus: " + device.status);
                
                const linha = TabelaPing.insertRow();

                linha.insertCell(0).textContent = device.name;
                linha.insertCell(1).textContent = device.ip;

                const statusCell = linha.insertCell(2);
                statusCell.textContent = device.status;

                if (device.status === "Online") {
                    statusCell.style.color = "green";
                } else {
                    statusCell.style.color = "red";
                }
            });
        } catch (error) {
            console.error("Erro ao verificar dispositivos:", error);
        }
    }

    checkDevices();
}
