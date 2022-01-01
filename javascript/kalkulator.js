//fungsi hitung dipanggil di event onclick pada button proses
function hitung() {
  //variabel yang menampung hasil inputan dari form text nilai-1
  let nilai1 = document.getElementById("nilai1").value;
  //variabel yang menampung hasil inputan dari form text nilai-2
  let nilai2 = document.getElementById("nilai2").value;
  //variabel yang menampung hasil inputan dari form combobox "action"
  let action = document.getElementById("action").value;
  //deklarasi variabel hasil, dengan memberi nilai awal hasil = 0;
  let hasil = 0;

  if(nilai1 == 0 && nilai2 == 0){
    message("hasilkalkulator", `Mohon Angka Diisi`);
  }else if(nilai1 >= 0 && nilai2 >= 0){
    if (action == "+") {
      hasil = Number(nilai1) + Number(nilai2);
      cleartext();
    } else if (action == "-") {
      hasil = nilai1 - nilai2;
      cleartext();
    } else if (action == "/") {
      hasil = nilai1 / nilai2;
      cleartext();
    } else if (action == "*") {
      hasil = nilai1 * nilai2;
      cleartext();
    }
    //ini memanggil function message(id, text) yang ada di file main.js
    console.log(nilai1 + nilai2);
    message("hasilkalkulator", `Hasil Perhitungan: ${nilai1} ${action} ${nilai2} = ${Math.ceil(hasil)}`);
  }
  
}

function cleartext(){
  document.getElementById("nilai1").value = "";
  document.getElementById("nilai2").value = "";
}
