let biodata ={
    name: "ian pangestu",
    email: "ianpangestu082@gmail.com",
    hobby: ["main game","nonton film","kemah","memancing"]
}
let data = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: 
        {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
        },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    ...biodata
}
// console.log(data)
const { address } = data
const { street,city} = address
console.log(street,city)
