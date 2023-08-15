let aquabtn = document.getElementById('aqua');
let tealbtn = document.getElementById('teal');
let pinkbtn = document.getElementById('pink');
let purplebtn = document.getElementById('purple');
let colorlessbtn = document.getElementById('colorless');
let displaysq = document.getElementById('color-display');
let hidebtn = document.getElementById('visibility');
let randombtn = document.getElementById('random');

aquabtn.onclick = function() {
    displaysq.style.backgroundColor = 'aqua';
    displaysq.innerHTML = 'aqua';
}

tealbtn.onclick = function() {
    displaysq.style.backgroundColor = 'teal';
    displaysq.innerHTML = 'teal';
}

pinkbtn.onclick = function() {
    displaysq.style.backgroundColor = 'pink';
    displaysq.innerHTML = 'pink';
}

purplebtn.onclick = function() {
    displaysq.style.backgroundColor = 'purple'
    displaysq.innerHTML = 'purple'
}

colorlessbtn.onclick = function() {
    displaysq.style.backgroundColor = 'white'
    displaysq.innerHTML = 'colorless'
}

//EXTRA CREDIT

hidebtn.onclick = function() {
    if (displaysq.style.display != 'none') {
        
        displaysq.style.display = 'none';
        hidebtn.innerHTML = 'show';
        
    }
    else {
        displaysq.style.display = 'flex';
        hidebtn.innerHTML = 'hide'
    }
}

randombtn.onclick = function() {
    let colorArray = ["aqua", "teal", "pink", "purple", "white"]; 
    let ranNum = Math.random() * colorArray.length;
    let randInt = Math.floor(ranNum);
    let randColor = colorArray[randInt];
    
    if (randColor !== "white") {
    displaysq.style.backgroundColor = randColor
    displaysq.innerHTML = randColor;
    }

    else {
        displaysq.style.backgroundColor = randColor
        displaysq.innerHTML = 'colorless';
    }
}
