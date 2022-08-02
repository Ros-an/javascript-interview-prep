const getData = function () {
    let x = document.getElementById("deboun");
    console.log("printdata", x.value, x); // now using this values you can do api call
    //for react you can use useRef(i think this would be better) / useState(update and then call api in useffect)
    // in react there is one more way using usecallback and all
}


function magicKaro(fn, d) {
    let timer;
    return function () {
       clearTimeout(timer);
       timer = setTimeout(()=>{
            getData();
        },d)
    }
}
const betterFunc = magicKaro(getData, 300);