function logInfo() {
    const tbody = document.getElementById('tblrow')
    const selectedRows = [...tbody.children].filter(tr => tr.children[0].firstChild.checked)
    const data = selectedRows.map((row) => ({
      first_name: row.children[1].textContent,
      last_name: row.children[2].textContent,
      email: row.children[3].textContent
    }))
    const sendString = JSON.stringify(data);
    let xhr = new XMLHttpRequest();
    xhr.open('POST', '/send-email');
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onload = function() {
      if (xhr.status === 200) {
        alert(sendString);
      }
      else {
        window.alert('Error: ' + xhr.statusText);
      }
    };
    xhr.send(sendString)
}