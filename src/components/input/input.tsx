import { type } from 'node:os';
import React, { HTMLAttributes } from 'react';

import style from './style.css';

interface InputProps extends Omit<HTMLAttributes<HTMLInputElement>, 'id' | 'name'> {
    id: string | number;
    name: string;
    placeholder: string;
    type?: string;
    inputRef?: React.RefObject<HTMLInputElement>;
}

export const Input = ({ id, name, placeholder, type='string' }) => (
    <React.Fragment>
        <input className={style.inputField} id={id} name={name} placeholder={placeholder}/>
    </React.Fragment>
)