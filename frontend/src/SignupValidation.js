function Validation(value){
    let error = {}
    const email_pattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    const password_pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$/

    if(value.name === ""){
        error.name = "Name Should not be emety"
    }else{
        error.name = ""
    }

    if(value.email === ""){
        error.email = "Name Should not be emety"
    }else if(!email_pattern.test(value.email)){
        error.email = "Email Didn`t match"
    }else{
        error.email = ""
    }

    if(value.password === ""){
        error.password = "password Should not be emety"
    }else if(!password_pattern.test(value.password)){
        error.password = "password Didn`t match"
    }else{
        error.password = ""
    }
    return error;

}
export default Validation