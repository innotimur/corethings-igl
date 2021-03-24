import React from 'react';

import { Logo, Google } from '../../assets';
import style from './style.css';

// import './style.css';

const Login = () => (
    <div className={style.wrapper}>
        <div className={style.logoAndName}>
            <img className={style.logo} src={Logo}/> 
            <div className={style.appName}>Corethings</div>
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
        </div>
    </div>
)

export default Login