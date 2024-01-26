const vueapp2 = Vue.createApp({
    data() {
        return {
            provpass: false,
        }
    },
    methods: {

    }
});
const vm2 = vueapp2.mount('#vueapp2');

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
document.forms['regForm'].addEventListener('submit', e => {
    e.preventDefault();
    const pass1 = document.getElementById('passer').value;
    const pass2 = document.getElementById('passer2').value;
    const name = document.getElementById('name').value;
    const surname = document.getElementById('surname').value;
    const midname = document.getElementById('midname').value;
    const classer = document.getElementById('classer').value;
    const bukva = document.getElementById('bukva').value;
    const loginer = document.getElementById('loginer').value;
    if (name === '' || surname === '' || midname === '' || classer === '' || loginer === '' || pass1 === '' || pass2 === '' || bukva === '') {
        vm2.provpass = true;
        document.getElementById('vnim').innerText = 'Заполните все поля!';
    }
    else if(pass1 !== pass2) {
        vm2.provpass = true;
        document.getElementById('vnim').innerText = 'Пароли не совпадают!';
    }
    else {
        async function provlogin() {
            const resp = await fetch('/provlogina', { method: "POST", body: loginer });
            const respText = await resp.text();
            const x = Number(respText);
            if (x !== 0) {
                vm2.provpass = true;
                document.getElementById('vnim').innerText = 'Логин уже занят!';
            }
            else {
                async function addUser() {
                    localStorage.setItem('checker', 'odin');
                    localStorage.setItem('forlogin', loginer);
                    const resp2 = await fetch('/pekka', {
                        method: "POST",
                        headers: { "Accept": "application/json", "Content-Type": "application/json" },
                        body: JSON.stringify({
                            name: name,
                            surname: surname,
                            midname: midname,
                            classer: parseInt(classer, 10),
                            bukva: bukva,
                            login: loginer,
                            password: pass1,
                        })
                    });
                    window.location.href = resp2.url;
                }
                addUser();
            }
        }
        provlogin();
    }
})