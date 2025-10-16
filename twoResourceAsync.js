function fetchA(){
    let random=Math.floor(Math.random()*10);
    return new Promise((resolve,reject)=>{
       setTimeout(()=>{
        if(random>5){
        resolve(`Network access granted`);
       }else{
        reject(`Network access terminated`);
       }  
       },500)
    }).then(n=>console.log(n)).catch(n=>console.log(n))
}

function fetchB(){
    let random=Math.floor(Math.random()*10);
    return new Promise((resolve,reject)=>{
       setTimeout(()=>{
        if(random>5){
        resolve(`Network access granted`);
       }else{
        reject(`Network access terminated`);
       }  
       },1700)
    }).then(n=>console.log(n)).catch(n=>console.log(n))
}
fetchA();
fetchB();
