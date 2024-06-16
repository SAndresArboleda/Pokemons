

export const validation = (pokemon) => {

    const errors = {};

    if (pokemon.name.length > 20) { errors.name = 'El nombre debe ser menor a veinte caracteres.' }
    if (!/^[^\d]*$/.test(pokemon.name)) { errors.name = 'El nombre del Pokemon no puede contener numeros' }

    if (pokemon.hp === '0') { errors.hp = 'La vida de tu pokemon debe ser mayor a 1' }
    if (pokemon.hp > 200) { errors.hp = 'La vida debe ser menor a 200' }
    if (isNaN(pokemon.hp)) { errors.hp = 'La vida de tu pokemon debe ser un Numero' }

    if (pokemon.attack === '0') {errors.attack = 'El ataque de tu pokemon debe ser mayor a 1'}
    if (pokemon.attack > 200) {errors.attack = 'El ataque debe ser menor a 200'}
    if (isNaN(pokemon.attack)) {errors.attack = 'El ataque debe ser un Numero'}

    if (pokemon.defense === "0") {errors.defense = 'La defensa de tu pokemon debe ser mayor a 1'}
    if (pokemon.defense > 200) {errors.defense = 'La defensa debe ser menor a 200'}
    if (isNaN(pokemon.defense)) {errors.defense = 'El defensa debe ser un Numero'}

    if (pokemon.speed === "0") {errors.speed = 'La velocidad de tu pokemon debe ser mayor a 1'}
    if (pokemon.speed > 200) {errors.speed = 'La velocidad debe ser menor a 200'}
    if (isNaN(pokemon.speed)) {errors.speed = 'El velocidad debe ser un Numero'}

    if (pokemon.height === "0") {errors.height = 'La altura de tu pokemon debe ser mayor a 1'}
    if (pokemon.height > 200) {errors.height = 'La altura debe ser menor a 200'}
    if (isNaN(pokemon.height)) {errors.height = 'El altura debe ser un Numero'}

    if (pokemon.weight === "0") {errors.weight = 'El peso de tu pokemon debe ser mayor a 1'}
    if (pokemon.weight > 200) {errors.weight = 'El peso debe ser menor a 200'}
    if (isNaN(pokemon.weight)) {errors.weight = 'El peso debe ser un Numero'}

    if (pokemon.image === "url") {errors.image = 'La imagen de tu pokemon debe ser html'}
    
       
    
    // console.log(errors.nombre);
    return errors;
}