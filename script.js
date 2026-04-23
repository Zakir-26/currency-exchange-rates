document.getElementById("btn").onclick = () => {


    let input = document.getElementById('input').value.toUpperCase();
    if (input === "") {
        alert("Please enter a Currency to proceed");
    }
    else {
        fetch('https://open.er-api.com/v6/latest/USD')
        .then(response => response.json())
        .then(data => {
        
            let res = data.rates[input];
            if(res) {
                document.getElementById('result').style.color= "black";
                document.getElementById('result').innerHTML = `1 USD is equal to ${res.toFixed(3)} ${input}`;

            }
            else {
                document.getElementById('result').style.color="red";
                document.getElementById('result').innerHTML = "Invalid Currency ⚠️";
            
            }
        
   })
   .catch(error => {
        document.getElementById('result').style.color="red";
        document.getElementById('result').innerHTML="Something went wrong ⚠️";

   });


};

}

document.getElementById('year').textContent = new Date().getFullYear();