// const { Axios } = require("axios");

const { default: axios } = require("axios");
const { response } = require("express");
const pit = new Array();
const sheetFDR =
  "https://script.google.com/macros/s/AKfycbwbdl8eRz_YRh_1Y1cUtrMI1rbFjZj6sHZSMjkE2PhU049nxXbJ7gdI2VX_YtEmy0Wl/exec";
// const test = [getData()];
// console.log(testF());
// console.log(testF());
// getData();
// const test = testF();
// test = getData();
// console.log(test);

// testF().then(data => {
//   response.json(test, data)
// }).catch(err => console.log(err))
async function testF() {
  const response = await axios.get(sheetFDR)
  return response.data
}
function getData() {
  // Axios.getData
  //  tmp ;
  const test = axios.get(sheetFDR).then(res => {
    const data = [res.data];

    // console.log(data);
    // return data;

    let size = res.data.length;
    // console.log(size);
    const arr = [];
    for (let f = 0; f < size; f++) {
      // console.log(res.data[f].pattern);
      if (res.data[f].type == "TL") {
        p = res.data[f].pattern;
        if (!arr.includes(p)) {
          arr.push(p);
        }
      }
      // console.log(p);
    }
    // console.log(arr);
    const patterns = [];
    let patternsMenu = [];
    for (let a = 0; a < arr.length; a++) {
      // console.log(arr[a]);
      tl = arr[a];
      if (!patterns.includes(tl)) {
        patterns.push(a + " . " + tl);
      }
    }
    // console.log(patterns);
    patternsMenu = patterns.join("\n");
    //   console.log(patternsMenu);

    tmp = patterns.join("\n");
    // console.log(tmp);
    // return tmp;
  });
  // const to = test();
  // console.log("pooo "+to);
  
  const print = async () => {
    const a = await test;
    console.log(a)
    
    // pit = a;
    // return a;
    // console.log(pit.length);
    
    
  }
  print();
  // pit = print.then(ress => {
    //     return ress;
    // });
    //  let pot = print();
    // console.log("sabi ga: "+pit)
    // return pot;
   
}

// let test = testF();
// let tmp = test.then(data => {return data})
// console.log(tmp);
console.log("samlekum "+pit);
console.log("testdi sini: " + getData());