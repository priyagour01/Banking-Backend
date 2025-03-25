const autoPassword = ()=>{
    let string ="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+"
    let pass = ""
    for(var i=0; i<8; i++){
        let myno = Math.floor(Math.random()*string.length)
        pass += string.charAt(myno)
    }
    return pass;
}
 module.exports = {
    autoPassword
 }