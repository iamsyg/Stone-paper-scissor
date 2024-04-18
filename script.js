let img=document.querySelectorAll(".img");
let str=['S','P','Sc'];
let user=0;
let c=0;
let h31=document.querySelector("#player");
let h32=document.querySelector("#machine");
let u=document.createElement("div");
let m=document.createElement("div");
h31.prepend(u);
h32.prepend(m);
let s=document.createElement("h2");
img[1].append(s);
s.style.marginTop="30%";
s.style.color="white";
// u.innerText="dfr";
// m.innerText="vitot";
u.style.fontSize="4rem";
m.style.fontSize="4rem";
for(let i of img)
{
    i.addEventListener("click",()=>{
        console.log(i);
        let res=Math.round((str.length-1)*Math.random());
        if(res===0 && i===img[0])
        {
            console.log(str[0]);
            console.log("tie");
            s.innerText="Tie";
        }
        else if(res===0 && i===img[1])
        {
            console.log(str[0]);
            console.log("Win");
            s.innerText="Player OP";
            user++;
            u.innerText=user;
        }
        else if(res===0 && i===img[2])
        {
            console.log(str[0]);
            console.log("Loose");
            s.innerText="Computer OP";
            c++;
            m.innerText=c;
        }
        if(res===1 && i===img[0])
        {
            console.log(str[1]);
            console.log("Loose");
            s.innerText="Computer OP";
            c++;
            m.innerText=c;
        }
        else if(res===1 && i===img[1])
        {
            console.log(str[1]);
            console.log("Tie");
            s.innerText="Tie";
        }
        else if(res===1 && i===img[2])
        {
            console.log(str[1]);
            console.log("Win");
            s.innerText="Player OP";
            user++;
            u.innerText=user;
        }
        if(res===2 && i===img[0])
        {
            console.log(str[2]);
            console.log("Win");
            s.innerText="Player OP";
            user++;
            u.innerText=user;
        }
        else if(res===2 && i===img[1])
        {
            console.log(str[2]);
            console.log("Loose");
            s.innerText="Machine OP";
            c++;
            m.innerText=c;
        }
        else if(res===2 && i===img[2])
        {
            console.log(str[2]);
            console.log("Tie");
            s.innerText="Tie";
        }

    });
};

