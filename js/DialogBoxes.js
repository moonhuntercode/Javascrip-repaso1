/* Aquí con el uso de dialog function demostramos
como podemos usar las alertas con condiciones,
y hacemos borrar todo despues de las condiciones
con la ayuda de document.write */

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