function colorChange(){
    arr = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];

    let s = "";
    let slen = 0;
    while(slen!=6){
        s = s + arr[Math.floor(Math.random() * arr.length)];
        slen++;
    }
    document.body.style.backgroundColor = "#" + s;
    document.getElementById("H1").innerHTML = "Background Colour is: #"+s;
}