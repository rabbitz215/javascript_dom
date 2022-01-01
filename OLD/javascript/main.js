// document.getElementById("judul").innerHTML = "Form Login";
// document.getElementsByName("username")[0].value = "Galang"

const cekusername = "Galang";
const cekpassword = "1234";


function ceklogin(){
    let userinput = document.getElementById("username").value;
    let pwinput = document.getElementById("password").value;
    if(userinput == "" || userinput == null){
        // alert("Isi Username Anda");
        // document.getElementById("alert").innerHTML = "Username Wajib Diisi";
        // document.getElementById("alert").style.display = "inline";
        textalert("alert", "Username Wajib Diisi");
        
    }else if(pwinput == "" || pwinput == null){
        // alert("Isi Password Anda");
        // document.getElementById("alert").innerHTML = "Password Wajib Diisi";
        // document.getElementById("alert").style.display = "inline";
        textalert("alert", "Password Wajib Diisi");
    }else{
        if(userinput == cekusername && pwinput == cekpassword){
            alert("Login Berhasil");
            window.location.href="index.html";
        }else{
            // alert("Login Gagal");
            // document.getElementById("alert").innerHTML = "Login Gagal";
            // document.getElementById("alert").style.display = "inline";
            textalert("alert", "Login Gagal");
        }
    }
}

function textalert(id, pesan){
    document.getElementById(id).innerHTML = pesan;
    document.getElementById(id).style.display = "inline-block";
}