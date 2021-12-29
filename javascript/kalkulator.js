function hitung(){
    let nilai1 = parseInt(document.getElementById("nilai1").value);
    let nilai2 = parseInt(document.getElementById("nilai2").value);
    let action = document.getElementById("action").value;
    let hasil;

    if(action == "+"){
        hasil = nilai1 + nilai2;
        document.getElementById("hasil").value = hasil;
        // return alert(nilai1 + nilai2);
    }else if(action == "-"){
        hasil = nilai1 - nilai2;
        document.getElementById("hasil").value = hasil;
        // return alert(nilai1 - nilai2);
    }else if(action == "/"){
        hasil = nilai1 / nilai2;
        document.getElementById("hasil").value = hasil;
        // return alert(nilai1 / nilai2);
    }else if(action == "*"){
        hasil = nilai1 * nilai2;
        document.getElementById("hasil").value = hasil;
        // return alert(nilai1 * nilai2);
    }else if(action == "**"){
        hasil = nilai1 ** nilai2;
        document.getElementById("hasil").value = hasil;
        // return alert(nilai1 ** nilai2);
    }
    textalert("hasilkalkulator", `Hasil ${nilai1} ${action} ${nilai2} = ${hasil}`);
    // textalert("hasilkalkulator", "Hasil : "+ nilai1 + action + nilai2 +" = "+hasil);
}