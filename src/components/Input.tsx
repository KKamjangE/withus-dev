import { ComponentProps, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface InputProps extends ComponentProps<'input'> {
    forwardIcon?: ReactNode;
}

const Input = ({ className, forwardIcon, ...rest }: InputProps) => {
    return (
        <label
            className={twMerge(
                `input input-bordered flex w-full items-center gap-2 has-[:focus]:input-primary ${className}`,
            )}
        >
            {forwardIcon}
            <input className={'grow'} {...rest} />
        </label>
    );
};

export default Input;
