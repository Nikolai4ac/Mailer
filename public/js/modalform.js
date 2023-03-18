function execute() {
    let modal = document.getElementById("myModal");
    let btnOk = document.getElementById('submitButton');
    let span = document.getElementsByClassName("close")[0];
    modal.style.display = 'block';
    btnOk.onclick = function (event) {
        window.alert("SUCCESS!");
        event.preventDefault();
        // let xhr = new XMLHttpRequest();
        // xhr.open('POST', '/send-email-subject');
        // xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        // xhr.onload = function() {
        //   if (xhr.status === 200) {
        //     window.location.href = '/receiver-list';
        //   }
        //   else {
        //     window.alert('Error: ' + xhr.statusText);
        //   }
        // };
        // xhr.send(new FormData(document.getElementById('modalForm')));
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
