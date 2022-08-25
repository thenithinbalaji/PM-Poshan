document.getElementById("loginbtn").onclick = function() {
    console.log(document.getElementById("dashselect").value)

    if(document.getElementById("dashselect").value == 0){
        window.location.href = "school_dash"
    }
    
    else if(document.getElementById("dashselect").value == 1){
        window.location.href = "performance"
    }  
}

document.getElementById("forgotpwdbtn").onclick = function() {
    alert("\nPlease contact officer@pmposhan.com \nfor account related queries!")
}