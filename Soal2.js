const mtk = 80;
const bahasaIndonesia = 80;
const bahasaInggris = 80;
const ipa = 80;

if (
  typeof mtk == "number" &&
  typeof bahasaIndonesia == "number" &&
  typeof bahasaInggris == "number" &&
  typeof ipa == "number"
) {
  const jumlah = mtk + bahasaIndonesia + bahasaInggris + ipa;
  const rata2 = jumlah / 4;

  if (rata2 > 100) {
    console.log("tolong masukan nilai yang sesuai");
  } else if (rata2 <= 100 && rata2 >= 90) {
    console.log("Grade = A");
  } else if (rata2 <= 89 && rata2 >= 80) {
    console.log("Grade = B");
  } else if (rata2 <= 79 && rata2 >= 70) {
    console.log("Grade = C");
  } else if (rata2 <= 69 && rata2 >= 60) {
    console.log("Grade = D");
  } else {
    console.log("Grade = E");
  }
  console.log(`Nilai rata-rata = ${rata2}`);
} else {
  console.log("anda memasukan selain angka");
}
