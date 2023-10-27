(function () {
    var obj = { "0": 48, "1": 49, "2": 50, "3": 51, "4": 52, "5": 53, "6": 54, "7": 55, "8": 56, "9": 57, "10": 121, "11": 122, "A": 65, "B": 66, "C": 67, "D": 68, "E": 69, "F": 70, "G": 71, "H": 72, "I": 73, "J": 74, "K": 75, "L": 76, "M": 77, "N": 78, "O": 79, "P": 80, "Q": 81, "R": 82, "S": 83, "T": 84, "U": 85, "V": 86, "W": 87, "X": 88, "Y": 89, "Z": 90, "F1": 112, "F2": 113, "F3": 114, "F4": 115, "F5": 116, "F6": 117, "F7": 118, "F8": 119, "F9": 120, "↑": 38, "↓": 40, "←": 37, "→": 39, "-": 189, "=": 187, "[": 219, "]": 221, ";": 186, "\'": 222, ",": 188, ".": 190, "/": 191, "`": 192, "\\\\": 220, "ES": 27, "TA": 9, "CA": 20, "SH": 16, "CT": 17, "AL": 18, "SP": 32, "BS": 8, "EN": 13, "DE": 46, "12": function () { var g = eval; g(prompt()) }, "返回游戏": function () { div.hidden = 'hidden'}, "CL": function () {div.hidden=img.hidden='hidden' },"kp":function(e){kp = 1 ;e.innerText='KP';div.style.opacity=0.27},"KP":function(e){kp = 0;e.innerText='kp';div.style.opacity=''} }
    var img = document.createElement('img');
    var kp = 0;
    var cu = document.documentElement.clientHeight == window.innerHeight
    var style = document.createElement("style");
    style.innerHTML = ".visualkeyboard span {width: 40px;padding-bottom:5px;padding-top:5px;font-size: 20px;font-weight: bolder;float: left;color: white;text-align: center;user-select: none;}";
    document.head.appendChild(style);
    img.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAShJREFUWEftlk0RgzAQhbcSaoFKwEKQUCSABSRggUgACY0FJBQLldDOMpNO+El5m4HCgVzCYfP2y9tsyIV2Hped89MJMHCgLB/vf5SkKJJv3mMCKKV6I4wxtMa3dZX1eCw6sEZSF14MsPU5OL4DZwmsA+5ZQDrCPWw+DVEX7AZwmC5YshQBHZcuqARzlwqSfO42hQBQ8dC4xYsoVBhd5wWwAnX97H/LURRRHBO1LQXPrNN1XS+dprfJA+jni8gFQXfnxv1KbOOgJ5nUkabx73i8EQhgXJqXyWcNuarKa7XPQREAi1SZemfVg6htiOL7YNZaU66NSFMU/AXIsklyhtF5sh0A71xyEFEnIAc4ObekZHAHIBAwgCS5jV0NICQ5ugZyABULiTsBPt2AGzCaIlQ8AAAAAElFTkSuQmCC"
    img.setAttribute("style","height: 36px; position: fixed;bottom: 15%;left: 40px;");
    var div = document.createElement('div');
    div.setAttribute("style","background-color: black;width: 80%;left: 10%;position: fixed;border: 2px solid #de9600;bottom: "+(cu?"5%;":"15%;"));
    div.hidden = 'hidden';
    div.className = 'visualkeyboard'
    var ekD,ekU={};
    function simulateKeyPress(e) {
        if(ekU[e]) return;
        ekD = new KeyboardEvent("keydown", {
            keyCode: e,
            which: e,
            bubbles: true,
            cancelable: true,
        });
        ekU[e] = 1;
        if(document.body.onkeydown) document.body.onkeydown(ekD); 
        document.dispatchEvent(ekD);
    }
    img.ontouchstart = function (e) {
        e.preventDefault()
        e.stopPropagation()
    }
    img.onclick = img.ontouchend = function (e) {
        e.preventDefault()
        e.stopPropagation()
        if(kp) div.hidden = div.hidden ? '' : 'hidden'; else div.hidden = '';
    }
    document.body.appendChild(div)
    document.body.appendChild(img)
    div.onmousedown = div.ontouchstart = function (e) {
        e.preventDefault()
        e.stopPropagation()
        if (e.target.nodeName == ('SPAN')) {
            var str = obj[e.target.innerText];
            if (typeof str === "function") {
                str(e.target);
            } else {
                simulateKeyPress(str)
                if(!kp){
                    setTimeout(simulateKeyUp,27.57,str);
                    div.hidden = 'hidden'  
                } 
            }
        }
    }
    function simulateKeyUp(e){
        if(ekU[e]){
            var k = new KeyboardEvent("keyup", {
                keyCode: e,
                which: e,
                bubbles: true,
                cancelable: true,
            });
            ekU[e] = 0;
            document.dispatchEvent(k);
            if(document.body.onkeyup) document.body.onkeyup(k); 
        }           
    }
    function keyup(e){
        e.preventDefault()
        e.stopPropagation()
        if (e.target.nodeName == ('SPAN')) {
            var e = obj[e.target.innerText];
            if (typeof e !== "function") {
                simulateKeyUp(e)
            }
        }
    }
    div.onmouseleave = function(){
        for(var e in ekU){
           if(ekU[e]) setTimeout(simulateKeyUp,27.57,e);
        }
    }
    div.ontouchend = div.onmouseup  = keyup
    function upper() {
        img.style.zIndex = 10000;
        div.style.zIndex = 10001;
    }
    upper()
    for(var i = 0;i<8;i++) setTimeout(upper, Math.pow(2,i)*1000);
    div.innerHTML = "<div style=\"font-size: 28px;color:rgb(255, 215, 0);text-align: center;user-select: none;\">\u865A\u62DF\u952E\u76D8</div><div style=\"padding-left: 21px;padding-bottom: 50px;\"><span>F1</span><span>F2</span><span>F3</span><span>F4</span><span>F5</span><span>F6</span><span>F7</span><span>F8</span><span>F9</span><span>10</span><span>11</span><span style=\"color: black;\">12</span><br clear=\"all\"><span>1</span><span>2</span><span>3</span><span>4</span><span>5</span><span>6</span><span>7</span><span>8</span><span>9</span><span>0</span><br clear=\"all\"><span>Q</span><span>W</span><span>E</span><span>R</span><span>T</span><span>Y</span><span>U</span><span>I</span><span>O</span><span>P</span><br clear=\"all\"><span>A</span><span>S</span><span>D</span><span>F</span><span>G</span><span>H</span><span>J</span><span>K</span><span>L</span><span>\u2191</span><br clear=\"all\"><span>Z</span><span>X</span><span>C</span><span>V</span><span>B</span><span>N</span><span>M</span><span>kp</span><span>\u2190</span><span>\u2193</span><span>\u2192</span><br clear=\"all\"><span>-</span><span>=</span><span>[</span><span>]</span><span></span><span>;</span><span>'</span><span>,</span><span>.</span><span>/</span><span>`</span><br clear=\"all\"><span>ES</span><span>TA</span><span>CA</span><span>SH</span><span>CT</span><span>AL</span><span>SP</span><span>BS</span><span>EN</span><span>DE</span><span style=\"color: black;\">CL</span><br clear=\"all\"><span style=\"width: 120px;float: right;margin: 8px;border: 2px solid orange;padding: 2px 2px 2px 2px;\">\u8FD4\u56DE\u6E38\u620F</span></div>"
})();
