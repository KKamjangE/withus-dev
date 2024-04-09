import { ComponentProps } from 'react';

const Button = ({ children, className, ...rest }: ComponentProps<'button'>) => {
    return (
        <button
            className={`btn btn-secondary w-full text-base font-medium text-stone-100 hover:text-stone-300 md:text-lg ${className}`}
            {...rest}
        >
            {children}
        </button>
    );
};

export default Button;
