export default (data) =>{
    const errors = {};

    if(!data.email.includes ('@')){
        errors.e1 = 'Ingrese un email valido!'
    }
    if(!data.email){
        errors.e2 = 'El email no puede estar vacio!'
    }
    if(data.email.length > 35){
        errors.e3 = 'No puede tener mas de 35 caracteres!'
    }
    if(!/\d/.test(data.password)){
        errors.p1 = 'La contraseña debe tener al menos un numero!'
    }
    if(data.password.length < 6 || data.password.length > 10){
        errors.p2 = 'La longitud de la contraseña debe ser entre 6 y 10 caracteres'
    }

    return errors
};