function Personal (name, lastname, birthDay) {
    this.name = name,
    this.lastname = lastname,
    this.birthDay = birthDay,
    this.initials = `${this.name.charAt(0).toUpperCase()}. ${this.lastname.charAt(0).toUpperCase()}`
/*     this.saludar = function () {
        console.log(`Hola soy ${this.name} ${this.lastname}`)
    } */
}


let persona1 = new Personal("Adolfo", "Del Castillo", "1986");

console.log(persona1)

/* persona1.saludar() */

// Agregar un metodo al prototipo Personal

Personal.prototype.saludar = function() {
    console.log(`Hola soy ${this.name} ${this.lastname}`)
}

persona1.saludar()




