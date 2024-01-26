const vueapp3 = Vue.createApp({
    data() {
        return {

        }
    },
    methods: {
        ishod() {
            localStorage.removeItem('forlogin');
            localStorage.removeItem('checker');
            window.location.href = '/glav';
        }
    }
})
const vm3 = vueapp3.mount("#vueapp3");

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