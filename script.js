pi=Math.PI
ball = document.getElementById('ball');
launch_btn = document.getElementById('launch_btn');
reset_btn = document.getElementById('reset_btn');
bubble = document.getElementById('bubble');
bigtext = document.getElementById('bigtext');
ebox = document.getElementById('box');
ebox_width = ebox.clientWidth-20;
ebox_height = ebox.clientHeight-20;


document.body.onkeydown = function(e){
    if(e.keyCode == 32 && e.target == document.body){
        e.preventDefault();
        launch();   
    }
}
document.body.onkeyup = function(e){
    if(e.keyCode == 27){
        reset();   
    }
}

launch_btn.addEventListener('click', launch);
ebox.addEventListener('click', launch);
reset_btn.addEventListener('click', reset);
newbubble();
function newbubble(){
    newbubx = Math.floor((Math.random() * (ebox_width-40)) + 10)
    newbuby = Math.floor((Math.random() * (ebox_height-40)) + 10)
    bubble.style.left = newbubx + 'px';
    bubble.style.bottom = newbuby + 'px';
}

function launch(){
    var id = setInterval(move, 1);
    v = Number(document.getElementById('velocity-user').value);
    ang = Number(document.getElementById('inclination-user').value);
    ang = deg2rad(ang);
    vx = (v*(Math.cos(ang)));
    vy = (v*(Math.sin(ang)));
    ac = 0.1;
    x=100
    y=5
    t=1
    function move() {
        t++
        if (y > newbuby && y < (newbuby+30) && x > newbubx && x < (newbubx+30)){
            bubble.classList.add("bubbles-popped");
            bigtext.innerHTML = "Popped!";
            bigtext.style.color = "rgba(70, 181, 209, 0.5)";

        }
        if (y < 5 || y > ebox_height || x>ebox_width || x<10) {
            clearInterval(id);

        }
        else {
            x=x+vx; 
            y=y+(vy-(ac*t));                
            ball.style.left = x + 'px';
            ball.style.bottom = y + 'px';
        }
    } 

}

function deg2rad(num){
    return (pi*(num/180));
}
function reset(){
    ball.style.left = '100px';
    ball.style.bottom = '5px';
    bubble.classList.remove("bubbles-popped");
    bigtext.style.color = "transparent";
    newbubble();

}
