function openpage(page) {
  document.getElementById("kontenview").innerHTML = '<object type="text/html" data="' + page + '"  width="1000" height="1000"></object>';
}

if (document.getElementById("judul")) {
  document.getElementById("judul").innerHTML = "<b>FORM LOGIN</b>";
  document.getElementsByName("username")[0].value = "";
}
const username = "admin";
const password = "123";

function ceklogin() {
  //varibel untuk menampung data dari form login
  let userlogin = document.getElementById("username").value;
  let passlogin = document.getElementById("password").value;
  if (userlogin === "" || userlogin === null) {
    //alert("Username wajib diisi!!");
    message("alert", "Username wajib diisi!!");
  } else if (passlogin === "" || passlogin === null) {
    //alert("Password wajib diisi!!");
    message("alert", "Password wajib diisi!!");
  } else {
    if (userlogin === username && passlogin === password) {
      //   alert("Login Berhasil");
      message("alertok", "Login Berhasil");
      window.location.href = "index.html"; //ini untuk buka atau link ke halaman index.html
    } else {
      message("alert", "Username dan Password tidak sesuai!!");
    }
  }
}

function message(id, text) {
  document.getElementById(id).innerHTML = "<b>" + text + "</b>";
  document.getElementById(id).style.display = "inline-block";
}

function hapus(){
  document.getElementById("hasilkalkulator").style.display = "none";
}
