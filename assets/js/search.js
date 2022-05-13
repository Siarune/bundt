let searchBox=document.getElementById("searchtxt");

searchBox.addEventListener('keypress', (e) => {
    if(e.key || e.keyCode == 13){
        setTimeout(()=>{searchBox.value=""},1000);
    }
});

searchBox.addEventListener('keydown', (e) => {
    if (searchBox.value=="githu" && e.key=="b") {
        window.open('https://www.github.com',"_self");
    }
});