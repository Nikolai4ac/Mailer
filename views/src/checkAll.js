const tbody = document.getElementById('tblrow')
const selectedRows = [...tbody.children].filter(tr => tr.children[0].firstChild.checked)
let objData = [];
const data = selectedRows.map((row) => {
    const result = {
        first_name: row.children[1].textContent,
        last_name: row.children[2].textContent, 
        email: row.children[3].textContent
    }
    objData.push(result)
})
console.log(objData);