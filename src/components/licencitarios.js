import React from "react";
import { useForm } from "../hooks/useForm";
import "../components/licencitarios.css";

const initialForm = {
    name: "",
    nameBusiness:"",
    cellPhone:"",
    state:"",
    email:"",
    telephone:"",
    city:"",
    options:"",
    other:"",
};

const validationsForm = (form) => {
    let errors = {};
    let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
    let regexComments = /^.{1,255}$/;
    let regexNumbers = /^[0-9]{8,13}$/;

    if(!form.name.trim()){
        errors.name = "El campo Nombre es requerido";
    }else if(!regexName.test(form.name.trim())){
        errors.name = "Este campo solo admite letras y espacios";
    }

    if(!form.nameBusiness.trim()){
        errors.nameBusiness = "El campo Nombre de la empresa es requerido";
    }else if(!regexName.test(form.nameBusiness.trim())){
        errors.nameBusiness = "Este campo solo admite letras y espacios";
    }

    if(!form.cellPhone.trim()){
        errors.cellPhone = "El campo Celular es requerido";
    }else if(!regexNumbers.test(form.cellPhone.trim())){
        errors.cellPhone = "Agrega un Celular valido";
    }

    if(!form.state.trim()){
        errors.state = "El campo Estado es requerido";
    }

    if(!form.email.trim()){
        errors.email = "El campo Email es requerido";
    }else if(!regexEmail.test(form.email.trim())){
        errors.email = "Agrega un correo valido";
    }

    if(!form.telephone.trim()){
        errors.telephone = "El campo Telefono es requerido";
    }else if(!regexNumbers.test(form.telephone.trim())){
        errors.telephone = "Agrega un Telefono valido";
    }
 
    if(!form.city.trim()){
        errors.city = "El campo Ciudad es requerido";
    }

    return errors;
};


const licencitarios = () => {
    const {form, 
        errors, 
        loading, 
        response,
        selectedOption, 
        handleChange, 
        handleBlur, 
        handleSubmit,
        handleChangeTwo,
    } = useForm(initialForm, validationsForm)
    return (
        <div className="licenciatarios-container">
            <form onSubmit={handleSubmit}>
                <div className="licenciatarios-form-container">
                    <div className="licenciatarios-form-container-one">
                        <div className="input-container">
                            <p>Nombre y Apellido</p>
                            <input type="text" name="name" onBlur={handleBlur} onChange={handleChange} value={form.name} required />
                            {errors.name && <p className="alert">{errors.name}</p>}
                        </div>
                        <div className="input-container">
                            <p>Nombre de la empresa</p>
                            <input type="text" name="nameBusiness" onBlur={handleBlur} onChange={handleChange} value={form.nameBusiness} required />
                            {errors.nameBusiness && <p className="alert">{errors.nameBusiness}</p>}
                        </div>
                        <div className="input-container">
                            <p>Celular</p>
                            <input type="text" name="cellPhone" onBlur={handleBlur} onChange={handleChange} value={form.cellPhone} required />
                            {errors.cellPhone && <p className="alert">{errors.cellPhone}</p>}
                        </div>
                        <div className="input-container">
                            <p>Estado</p>
                            <input type="text" name="state" onBlur={handleBlur} onChange={handleChange} value={form.state} required />
                            {errors.state && <p className="alert">{errors.state}</p>}
                        </div>
                    </div>
                    <div className="licenciatarios-form-container-two">    
                        <div className="input-container">
                            <p>Correo Electronico</p>
                            <input type="text" name="email" onBlur={handleBlur} onChange={handleChange} value={form.email} required />
                            {errors.email && <p className="alert">{errors.email}</p>}    
                        </div>
                        <div className="input-container">
                            <p>Teléfono</p>
                            <input type="text" name="telephone" onBlur={handleBlur} onChange={handleChange} value={form.telephone} required />
                            {errors.telephone && <p className="alert">{errors.telephone}</p>}
                        </div>
                        <div className="input-container">
                            <p>Ciudad</p>
                            <input type="text" name="city" onBlur={handleBlur} onChange={handleChange} value={form.city} required />
                            {errors.city && <p className="alert">{errors.city}</p>}
                        </div>
                        
                    </div>
                </div>
                <div className="radio-container">
                    <p>¿Cómo te enteraste de nosotros?</p>
                    <div className="radiobuttons">
                        <input type="radio" name="options" className="radioButton" onChange={handleChangeTwo} value="redes" checked={selectedOption.checked === "redes"} id="redes" /> <label for="redes">Redes Sociales</label> 
                    </div>
                    <div className="radiobuttons">
                        <input type="radio" name="options" className="radioButton" onChange={handleChangeTwo} value="web" checked={selectedOption.checked === "web"} id="web" /> <label for="web">Sitio Web</label> 
                    </div>
                    <div className="radiobuttons">
                        <input type="radio" name="options" className="radioButton" onChange={handleChangeTwo} value="recomendacion" checked={selectedOption.checked === "recomendacion"} id="recomendacion" /> <label for="recomendacion">Recomendación</label>
                    </div>
                    <div className="other">
                        <div className="radiobuttons">
                            <input type="radio" name="options" className="radioButton" onChange={handleChangeTwo} value="other" checked={selectedOption.checked === "other"} id="other" /> <label for="other">Otro</label>
                        </div>
                        <input type="text" name="other" className="other-text" onBlur={handleBlur} onChange={handleChange} value={form.other} />
                    </div> 
                </div>
                <div className="input-submit-container">
                    <input type="submit" value="Enviar" /><br/>
                </div>
            </form>
            
        </div>
    )
}

export default licencitarios