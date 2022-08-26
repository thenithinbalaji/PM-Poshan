document.getElementById("loginbtn").onclick = function() {
    console.log(document.getElementById("dashselect").value)

    if(document.getElementById("dashselect").value == 0 && document.getElementById("email").value == "school@gmail.com" && document.getElementById("password").value == "pass"){
        window.location.href = "school_dash"
    }
    
    else if(document.getElementById("dashselect").value == 1 && document.getElementById("email").value == "admin@gmail.com" && document.getElementById("password").value == "pass"){
        window.location.href = "performance"
    }

    else if(document.getElementById("dashselect").value == 2 && document.getElementById("email").value == "1234" && document.getElementById("password").value == "03092002"){
        window.location.href = "student_dash"
    }

    else if(document.getElementById("dashselect").value == 3 && document.getElementById("email").value == "natadmin@gmail.com" && document.getElementById("password").value == "pass"){
        window.location.href = "performance/detailed"
    }

    else{
        alert("\nInvalid Login Details")
    }
}

document.getElementById("forgotpwdbtn").onclick = function() {
    alert("\nPlease contact officer@pmposhan.com \nfor account related queries!")
}