class Mobile {
    constructor(battery) {
        this.inBox = [];
        this.outBox = [];
        this.draft = [];
        this.battery = battery;
    }

    writing(){
        this.draft = prompt("ok")
    }
    send(phone){
        phone.inBox.push(this.draft);
        this.outBox.push(this.draft);
        this.draft="";
        this.battery--
    }
    outbox(){
       return  this.outBox;
    }
    inbox(){
        return  this.inBox;
    }

}

let nokia = new Mobile(99);
let iphone =new Mobile(78)

function disPlay() {
    let table="";
    table += "<tr>"+"<td><button onclick='nokia.writing()'>soạn</button></td>"+

        "<td><button onclick='iphone.writing()'>soạn</button></td>"+"<tr/>"+

        "<tr>"+"<td><button onclick='sendIphone()' >Gửi</button></td>"+

        "<td><button onclick='sendNokia()'>Gửi</button></td>"+"<tr/>"+

        "<tr>"+"<td><button onclick='openNokia()'>Hộp thư đến</button></td>"+

        "<td><button onclick='openIphone()'>Hộp thư đến</button></td>"+"<tr/>"
   document.getElementById("display").innerHTML=table;
    document.getElementById("pin1").innerHTML=nokia.battery;
    document.getElementById("pin2").innerHTML=iphone.battery;
}

function sendIphone() {
    if(nokia.draft.length !==0)
    nokia.send(iphone);
    disPlay()
}
function openNokia() {
    document.getElementById("inbox1").innerHTML=nokia.inBox.join("<br>");
}
function sendNokia() {
    if (iphone.draft.length !==0)
    iphone.send(nokia);
    disPlay();
}
function openIphone() {
    document.getElementById("inbox2").innerHTML=iphone.inBox.join("<br>");
}