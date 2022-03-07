const mtk = null
const bahasaIndonesia = 90
const bahasaInggris = 89
const ipa =  69

if(typeof mtk == "number" && typeof bahasaIndonesia == "number" && typeof bahasaInggris == "number" && typeof ipa == "number"){
    const jumlah = mtk + bahasaIndonesia + bahasaInggris + ipa
    const rata2 = jumlah / 4
    console.log(rata2)
    if(rata2 <= 100 || rata2 >= 90){
        console.log("Grade = A")
    }
    else if(rata2 <= 89 || rata2 >= 80){
        console.log("Grade = B")
    }
    else if(rata2 <= 79 || rata2 >= 70){
        console.log("Grade = C")
    }
    else if(rata2 <= 69 || rata2 >= 60){
        console.log("Grade = D")
    }
    else{
        console.log("Grade = E")
    }
}else{
    console.log("anda memasukan selain angka")
}