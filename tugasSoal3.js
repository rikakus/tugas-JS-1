// Buatlah program yang memiliki satu variabel dengan nama “printSegitiga” 
// yg berisi tipe data number yang menghasilkan output segitiga terbalik yang berisi angka
// Contoh: 
// const printSegitiga = 5
// Output: 
// 1 2 3 4 5
// 1 2 3 4
// 1 2 3
// 1 2
// 1
// Contoh: 
// const printSegitiga = “enam”
// Output:
// “Data harus number”

const printSegitiga = "enam"
if(typeof printSegitiga == "number"){
    let string = "";
    for (let i = 0; i < printSegitiga; i++) {
        for (let k = 0; k < printSegitiga - i; k++) {
            string += k + 1;
        }
        string += "\n";
    }
    console.log(string);
}
else{
    console.log("Data harus number")
}