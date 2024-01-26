const vueapp4 = Vue.createApp({
    data() {
        return {
            provpass: false,
            refer: `/profile/${localStorage.getItem('forlogin')}`
        }
    },
    methods: {

    }
});
const vm4 = vueapp4.mount('#vueapp4');

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

document.forms['logForm'].addEventListener('submit', e => {
    e.preventDefault();
    const pass = document.getElementById('passer').value;
    const loginer = document.getElementById('loginer').value;
    if (loginer === '' || pass === '') {
        vm4.provpass = true;
        document.getElementById('vnim').innerText = 'Заполните все поля!';
    }
    else {
        async function provVhoda() {
            const resp = await fetch('/provVhoda', {
                method: "POST", 
                headers: { "Accept": "application/json", "Content-Type": "application/json" },
                body: JSON.stringify({
                    login: loginer,
                    password: pass,
                })
            });
            const respText = await resp.text();
            if(respText === 'No') {
                vm4.provpass = true;
                document.getElementById('vnim').innerText = 'Неправильный ввод!';
            }
            else {
                localStorage.setItem('checker', 'odin');
                localStorage.setItem('forlogin', loginer);
                window.location.href = resp.url;
            }
        }
        provVhoda();
    }
})