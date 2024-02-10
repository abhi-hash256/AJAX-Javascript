

const onClickHandler = ()=>{
    console.log("clicked");
    setTimeout(()=>{
        fetch('https://reqres.in/api/users?page=2')
        .then(response=> response.json())
        .then(res=>{
            console.log("res", res.data)
            buttonCta.innerHTML = "Click to fetch data again"
            buttonCta.style.cursor = "pointer"
        })
    }, 4000);
    // buttonCta.style.color = '#000'
    buttonCta.innerHTML = "hey u clicked"
    buttonCta.style.cursor = "not-allowed"
}

const buttonCta = document.querySelector('.click-cta');
buttonCta.addEventListener('click', onClickHandler);