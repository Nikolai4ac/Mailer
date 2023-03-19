function logInfo() {
    const tbody = document.getElementById('tblrow')
    const selectedRows = [...tbody.children].filter(tr => tr.children[0].firstChild.checked)
    const testData = [];
    for (let i = 0; i < selectedRows.length; i++) {
      const first_name = selectedRows[i].children[1].textContent;
      const last_name = selectedRows[i].children[2].textContent;
      const email = selectedRows[i].children[3].textContent;
      const objData = {email: email}
      testData.push(objData);
    }
    const stringifiedData = JSON.stringify(testData);
    let xhr = new XMLHttpRequest();
    xhr.open('POST', '/send-email');
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.onload = function() {
      if (xhr.status === 200) {
        alert(xhr.status)
      }
      else {
        window.alert('Error: ' + xhr.statusText);
      }
    };
    xhr.send(stringifiedData)
}