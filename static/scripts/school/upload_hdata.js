fetch('/get_class_data')
.then(response => {
    return response.json();
})
.then(
    data => {
        document.getElementById("selectclass").onchange = function(){
            console.log(document.getElementById('selectclass').value)
        
            for(i = 1; i <= 5; i++){
                document.getElementById('sname'+i).value = data[document.getElementById('selectclass').value][i-1]
            }
        }
    }
)

    

