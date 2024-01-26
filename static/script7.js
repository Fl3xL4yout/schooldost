const vueapp7 = Vue.createApp({
    data() {
        return {
            provpass: false,
            refer: `/profile/${localStorage.getItem('forlogin')}`
        }
    },
    methods: {

    }
});
const vm7 = vueapp7.mount('#vueapp7');

if(localStorage.getItem('forlogin') === null) {
    window.location.href = `/title`;
}

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

document.forms['editPassForm'].addEventListener('submit', e => {
    e.preventDefault();
    const pass = document.getElementById('passer').value;
    const pass2 = document.getElementById('passer2').value;
    const pass3 = document.getElementById('passer3').value;
    if (pass === '' || pass2 === '' || pass3 === '') {
        vm7.provpass = true;
        document.getElementById('vnim').innerText = 'Заполните все поля!';
    }
    else if (pass3 !== pass2) {
        vm7.provpass = true;
        document.getElementById('vnim').innerText = 'Пароли не совпадают!';
    }
    else {
        async function feditpass() {
            const resp = await fetch(`/feditpass/${localStorage.getItem('forlogin')}`, {
                method: "POST",
                headers: { "Accept": "application/json", "Content-Type": "application/json" },
                body: JSON.stringify({
                    oldpass: pass,
                    newpass: pass2
                })
            });
            const respText = await resp.text();
            if(respText === 'No') {
                vm7.provpass = true;
                document.getElementById('vnim').innerText = 'Неверный старый пароль!';
            }
            else {
                window.location.href = resp.url;
            }
        }
        feditpass();
    }
})