import React from 'react';

import { Logo, Google } from '../../assets';
import style from './style.css';

// import './style.css';

const Login = () => (
    <div className={style.wrapper}>
        <div>
            <img className={style.logo} src={Logo}/> 
            <div className={style.appName}>
                Corethings
            </div>
        </div>
        <div className={style.mainBlock}>
            <div>
                Вход в систему
            </div>
            <div>
            <input className={style.inputField} name="Login" placeholder="Введите логин"></input>
            </div>
            <div>
            <input className={style.inputField} name="Password" placeholder="Введите пароль"></input>
            </div>
            <button className={style.entryButton}>
                Войти
            </button>
            <div>
                Или
            </div>
            <button className={style.entryButton}>
                <img className={style.googleLogo} src={Google}/>
                Войти с помощью Google
                </button>
            <div>
                Забыли пароль?
            </div>
            <div>
                Зарегистрироваться
            </div>
        </div>
    </div>
)

export default Login