const somethingWillHappen = ()=>{
    return new Promise((resolve,reject) =>{
        if(true){
            resolve('Hey! Correct');
        }else{
            reject('Ups! fail');
        }
    });
};
somethingWillHappen()
    .then(response  => console.log(response))
    .catch(err => console.error(err));


//----------------------------------------------------------------------------    
const somethingWillHappenTwo = ()=>{
    return new Promise((resolve,reject) =>{
        if(true){
            setTimeout(() =>{
                resolve('True');
            },2000)
        }else{
            const error = new Error('Algo esta mal');
            reject(error);
        }
    });
}
somethingWillHappenTwo()
    .then(response  => console.log(response))
    .catch(err => console.error(err));

    
//----------------------------------------------------------------------------  
Promise.all([somethingWillHappen(), somethingWillHappenTwo()])
    .then(response =>{
        console.log('Array of results', response);
    })
    .catch(err =>{
        console.error(err);
    })