document.getElementById('salamiForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const year = parseInt(document.getElementById('year').value);
    const cgpa = parseFloat(document.getElementById('cgpa').value);

    let salami;
    if (year === 1) {
        salami = cgpa * 10;
    } else if (year === 2) {
        salami = cgpa * 5;
    } else {
        salami = cgpa * 1;
    }

    document.getElementById('salamiResult').innerText = `Your Eid Salami: ${salami}`;
});
