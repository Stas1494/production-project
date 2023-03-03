import { classNames } from 'shared/lib/classNames/classNames';
import React, {
    InputHTMLAttributes, memo, useEffect, useState,
} from 'react';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string;
    type?: string;
    onChange?: (value: string) => void;
    placeholder?: string;
    // autofocus?: boolean;
}

export const Input = memo((props: InputProps) => {
    const {
        className,
        type = 'text',
        value,
        onChange,
        placeholder,
        // autofocus,
        ...otherProps
    } = props;
    // const [isFocused, setIsFocused] = useState(false);
    // useEffect(() => {
    //     if (autofocus) {
    //         setIsFocused(true);
    //     }
    // }, [autofocus]);
    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    return (
        <div className={classNames(cls.InputWrapper, {}, [className])}>
            { placeholder && (
                <div className={cls.placeholder}>
                    {`${placeholder}>`}
                </div>
            )}
            <input
                type={type}
                value={value}
                onChange={onChangeHandler}
                className={cls.input}
                {...otherProps}
            />
        </div>
    );
});
