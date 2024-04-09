import { ComponentProps, ReactNode } from 'react';

interface InputProps extends ComponentProps<'input'> {
    forwardIcon?: ReactNode;
}

const Input = ({ className, forwardIcon, ...rest }: InputProps) => {
    return (
        <label
            className={`input input-bordered flex w-full items-center gap-2 has-[:focus]:input-secondary ${className}`}
        >
            {forwardIcon}
            <input className={'grow'} {...rest} />
        </label>
    );
};

export default Input;
