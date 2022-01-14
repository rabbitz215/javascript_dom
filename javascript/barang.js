let barang = [
    {kode : "0001", nama : "Gula", harga : 20000},
    {kode : "0002", nama : "Minyak 1 Liter", harga : 25000},
    {kode : "0003", nama : "Telur 1Kg", harga : 18000},
    {kode : "0004", nama : "Beras 1Kg", harga : 25000}
];

barang.forEach((item) => {
    document.getElementById("nama").innerHTML += "<option value='"+item.harga+"'>"+item.nama+"</option>";
});

let nama = document.getElementById("nama");
nama.onchange = function () {
    let hargabarang = document.getElementById("nama").value;
    document.getElementById("harga").value = hargabarang;
};

let qty = document.getElementById("qty");
qty.onkeyup = function () {
    let qty = document.getElementById("qty").value;
    let hargabarang = document.getElementById("harga").value;
    let total = qty * Number(hargabarang);
    document.getElementById("total").value = total;
    if(total > 100000){
        document.getElementById("diskon").value = total * 0.05;
    }else{
        document.getElementById("diskon").value = 0;
    }
};

let bayar = document.getElementById("bayar");
bayar.onkeyup = function () {
    let total = document.getElementById("total").value;
    let bayar = document.getElementById("bayar").value;
    let diskon = document.getElementById("diskon").value;
    let akhir = total - diskon;
    document.getElementById("kembalian").value = "Rp.";
    document.getElementById("kembalian").value += Number(bayar) - Number(akhir);
};