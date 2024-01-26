if(localStorage.getItem('forlogin') !== null) {
    window.location.href = `/profile/${localStorage.getItem('forlogin')}`;
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