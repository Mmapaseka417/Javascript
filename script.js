let arrays = ["andsisiwe","sophie","happy","wandile","khum","kaghiso","vusi","hardy","luck","mmapaseka","sithembo","seilna","mdudzil"];

let display = document.getElementById("display");

for (let i =0; i <arrays.length; i++) {
    display.innerHTML += "<ol>" + arrays [i] + "</ol>";
}