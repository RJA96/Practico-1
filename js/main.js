document.querySelector(".punto2").addEventListener("click", canvaspunto2)

function canvaspunto2() {
    document.querySelector(".form-canvas").style.display = "block";
    let canvas = document.getElementById('canv');
    let ctx = canvas.getContext("2d");
    document.querySelector("#punto1submit").addEventListener("click", function () {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = document.querySelector("#color").value;
    ctx.fillRect(document.querySelector("#ejex").value, document.querySelector("#ejey").value, document.querySelector("#width").value, document.querySelector("#height").value);

    })
    }

function canvaspunto3() {
    let width = document.querySelector("#width").value;
    let height = document.querySelector("#height").value;
    let canvas = document.getElementById('canv');
    let ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let image = ctx.createImageData(width, height);
    for (let x = 0; x < image.width; x++) {
        for (let y = 0; y < image.height; y++) {
            setpixel(image, x, y, 0, 0, 0, 255)
        }
    }
    ctx.putImageData(image, 22, 21);

}

function canvaspunto4() {
    let width = 60;
    let height = 50;
    let ctx = document.getElementById('canv').getContext("2d");
    let image = ctx.createImageData(width, height);
    for (let x = 0; x < image.width; x++) {
        for (let y = 0; y < image.height; y++) {
            r = y / (height) * 255;
            g = y / (height) * 255;
            b = y / height * 255;
            setpixel(image, x, y, r, g, b, 5)
        }
    }
    ctx.putImageData(image, 22, 21);
}

function canvaspunto5() {
    let width = 705;
    let height = 555;
    let ctx = document.getElementById('canv').getContext("2d");
    let image = ctx.createImageData(width, height);
    for (let x = 0; x < image.width; x++) {
        for (let y = 0; y < image.height; y++) {
            let r, g, b;
            if (y < image.height / 2) {
                r = y / (height / 2) * 255;
                g = y / (height / 2) * 255;
                b = y / height * 0;
            } else {
                r = 255;
                g = (1 - ((y - height / 2) / (height / 2))) * 255;
                b = 0;
            }
            setpixel(image, y, x, r, g, b, 255);
        }
    }
    ctx.putImageData(image, 22, 21);
}

function setpixel(imageData, x, y, r, g, b, a) {
    i = (x + y * imageData.width) * 4;
    imageData.data[i] = r;
    imageData.data[i + 1] = g;
    imageData.data[i + 2] = b;
    imageData.data[i + 3] = a;
}
//ejec
function canvaspunto6() {

}