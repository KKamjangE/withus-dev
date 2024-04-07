import { ComponentProps } from 'react';

const Button = ({ children, className, ...rest }: ComponentProps<'button'>) => {
    return (
        <button className={`btn w-full ${className}`} {...rest}>
            {children}
        </button>
    );
};

export default Button;
