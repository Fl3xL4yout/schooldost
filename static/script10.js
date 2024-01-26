const vueapp10 = Vue.createApp({
    data() {
        return {
            blurer: 0,
            refer: `/profile/${localStorage.getItem('forlogin')}`
        }
    },
    methods: {
        ydalenie(y) {
            async function udizbaz() {
                const resp = await fetch(`/ydaldost/${localStorage.getItem('forlogin')}/${document.getElementById('un1').innerText}/${document.getElementById('un2').innerText}/${document.getElementById('un3').innerText}/${document.getElementById('un4').innerText}`, {method: 'POST', body: y});
                window.location.href = resp.url;
            }
            udizbaz();
        },
        priblizh(x) {
            let bloki = document.getElementById('mainer');
            bloki.classList.add('unshow');
            let oBig = document.getElementById('vueapp10').appendChild(document.createElement('DIV'));
            let obig2 = document.getElementById(`izodiv${x}`);
            oBig.innerHTML = obig2.innerHTML;
            if (oBig.querySelector('button')) {
                oBig.querySelector('button').remove();
            }
            oBig.classList.add('chel');
            oBig.style.position = `absolute`;
            oBig.style.left = `50%`;
            oBig.style.transform = `translate(-50%, -50%) rotate(1turn)`;
            oBig.style.top = '50vh';
            oBig.style.position = 'fixed';
            oBig.style.zIndex = '100';
            const otn = document.getElementById(`izobr${x}`).height / document.getElementById(`izobr${x}`).width;
            if(otn >= 0.85) {
                document.querySelector('.chel').firstElementChild.style.height = '70vh';
            }
            else {
                document.querySelector('.chel').firstElementChild.style.width = '50vw';
            }
            oBig.addEventListener('click', function(ev) {
                ev.stopPropagation();
                bloki.classList.remove('unshow');
                document.querySelector('.chel').remove();
            });
        },
        dobinf() {
            localStorage.setItem('cho1', document.getElementById('un2').innerText);
            localStorage.setItem('cho2', document.getElementById('un3').innerText);
            localStorage.setItem('vtoroe', document.getElementById('un1').innerText);
            localStorage.setItem('index', document.getElementById('un4').innerText);
        }
    }
});
vueapp10.mount('#vueapp10');

const ifer = setInterval(() => {
    if (document.documentElement.clientWidth < document.documentElement.clientHeight) {
        clearInterval(ifer);
        async function otpr() {
            const resp = await fetch('/otpr', { method: "POST", body: window.location.href });
            window.location.href = resp.url;
        }
        otpr();
    }
}, 100);

if(localStorage.getItem('forlogin') === null) {
    window.location.href = `/title`;
}