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
