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
    
    


