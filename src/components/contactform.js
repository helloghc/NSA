import React, { useState } from "react";
import { useForm } from "../hooks/useForm";
import "../components/contactform.css";
import { Link } from "react-router-dom";
import { findArgsFromCli } from "@craco/craco/lib/args";
import ReactDOM from 'react-dom'

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
        errors.name = "Name is required";
    }else if(!regexName.test(form.name.trim())){
        errors.name = "This field only allows letters and spaces";
    }

    if(!form.nameBusiness.trim()){
        errors.nameBusiness = "Company is required";
    }else if(!regexName.test(form.nameBusiness.trim())){
        errors.nameBusiness = "This field only allows letters and spaces";
    }

    if(!form.cellPhone.trim()){
        errors.cellPhone = "Cellphone is required";
    }else if(!regexNumbers.test(form.cellPhone.trim())){
        errors.cellPhone = "Invalid Cellphone";
    }

    if(!form.email.trim()){
        errors.email = "Email is required";
    }else if(!regexEmail.test(form.email.trim())){
        errors.email = "Invalid Email";
    }

    if(!form.telephone.trim()){
        errors.telephone = "Phone is required";
    }else if(!regexNumbers.test(form.telephone.trim())){
        errors.telephone = "Invalid Phone";
    }

    return errors;
};



const contactform = () => {
    const {form,
        errors,
        response,
        handleChange,
        handleBlur,
        handleSubmit,
    } = useForm(initialForm, validationsForm)
    const [idCities, setIdCities] = useState(-1);

    const handleChargeCities = function (e) {
        const options = e.target.value;

        setIdCities(options);

    };
    var estadoSeleccionado;

    return (
        <div className="licenciatarios-container">
            <form onSubmit={handleSubmit}>
                <div className="licenciatarios-form-container">
                    <div className="licenciatarios-form-container-one">
                        <br/><br/>
                        <div className="input-container">
                            <input type="text" name="name" placeholder="Name:" onBlur={handleBlur} onChange={handleChange} value={form.name} required />
                            {errors.name && <p className="alert">{errors.name}</p>}
                        </div>
                        <div className="input-container">
                            <input type="text" name="email" placeholder="Email:" onBlur={handleBlur} onChange={handleChange} value={form.email} required />
                            {errors.email && <p className="alert">{errors.email}</p>}
                        </div>
                        <div className="input-container">
                            <input type="text" name="nameBusiness" placeholder="Company:" onBlur={handleBlur} onChange={handleChange} value={form.nameBusiness} required />
                            {errors.nameBusiness && <p className="alert">{errors.nameBusiness}</p>}
                        </div>
                        <div className="input-container">
                            <input type="text" name="cellPhone" placeholder="10 digit phone number:" onBlur={handleBlur} onChange={handleChange} value={form.cellPhone} required />
                            {errors.cellPhone && <p className="alert">{errors.cellPhone}</p>}
                        </div>
                    </div>
                    <div className="licenciatarios-form-container-two">
                        
                        <div className="input-container">
                            <p>How many people do you want to alert?</p>
                            <select name="state" id="selState" className="select" onBlur={handleChargeCities} onChange={handleChange} value={form.state.select} required>
                                <option value={-1}>---</option>
                                <option value="250 +">250 +</option>
                                <option value="50 to 250+">50 to 250 +</option>
                                <option value="50 -">50 -</option>
                            </select>
                        </div>
                        
                        <div className="radio-container">
                            <p>How did you hear about us?</p>
                            <div className="radiobuttons">
                                <input type="radio" name="options" className="radioButton" value={form.options.select} id="redes" /> <label for="redes">Facebook</label>
                            </div>
                            <div className="radiobuttons">
                                <input type="radio" name="options" className="radioButton" value={form.options.select} id="web" /> <label for="web">Instagram</label>
                            </div>
                            <div className="radiobuttons">
                                <input type="radio" name="options" className="radioButton" value={form.options.select} id="recomendacion" /> <label for="recomendacion">Twitter</label>
                            </div>
                            <div className="radiobuttons">
                                <input type="radio" name="options" className="radioButton" value={form.options.select} id="redes" /> <label for="redes">Website</label>
                            </div>
                            <div className="radiobuttons">
                                <input type="radio" name="options" className="radioButton" value={form.options.select} id="web" /> <label for="web">Recommendation</label>
                            </div>
                            <div className="radiobuttons">
                                <input type="radio" name="options" className="radioButton" value={form.options.select} id="recomendacion" /> <label for="recomendacion">Other</label>
                            </div>
                        </div>
                        <div className="input-container">
                            <textarea type="text" name="request" placeholder="Another topics or request:" onBlur={handleBlur} onChange={handleChange} value={form.request} required />
                        </div>


                    </div>
                </div>
                
                <div className="input-submit-container obbt">
                    <input type="submit" value="Submit" />
                    <br/>
                </div>
            </form>

        </div>
    )
}

export default contactform
