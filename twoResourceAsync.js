    function fetchA(){
        let random=Math.floor(Math.random()*10);
        return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(random>5){
            resolve(`Network access granted`);
        }else{
            reject(`Network access terminated`);
        }  
        },Math.floor(Math.random()*1500))
        })
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
        },Math.floor(Math.random()*1500))
        })
    }
    // Step 1:-
    fetchA().then(n=>console.log(n)).catch(n=>console.log(n))
    fetchB().then(n=>console.log(n)).catch(n=>console.log(n))
    // Step 2:-
    fetchA().then(n=>{console.log("A",n);fetchB().then(n=>console.log("B",n)).catch(n=>console.log(n))}).catch(n=>console.log(n))



