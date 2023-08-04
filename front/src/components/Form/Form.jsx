import { useState } from "react";
import validation from "../validation";
import style from "./Form.module.css"

const Form = ({login}) =>{

    const [form, setForm] = useState({
        email: '',
        password: ''
    });

    const [errors, setErrors] = useState({});

    const handleChange = (event) =>{
        setForm({
            ...form,
            [event.target.name]: event.target.value
        });
        setErrors(validation({
            ...form,
            [event.target.name]: event.target.value
        }))
    };

    const handleSubmit = (event) =>{
        event.preventDefault();
        login(form)
    };


    return(
    <body>

        <div className={style.box}>
            <span className={style.borderline}></span>
            <form>
                <h2>Sing in</h2>
            <div className={style.inputbox}>
                <input value={form.email} onChange={handleChange} name="email" type="text"/>
                <span>Email</span>
                {errors.e1 ? (<p>{errors.e1}</p>) 
                : errors.e2 ? (<p>{errors.e2}</p>) 
                : (<p>{errors.e3}</p>)
            }
            <i></i>
            </div>
            <div className={style.inputbox1}>
                <input value={form.password} onChange={handleChange} name="password" type="text"/>
                <span>Password</span>
                {errors.p1 ? (<p>{errors.p1}</p>) 
                : (<p>{errors.p2}</p>) 
            }
            <i></i>
            </div>
                <button className={style.btn} onClick={handleSubmit}>Log in</button>
            <div>
                <video onLoadedMetadata='this.muted=true' autoPlay loop>
                    <source src="video.mp4"></source>
                </video>
            </div>
            </form>
        </div>

    </body>
    );
};

export default Form