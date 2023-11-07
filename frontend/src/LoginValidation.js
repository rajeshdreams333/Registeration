function validation(values){
    let error={}
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
    const passwordPattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    if (values.email ===""){
        error.email="Email should n't be empty"
    }
    else if(!emailPattern.test(values.email)){
        error.email="Email not Match"
    }else {
        error.email=""
    }
    if (values.password ===""){
        error.password="Password should n't be empty"
    }
    else if(!passwordPattern.test(values.password)){
        error.password="Password not Match"
    }else {
        error.password=""
    }
    return error;
}

export default validation;