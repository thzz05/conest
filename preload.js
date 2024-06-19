const { ipcRenderer } = require('electron')


// status de conexão (verificar se o banco de dados está conectado)

ipcRenderer.send('send-message', "status do banco de dados:")

ipcRenderer.on('db-status', (event, status) => {
    console.log(status)
})

// Inserir data na página
function obterData() {
    const data = new Date()
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }
    return data.toLocaleDateString('pt-br', options)
}

// interagir diretamente no doom do documento html (index.html)
window.addEventListener('DOMContentLoaded', () => {
    const dataAtual = document.getElementById('data').innerHTML = 
    obterData()
})