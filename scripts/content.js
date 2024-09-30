const sheetURL="https://script.google.com/macros/s/AKfycbxJYA0-FKtsNd57AdsJk2WrhkFExSAeCIom-oaswsl-H2b7IQLKaWqphtBWwHhRUP0akw/exec"

const request= await fetch(sheetURL)
const data= (await request.json()).data

data.forEach(element => {
    console.log(element)
});

