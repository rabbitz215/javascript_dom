function match(){
    let skora = document.getElementById("skora").value;
    let skorb = document.getElementById("skorb").value;

    for(let i = 0; i <= 150; i = i + 15){
        if(i <= 45){
            document.write("Waktu Pertandingan : "+i+" (Babak Pertama) <br>");
            document.write("Skor Team A : "+skora+"<br>");
            document.write("Skor Team B : "+skorb+"<br>");
        }else if(i >= 45 && i<=90){
            document.write("Waktu Pertandingan : "+i+" (Babak Kedua) <br>");
            document.write("Skor Team A : "+skora+"<br>");
            document.write("Skor Team B : "+skorb+"<br>");
        }else if(skora == skorb && i >= 90 ){
            document.write("Perpanjangan Waktu 2x15 Menit <br>"+i);
            document.write("Skor Team A : "+skora+"<br>");
            document.write("Skor Team B : "+skorb+"<br>");
        }else if(skora == skorb && i >= 150){
            document.write("Adu Penalty");
        }
    }
}