function dialogfunction(){
    let retval=confirm("confirmado")
    if (retval==true) {
        document.write("confirmadisimo")
        return true
    }
    else{
document.write("negadisimo")
return false
    }
}