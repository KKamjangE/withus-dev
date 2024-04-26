import { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

const Button = ({ children, className, ...rest }: ComponentProps<'button'>) => {
    return (
        <button
            className={twMerge(
                `btn btn-primary w-full text-base font-medium text-stone-50 hover:text-stone-200 md:text-lg ${className}`,
            )}
            {...rest}
        >
            {children}
        </button>
    );
};

export default Button;
