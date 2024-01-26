const vueapp9 = Vue.createApp({
    data() {
        return {
            provpass: false,
            refer1: `/profile/${localStorage.getItem('forlogin')}`,
            refer2: ``
        }
    },
    methods: {
        smenatexta() {
            document.getElementById('spaner').innerText = document.getElementById('filer').value.split('\u002F').pop();
        }
    }
});
const vm9 = vueapp9.mount('#vueapp9');

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

if(localStorage.getItem('forlogin') === null || localStorage.getItem('cho1') === null) {
    window.location.href = `/title`;
}

vm9.refer2 = `/upload/${localStorage.getItem('forlogin')}/${localStorage.getItem('vtoroe')}/${localStorage.getItem('cho1')}/${localStorage.getItem('cho2')}/${localStorage.getItem('index')}`;

document.forms['addIzobrForm'].addEventListener('submit', e => {
    const opisanie = document.getElementById('opisanie').value;
    const filer = document.getElementById('filer').value;
    if (!filer || opisanie === '') {
        e.preventDefault();
        vm9.provpass = true;
        document.getElementById('vnim').innerText = 'Заполните все поля!';
    }
})