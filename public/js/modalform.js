function execute() {
    let modal = document.getElementById("myModal");
    let btnOk = document.getElementById('submitButton');
    let span = document.getElementsByClassName("close")[0];
    modal.style.display = 'block';
    btnOk.onclick = function (event) {
        window.alert("SUCCESS!");
        event.preventDefault();
        let xhr = new XMLHttpRequest();
        xhr.open('POST', '/send-email-data');
        xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8')
        xhr.onload = function() {
          if (xhr.status === 200) {
            alert('code 200 ok')
          }
          else {
            window.alert('Error: ' + xhr.statusText);
          }
        };
        let modalData = new FormData(document.getElementById('modalForm'));
        let sendModal = Object.fromEntries(modalData);
        console.log(sendModal);
        console.log(JSON.stringify(sendModal));
        xhr.send(JSON.stringify(sendModal));
    };
    span.onclick = function () {
      modal.style.display = "none";
    };
    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    };
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        modal.style.display = "none";
      }
    })
}
