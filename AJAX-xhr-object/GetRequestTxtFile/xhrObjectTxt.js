const clickHanlder = () => {
  const divData = document.querySelector(".data-child-div");

  let i = 10;
  const para = document.querySelector('.clicked-text');
  para.innerHTML = "Wait for 10 sec to click again";
  para.style.display = "block";

  let interval = setInterval(()=>{
    i--;
    para.innerHTML = `Wait for ${i} sec to click again`;
    if(i==0){
        buttonCta.innerHTML = "Click to fetch data";
        buttonCta.style.cursor = "pointer";
        para.style.display = "none";
        clearInterval(interval);
    }
 },1000)


  // Intantiate xhr object
  const xhrObject = new XMLHttpRequest();

  // open xhr object
  // xhrObject.open(typeofrequest, url, aync/sync);   GET,POST
  xhrObject.open("GET", "xhrObject.txt", true);

  // onprogress of request
  xhrObject.onprogress = () => {
    divData.innerHTML = "Request is getting processed";
  };

  // onload of request
  xhrObject.onload = function () {
    divData.style.display = "block";
    buttonCta.innerHTML = "Clicked";
    buttonCta.style.cursor = "not-allowed";
    divData.innerHTML = this.responseText;
  };

  // send request
  xhrObject.send();
};

const buttonCta = document.getElementById("click-cta");
buttonCta.addEventListener("click", clickHanlder);
