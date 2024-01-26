const vueapp6 = Vue.createApp({
    data() {
        return {
            provpass: false,
        }
    },
    methods: {

    }
});
const vm6 = vueapp6.mount('#vueapp6');

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

document.forms['editForm'].addEventListener('submit', e => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const surname = document.getElementById('surname').value;
    const midname = document.getElementById('midname').value;
    const classer = document.getElementById('classer').value;
    const bukva = document.getElementById('bukva').value;
    const loginer = document.getElementById('loginer').value;
    if (name === '' || surname === '' || midname === '' || classer === '' || loginer === ''|| bukva === '') {
        vm6.provpass = true;
        document.getElementById('vnim').innerText = 'Заполните все поля!';
    }
    else {
        async function provlogin() {
            let x = 0;
            if (loginer !== document.getElementById('unvis').innerText) {
                const resp = await fetch('/provlogina', { method: "POST", body: loginer });
                const respText = await resp.text();
                x = Number(respText);
            }
            if (x !== 0) {
                vm6.provpass = true;
                document.getElementById('vnim').innerText = 'Логин уже занят!';
            }
            else {
                async function izmena() {
                    const resp = await fetch(`/izmena/${localStorage.getItem('forlogin')}`, {
                        method: "POST",
                        headers: { "Accept": "application/json", "Content-Type": "application/json" },
                        body: JSON.stringify({
                            name: name,
                            surname: surname,
                            midname: midname,
                            classer: parseInt(classer, 10),
                            bukva: bukva,
                            login: loginer,
                        })
                    });
                    localStorage.setItem('forlogin', loginer);
                    window.location.href = resp.url;
                }
                izmena();
            }
        }
        provlogin();
    }
})