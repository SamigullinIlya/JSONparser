let outputVal;
document.getElementById('activateBtn').onclick = ()=>{
    try{
        outputVal = JSON.parse(document.getElementById('input').value)
        document.getElementById('outputField').textContent = JSON.stringify(outputVal, null, 2)
    }
    catch(e){
        alert('input is not a JSON')
    }
}
