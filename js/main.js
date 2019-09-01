document.querySelector(".punto2").addEventListener("click", () => {
    let ht = document.getElementById("use-async");
    asyncro(ht, "punto_2.html").then(function () {
        canvaspunto2();
    })
})
document.querySelector(".punto3").addEventListener("click", () => {
    let ht = document.getElementById("use-async");
    asyncro(ht, "punto_3.html").then(function () {
        canvaspunto3();
    })
})
document.querySelector(".punto4").addEventListener("click", () => {
    let ht = document.getElementById("use-async");
    asyncro(ht, "punto_4.html").then(function () {
        canvaspunto4();
    })
})
document.querySelector(".punto5").addEventListener("click", () => {
    let ht = document.getElementById("use-async");
    asyncro(ht, "punto_5.html").then(function () {
        canvaspunto5();
    })
})
document.querySelector(".punto6").addEventListener("click", () => {
    let ht = document.getElementById("use-async");
    asyncro(ht, "punto_6.html").then(function () {        
        canvaspunto6();
    })
})


function canvaspunto2() {
    let canvas = document.getElementById('canv');
    let ctx = canvas.getContext("2d");
    document.querySelector("#punto2submit").addEventListener("click", function () {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        canvas.height = document.querySelector("#height").value;
        canvas.width = document.querySelector("#width").value;
        ctx.fillStyle = document.querySelector("#color").value;
        ctx.fillRect(0, 0, document.querySelector("#width").value, document.querySelector("#height").value);
    })
}

function canvaspunto3() {
    let canvas = document.getElementById('canv');
    let ctx = canvas.getContext("2d");
    document.querySelector("#punto3submit").addEventListener("click", function () {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        let image = ctx.createImageData(document.querySelector("#width").value, document.querySelector("#height").value);
        canvas.width = image.width;
        canvas.height = image.height;
        let color = hexToRgb(document.querySelector("#color").value);
        for (let x = 0; x < image.width; x++) {
            for (let y = 0; y < image.height; y++) {
                setpixel(image, x, y, color.r, color.g, color.b, 255)
            }
        }
        ctx.putImageData(image, 0, 0);
    })
}

function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}


function canvaspunto4() {
    let canvas = document.getElementById('canv');
    let ctx = canvas.getContext("2d");
    document.querySelector("#punto4submit").addEventListener("click", function () {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        let width = document.querySelector("#width").value;
        let height = document.querySelector("#height").value;
        let image = ctx.createImageData(width,height);
        canvas.width = image.width;
        canvas.height = image.height;
        for (let x = 0; x < image.width; x++) {
            for (let y = 0; y < image.height; y++) {
                let r,g,b;
                r = y / (height) * 255;
                g = y / (height) * 255;
                b = y / height * 255;
                setpixel(image, x, y, r, g, b, 255)
            }
        }
        ctx.putImageData(image, 0, 0);
    });  
}

function canvaspunto5() {
    let canvas = document.getElementById('canv');
    let ctx = canvas.getContext("2d");
    document.querySelector("#punto5submit").addEventListener("click", function () {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        let width = document.querySelector("#width").value;
        let height = document.querySelector("#height").value;
        let image = ctx.createImageData(width,height);
        canvas.width = image.width;
        canvas.height = image.height;
        for (let x = 0; x < image.width; x++) {
            for (let y = 0; y < image.height; y++) {
                let r, g, b;
                if (y < image.height / 2) {
                    r = y / (image.height / 2) * 255;
                    g = y / (image.height / 2) * 255;
                    b = y / image.height * 0;
                } else {
                    r = 255;
                    g = (1 - ((y - image.height / 2) / (image.height / 2))) * 255;
                    b = 0;
                }
                setpixel(image, y, x, r, g, b, 255);
            }
        }
        ctx.putImageData(image, 0, 0)
    });
}

function setpixel(imageData, x, y, r, g, b, a,t) {
    i = (x + y * imageData.width) * 4;
    imageData.data[i] = r;
    imageData.data[i + 1] = g;
    imageData.data[i + 2] = b;
    imageData.data[i + 3] = a;
}

function canvaspunto6() {
    let canvas = document.getElementById('canv');
    let ctx = canvas.getContext("2d");
    document.querySelector("#punto5submit").addEventListener("click", function () {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        if (document.querySelector("#subir").value==='') {
            if (document.querySelector("#basic-url").value !='') {
                let img = new Image();
                img.crossOrigin = "Anonymous";
                img.src = document.querySelector("#basic-url").value;
                img.onload = function () {
                    canvas.height = img.height;
                    canvas.width = img.width;
                    ctx.drawImage(img, 0, 0, img.width, img.height, 0, 0, canvas.width, canvas.height);
                    document.querySelector(".form-canvas").style.display = "none";
            }
        }  
        }
        else{
            let img = new Image();
            img.crossOrigin = "Anonymous";
            img.src = document.querySelector("#subir").value;
            img.onload = function () {
                canvas.height = img.height;
                canvas.width = img.width;
                ctx.drawImage(img, 0, 0, img.width, img.height, 0, 0, canvas.width, canvas.height);
            }
        }
        


    });
}

async function asyncro(h, url) {
    let response = await fetch(url);
    if (response.ok) {
        h.innerHTML = await response.text();
    }
}