function validation(values){
    let error={}
    const namePattern=/^[a-zA-Z- ]+$/
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
    const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/
    if (values.name ===""){
        error.name="Email should n't be empty"
    }
    else if(!namePattern.test(values.email)){
        error.email="Email not Match"
    }else {
        error.name=""
    }
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