import React from 'react';

import Input from '../../components/input';
import { Logo, Google } from '../../assets';


import style from './style.css';


const Login = () => (
    <div className={style.wrapper}>
        <form className={style.loginForm}>
            <div className={style.logoAndName}>
                <img className={style.logo} src={Logo}/> 
                <div className={style.appName}>Corethings</div>
            </div>


                    <div>
                        Вход в систему
                    </div>
                        <Input 
                            id="login-input" 
                            name="login" 
                            placeholder="Введите логин" 
                            type='text'
                        />
                    <div>
                        <Input 
                            id="password-input" 
                            name="password" 
                            placeholder="Введите пароль" 
                            type='password'
                        />
                    </div>
                    <button className={style.entryButton}>
                        Войти
                    </button>
                    <div className={style.text}>
                        Или
                    </div>
                    <button className={style.googleButton}>
                        <img className={style.googleLogo} src={Google}/>
                        <div className={style.googleName}>
                            Войти с помощью Google
                        </div>
                        </button>
                    <div className={style.text}>
                        Забыли пароль?
                    </div>
                    <div className={style.text}>
                        Зарегистрироваться
                    </div>
        </form>
    </div>
)

export default Login