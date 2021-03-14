function dialogfunction(){
    let retval=confirm("quiere continuar?")
    if (retval==true) {
        document.write("el cliente quiere todo confirmadísimo")
        return true
    }
    else{
document.write("negadisimo")
return false
    }
}