window.onload = function () {

    let FullName = document.getElementById('FullName');

    FullName.onkeydown = (e) => {
        let number = parseInt(e.key);
        if (!isNaN(number)) {
            return false;
        }
    }

    let nickname = document.getElementById('Nickname');

    nickname.onkeydown = (e) => {
        let number = e.key;
        if (number === '.' || number === ',') {
            return false;
        }
    }

    let check = document.getElementById('check');

    let fCheck = true;
    let agree = document.getElementsByClassName('agree')[0];
    agree.onclick = function (e) {
        if (fCheck) {
            check.style.display = 'none';
            fCheck = false;
            console.log('Не согласен');
        } else {
            check.style.display = 'inline-block';
            fCheck = true;
            console.log('Cогласен');
        }
    }

    let Email = document.getElementById('E-mail');
    let Password = document.getElementById('Password');
    let RepeatPassword = document.getElementById('RepeatPassword');
    let modalWindow = document.getElementsByClassName('modal-wrapper');
    let addedText = document.getElementsByClassName('added_text');
    let input = document.getElementsByClassName('input');

    document.querySelector('.button').onclick = function () {
        let flag = 1;
        agree.style.borderBottom = '1px solid transparent';
        agree.nextSibling.nextSibling.style.display = 'none';
        for (let i = 0; i < addedText.length; i++) {
            addedText[i].style.display = 'none';

        }
        for (let i = 0; i < input.length; i++) {
            input[i].style.borderBottom = '1px solid #C6C6C4';
        }
        if (!FullName.value) {
            FullName.style.borderBottom = '1px solid red';
            FullName.nextSibling.nextSibling.style.display = 'block';
            flag = 0;
        } else if (!FullName.value.match(/^[a-яa-z,\s]+$/i)) {
            FullName.style.borderBottom = '1px solid red';
            FullName.parentNode.childNodes[7].style.display = 'block';
            flag = 0;
        }
        if (!nickname.value) {
            nickname.style.borderBottom = '1px solid red';
            nickname.parentNode.childNodes[5].style.display = 'block';
            flag = 0;
        } else if (!nickname.value.match(/^[a-яa-z0-9_-]+$/i)) {
            nickname.style.borderBottom = '1px solid red';
            nickname.parentNode.childNodes[7].style.display = 'block';
            flag = 0;
        }
        if (!Email.value) {
            Email.style.borderBottom = '1px solid red';
            Email.parentNode.childNodes[5].style.display = 'block';
            flag = 0;
        } else if (!Email.value.match(/\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,6}/)) {
            Email.style.borderBottom = '1px solid red';
            Email.parentNode.childNodes[7].style.display = 'block';
            flag = 0;
        }

        if (!Password.value) {
            Password.style.borderBottom = '1px solid red';
            Password.parentNode.childNodes[5].style.display = 'block';
            flag = 0;
        } else if (!Password.value.match(/^(?=.*\d)(?=.*[A-Z])(?=.*[-#!$@%^&*_+~=:;?\/])[-\w#!$@%^&*+~=:;?\/]{8,}$/)) {
            Password.style.borderBottom = '1px solid red';
            Password.parentNode.childNodes[7].style.display = 'block';
            flag = 0;
        }

        if (!RepeatPassword.value) {
            RepeatPassword.style.borderBottom = '1px solid red';
            RepeatPassword.parentNode.childNodes[5].style.display = 'block';
            flag = 0;
        }

        if (Password.value !== RepeatPassword.value) {
            RepeatPassword.style.borderBottom = '1px solid red';
            RepeatPassword.parentNode.childNodes[7].style.display = 'block';
            flag = 0;
        }

        if (!fCheck) {
            agree.style.borderBottom = '1px solid red';
            let tempAgreeAddText = agree.nextSibling.nextSibling;
            tempAgreeAddText.style.display = 'block';
            tempAgreeAddText.style.marginTop = '-20px';
            tempAgreeAddText.style.marginBottom = '40px';
            flag = 0;
        }
        if (!flag) {
            return;
        }
        let client = {
            FullName: FullName.value,
            nickname: nickname.value,
            Email: Email.value,
            Password: Password.value
        }
        let clientTempArray = [];
        let clientArray = localStorage.getItem('clientArray');
        if (clientArray) {
            clientTempArray = JSON.parse(clientArray);
        }

        clientTempArray.push(client);
        localStorage.setItem('clientArray', JSON.stringify(clientTempArray));
        modalWindow[0].style.display = 'block';
    }


    document.getElementById('btnOk').onclick = function () {
        goToLoginPage();
        modalWindow[0].style.display = 'none';
    }
let UndMainBtn = document.getElementById('UndMainBtn');
    UndMainBtn.onclick = function () {
        goToLoginPage();
    }
    function reload() {

        location.reload();
    }
    function goToLoginPage() {
        nickname.value = '';
        Password.value = '';
        let title = document.getElementsByClassName('title')[0];
        title.innerText = 'Log in to the system';
        agree.style.display = 'none';
        let u = document.getElementsByClassName('delete');
        while (u[0])
            u[0].remove();

        let button = document.getElementsByClassName('button')[0];
        button.innerText = 'Sign In';
        button.style.marginTop = "24px";
        UndMainBtn.innerText = 'Registration';
        UndMainBtn.onclick = function () {
            document.body.style.cursor = "progress";
            const myTimeout = setTimeout(reload, 1000);

        }

        document.querySelector('.button').onclick = function () {
            let flag = 1;

            Password.parentNode.childNodes[5].style.display = 'none';
            Password.parentNode.childNodes[7].style.display = 'none';
            nickname.parentNode.childNodes[5].style.display = 'none';
            nickname.parentNode.childNodes[7].style.display = 'none';
            nickname.style.borderBottom = '1px solid #C6C6C4';
            Password.style.borderBottom = '1px solid #C6C6C4';

            if (!nickname.value) {
                nickname.style.borderBottom = '1px solid red';
                nickname.parentNode.childNodes[5].style.display = 'block';
                flag = 0;
            }
            if (!Password.value) {
                Password.style.borderBottom = '1px solid red';
                Password.parentNode.childNodes[5].style.display = 'block';
                flag = 0;
            }

            if (!flag) {
                return;
            }
            let clientTempArray = [];
            let clientArray = localStorage.getItem('clientArray');
            if (clientArray) {
                clientTempArray = JSON.parse(clientArray);
            } else {
                document.getElementById('dntReg').innerText = 'Вы ещё не зарегистрировались!';
                modalWindow[0].style.display = 'block';
                document.getElementById('btnOk').onclick = function () {
                    modalWindow[0].style.display = 'none';
                    document.body.style.cursor = "progress";
                    const myTimeout = setTimeout(reload, 1000);
                }
            }

            console.log(clientTempArray[0]);
            for (let i = 0; i < clientTempArray.length; i++) {
                if (clientTempArray[i].nickname === nickname.value) {
                    if (clientTempArray[i].Password === Password.value) {
                        title.innerText = 'Welcome, ' + clientTempArray[i].FullName + '!';
                        button.innerText = 'Exit';
                        button.style.marginTop = "100px";
                        let u = document.getElementsByClassName('delete2');
                        while (u[0])
                            u[0].remove();
                        UndMainBtn.remove();
                        document.getElementById('tryForFree').remove();
                        button.onclick = function () {
                            document.body.style.cursor = "progress";
                            const myTimeout = setTimeout(reload, 1000);
                        }
                    } else {
                        Password.style.borderBottom = '1px solid red';
                        Password.parentNode.childNodes[7].style.display = 'block';
                        Password.parentNode.childNodes[7].innerText = 'Неверный пароль';
                    }
                    flag = 0;
                }
            }
            console.log(flag);
            if (flag) {
                nickname.style.borderBottom = '1px solid red';
                nickname.parentNode.childNodes[7].style.display = 'block';
                nickname.parentNode.childNodes[7].innerText = 'Такой пользователь не зарегистрирован';
            }
        }


    }


}
