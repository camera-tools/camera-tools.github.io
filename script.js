var control = [
    'img/Control/1.png',
    'img/Control/2.png',
    'img/Control/3.png',
    'img/Control/4.png',
    'img/Control/5.png',
    'img/Control/6.png',
    'img/Control/7.png',
    'img/Control/8.png',
    'img/Control/9.png',
    'img/Control/10.png'
];

function fun2() {
    let menu = document.getElementById("onoff1");
    let random = document.getElementById("random");

    menu.addEventListener('change', () => {
        if (menu.checked == true) {
            document.getElementById("demo1").innerHTML = "OFF";
            document.getElementById("principal").style.background = "rgba(86, 86, 86, 0)";
            document.getElementById("pe").style.backgroundColor = "rgba(0, 0, 0, 0.75)";
            document.getElementById("cabeca").style.backgroundColor = "rgba(0, 0, 0, 0.75)";
            document.getElementById("p-menu").style.fontFamily = "IBMPlexMono-Bold";
        } else {
            document.getElementById("demo1").innerHTML = "ON";
            document.getElementById("principal").style.backgroundColor = "rgba(0, 0, 0, 0.75)";
            document.getElementById("pe").style.backgroundColor = "rgba(0, 0, 0, 0)";
            document.getElementById("cabeca").style.backgroundColor = "rgba(0, 0, 0, 0)";
            document.getElementById("p-menu").style.fontFamily = "IBMPlexMono-Bold";
        }
    });


    random.addEventListener('change', () => {

        if (random.checked == false) {
            document.getElementById("demo2").innerHTML = "OFF";
        } else {
            document.getElementById("demo2").innerHTML = "ON";
        }

    });

    let btn1 = document.querySelector("#btn-1");
    let btn2 = document.querySelector("#btn-2");
    let btn3 = document.querySelector("#btn-3");
    let btn4 = document.querySelector("#btn-4");
    let btn5 = document.querySelector("#btn-5");

    btn1.addEventListener('click', function sexo() {
        if (random.checked == true) {
            var body = document.getElementsByTagName("body")[0];
            var currentImage = body.style.backgroundImage;
            var randomImage = "";

            do {
                randomImage = control[Math.floor(Math.random() * control.length)];
            } while (randomImage === currentImage);

            body.style.backgroundImage = "url('" + randomImage + "')";

            setTimeout(sexo, 3000);
        }
        else if (random.checked == false) {
            var body = document.getElementsByTagName("body")[0];
            var currentImage = body.style.backgroundImage;
            var randomImage = "";

            do {
                randomImage = control[Math.floor(Math.random() * control.length)];
            } while (randomImage === currentImage);

            body.style.backgroundImage = "url('" + randomImage + "')";

        }
    });

    btn2.addEventListener('click', () => {
        document.body.style.backgroundImage = "url('img/Forza.jpg')";
    });

    btn3.addEventListener('click', () => {
        document.body.style.backgroundImage = "url('img/Sayonara.jpg')";
    });

    btn4.addEventListener('click', () => {
        document.body.style.backgroundImage = "url('img/Sekiro.jpg')";
    });

    btn5.addEventListener('click', () => {
        document.body.style.backgroundImage = "url('img/Sky.jpg')";
    });
};

function load() {
    document.getElementById("demo1").innerHTML = "ON";
    document.getElementById("demo2").innerHTML = "OFF";
    document.getElementById("pe").style.backgroundColor = "rgba(0, 0, 0, 0)";
    document.getElementById("cabeca").style.backgroundColor = "rgba(0, 0, 0, 0)";
};

