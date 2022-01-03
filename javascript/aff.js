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
    
    if(waktu <= 45){
        score();
        document.getElementById("kotak").innerHTML += "<h2>Babak Pertama</h2>";
    }else if(waktu <= 90){
        score();
        document.getElementById("kotak").innerHTML += "<h2>Babak Kedua</h2>";
    }else if(skora == skorb && waktu <= 105){
        score();
        document.getElementById("kotak").innerHTML += "<h2>Babak Tambahan 2x15 Menit</h2>";
    }else if(skora == skorb && waktu <= 120){
        score();
        document.getElementById("kotak").innerHTML += "<h2>Babak Tambahan 2x15 Menit</h2>";
    }else if(skora == skorb && waktu <= 135){
        score();
        document.getElementById("kotak").innerHTML += "<h2>Adu Penalty</h2>";
    }
}