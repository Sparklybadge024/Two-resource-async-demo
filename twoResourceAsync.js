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
    fetchA().then(()=>fetchB()).then(n=>console.log("Sequential a and b done",n)).catch(n=>console.log(n))
    // Step 3:-
    Promise.all([fetchA(),fetchB()]).then(n=>console.log("parallel",n)).catch(n=>console.log("parallel",n))
    // Step 4:-
    
