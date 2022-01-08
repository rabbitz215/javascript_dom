function hitung(nilai1, nilai2){
    return nilai1 * nilai2;
}

document.write(hitung(10, 20));

for(i = 0; i < 150; i = i + 15){
    document.getElementById("waktu").innerHTML += "<option value='"+i+"'>"+i+" Menit</option>";
}

function match(){
    let skora = document.getElementById("skora").value;
    let skorb = document.getElementById("skorb").value;
    let waktu = document.getElementById("waktu").value;

    function score(){
        document.getElementById("kotak").innerHTML = "<h1>Score</h1>";
        document.getElementById("kotak").innerHTML += "<h2>"+skora +" - "+skorb+"</h2>";
    }

    if(validasi(skora, skorb) == 1){
        if(waktu <= 45){
            score();
            document.getElementById("kotak").innerHTML += "<h2>Babak Pertama</h2>";
        }else if(waktu <= 75){
            score();
            document.getElementById("kotak").innerHTML += "<h2>Babak Kedua</h2>";
        }else if(waktu == 90){
            score();
            document.getElementById("kotak").innerHTML += "<h2>Babak Kedua</h2>";
            if(skora < skorb){
                document.getElementById("kotak").innerHTML += "<h2>Team B Menang</h2>";
            }else if(skora > skorb){
                document.getElementById("kotak").innerHTML += "<h2>Team A Menang</h2>";
            }
        }else if(skora == skorb && waktu <= 105){
            score();
            document.getElementById("kotak").innerHTML += "<h2>Babak Tambahan 2x15 Menit</h2>";
        }else if(skora == skorb && waktu <= 120){
            score();
            document.getElementById("kotak").innerHTML += "<h2>Babak Tambahan 2x15 Menit</h2>";
        }else if(waktu == 135){
            score();
            document.getElementById("kotak").innerHTML += "<h2>Adu Penalty</h2>";
            if(skora < skorb){
                document.getElementById("kotak").innerHTML += "<h2>Team B Menang</h2>";
            }else if(skora > skorb){
                document.getElementById("kotak").innerHTML += "<h2>Team A Menang</h2>";
            }
        }
    }
}

function validasi(skora, skorb){
    if(skora == "" && skorb == ""){
        document.getElementById("kotak").innerHTML = "<h2>Mohon Skor Diisi</h2>";
        return 0;
    }else{
        return 1;
    }
}

document.getElementById("judulbola").onmouseover = function (){
    document.getElementById("judulbola").style.backgroundColor = "red";
}

document.getElementById("judulbola").onmouseout = function (){
    document.getElementById("judulbola").style.backgroundColor = "white";
}

document.getElementById("skora").onmouseup = function (){
    document.getElementById("skora").style.color = "red";
}

document.getElementById("skora").onmousedown = function (){
    document.getElementById("skora").style.color = "green";
}

document.getElementById("skorb").onfocus = function (){
    document.getElementById("skorb").style.color = "red";
    document.getElementById("skorb").style.backgroundColor = "whitesmoke";
}