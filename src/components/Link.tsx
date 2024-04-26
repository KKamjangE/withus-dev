import { Link as LinkBase, LinkProps } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';

const Link = ({ to, className, children, ...rest }: LinkProps) => {
    return (
        <LinkBase
            to={to}
            className={twMerge(
                `link link-primary font-normal no-underline underline-offset-2 hover:underline ${className}`,
            )}
            {...rest}
        >
            {children}
        </LinkBase>
    );
};

export default Link;
