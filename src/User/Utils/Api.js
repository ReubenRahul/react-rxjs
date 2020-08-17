
export const fetchData = () => {
    const userPromise = fetchUser();
    return {
       user: wrapPromise(userPromise)
    };

}

const wrapPromise = (promise) => {
    let status = 'pending';
    // /.store result
    let result;
    let suspender = promise.then( res => {
        status= 'success';
        result = res; 
    },
    err => {
        status = 'error';
        result = err;
    }
    );
    return {
        read() {
            if (status === 'pending') {
                console.log('suspender', suspender)
                throw suspender;
            } else if (status ==='error'){
                throw result;
            } else if (status === 'success') {
                return result;
            }
        }
    }
}
export const fetchUser = () => {
return fetch('https://jsonplaceholder.typicode.com/users/3')
        .then(response => response.json())      
        .then(res => {console.log(res, 'ere');return res })
        .catch(err => console.log(err))
}
