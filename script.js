function generate() {
    let table = parseInt(document.getElementById("table").value);
    let minLength = parseInt(document.getElementById("minLength").value);
    let maxLength = parseInt(document.getElementById("maxLength").value);
    let resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "";
    for (let i = minLength; i <= maxLength; i++) {
        resultDiv.innerHTML += `${table} x ${i} = ${table * i}<br>`;
    }
}
function clearFields() {
    document.getElementById("table").value = "";
    document.getElementById("minLength").value = "";
    document.getElementById("maxLength").value = "";
    document.getElementById("result").innerHTML = "";
}