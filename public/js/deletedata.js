function deleteUser(event) {
    event.preventDefault();
    let xhr = new XMLHttpRequest();
    xhr.open('DELETE', '/delete-user-data')
    xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8')
    xhr.onload = function () {
        if (xhr.status === 200) {
            console.log('OK');
            window.location.href = '/receiver-list'
        }
        else {
            window.alert('Error: ' + xhr.statusText);
        }
    };
    let formDestructionData = new FormData(document.getElementById('sender'));
    let sentDestructionData = Object.fromEntries(formDestructionData);
    console.log(sentDestructionData);
    xhr.send(JSON.stringify(sentDestructionData));
}