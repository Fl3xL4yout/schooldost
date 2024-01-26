const vueapp1 = Vue.createApp({
    data() {
        return {
            checkers: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            refer: ''
        }
    },
    methods: {
        smenaform(n) {
            if(this.checkers[n] === 0) {
                document.getElementById(`dosti${n}`).style.height = `${ document.getElementById(`dosti${n}`).scrollHeight }px`;
                document.getElementById(`dosti${n}`).classList.add('next');
                document.getElementById(`plus${n}`).classList.add("plusafter");
                this.checkers[n] = 1;
            }
            else {
                document.getElementById(`dosti${n}`).style.height = '0px';
                document.getElementById(`dosti${n}`).classList.remove('next');
                document.getElementById(`plus${n}`).classList.remove("plusafter");
                this.checkers[n] = 0;
            }
        },
    }
})
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
const vm1 = vueapp1.mount('#vueapp1');
if(localStorage.getItem('forlogin') === null) {
    vm1.refer = '/registration';
}
else {
    vm1.refer = `/profile/${localStorage.getItem('forlogin')}`;
}
const mains = document.getElementsByTagName('main');
const headers = document.getElementsByTagName('header');
let marginal;


const ifer2 = setInterval(() => {
    Array.from(headers).forEach((el) => {
        marginal = el.offsetHeight;
    })
    Array.from(mains).forEach((el) => {
        el.style.marginTop = Number(marginal + 25).toString() + 'px';
    })
}, 100)