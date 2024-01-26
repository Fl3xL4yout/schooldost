const chonado = document.getElementById("chonader").innerText;
if (chonado === 'registration' || chonado === 'loginning') {
    if(localStorage.getItem('checker') === null) {
        window.location.href = `/${chonado}`;
    }
    else {
        const loginer = localStorage.getItem('forlogin');
        window.location.href = `/profile/${loginer}`;
    }
}
else if (chonado === 'dobavlenie' || chonado === 'dobavlenie2' || chonado === 'delete' || chonado === 'editpassword') {
    if(localStorage.getItem('checker') !== null) {
        window.location.href = `/${chonado}`;
    }
    else {
        window.location.href = `/`;
    }
}
else if(chonado === 'title') {
    if(localStorage.getItem('checker') !== null) {
        const loginer = localStorage.getItem('forlogin');
        window.location.href = `/profile/${loginer}`;
    }
    else {
        window.location.href = `/title`;
    }
}
else {
    if(localStorage.getItem('checker') !== null) {
        const loginer = localStorage.getItem('forlogin');
        window.location.href = `/${chonado}/${loginer}`;
    }
    else {
        window.location.href = `/`;
    }
}