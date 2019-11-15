window.onscroll = ()=> {
    let scroll = window.pageYOffset;
    document.querySelector('section').style.top = `${-scroll}px`;
}