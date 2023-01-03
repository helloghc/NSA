import {useState} from "react";
import { helpHttp } from "../helpers/helpHttp";
export const useForm = (initialForm, validateForm) => {
    const [form, setForm] = useState(initialForm);
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [response, setResponse] = useState(null);
    const [selectedOption, setSelectedOption] = useState({
        checked: null
    });

    const handleChangeTwo = (e) => {
        setSelectedOption({
            checked: e.target.value
        })
    }

    const handleChange = (e) => {
        const{name,value} = e.target;
        setForm({
            ...form,
            [name]:value
        });
    };

    const handleBlur = (e) => {
        handleChange(e);
        setErrors(validateForm(form));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors(validateForm(form));

        if(Object.keys(errors).length === 0){
            alert("Enviando Formulario");
            setLoading(true);
            helpHttp().post("https://formsubmit.co/ajax/damaris@skyalert.mx", {
                body: form,
                headers:{
                    "Content-type":"application/json",
                    Accept:"application/json",
                },
            })
            .then((res) => {
                setLoading(false);
                setResponse(true);
            },
            )
        }else{
            return;
        }
    };

    return{
        form,
        errors,
        loading,
        response,
        selectedOption,
        handleChange,
        handleBlur,
        handleSubmit,
        handleChangeTwo,
    };
};
