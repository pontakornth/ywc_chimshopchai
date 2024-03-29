import axios from 'axios';

document.addEventListener("DOMContentLoaded", () => {
    function getData() {
        return axios.get("https://panjs.com/ywc.json")
    }
    
    function placeData(data) {
        const NavBar__group = document.querySelector('.NavBar__group');
        data.navbarItems.forEach(({label, href}) => {
            const Link = document.createElement('a');
            Link.href = href;
            Link.innerText = label;
            Link.target = "__blank";
            Link.classList.add("NavBar__item");
            NavBar__group.appendChild(Link);
        });
        NavBar__group.removeChild(document.getElementById('placeholder-link'));
        const duration = document.getElementById('duration');
        duration.innerHTML = data.duration;
        const detail = document.getElementById('detail');
        detail.innerHTML = data.detail;
        const condition = document.getElementById('condition');
        condition.innerHTML = data.condition;
        const footer = document.getElementById('footer');
        const footerLinks = footer.getElementsByTagName('A');
        console.log(footerLinks);
        for (var i = 0; i < footerLinks.length; i++) {
            footerLinks[i].href = data.navbarItems[i].href;
            footerLinks[i].target = "__blank";
        }
    }
    
    const burger = document.querySelector('.NavBar__burger');
    burger.addEventListener('click',() => {
        burger.classList.toggle('is-active');
        document.querySelector('.NavBar__group').classList.toggle('is-active');
    })
    getData().then(({data}) => placeData(data));
})