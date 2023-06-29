import React, {
    InputHTMLAttributes, memo,
} from 'react';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'| 'reaOnly' >

interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string | number;
    type?: string;
    onChange?: (value: string) => void;
    placeholder?: string;
    // autofocus?: boolean;
    readonly?: boolean;
}

export const Input = memo((props: InputProps) => {
    const {
        className,
        type = 'text',
        value,
        onChange,
        placeholder,
        readonly,
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
    const mods: Mods = {
        [cls.readonly]: readonly,
    };

    return (
        <div className={classNames(cls.InputWrapper, mods, [className])}>
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
                readOnly={readonly}
                {...otherProps}
            />
        </div>
    );
});
