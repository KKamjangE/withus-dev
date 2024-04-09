import { Link as LinkBase, LinkProps } from 'react-router-dom';

const Link = ({ to, className, children, ...rest }: LinkProps) => {
    return (
        <LinkBase
            to={to}
            className={`font-normal text-secondary underline-offset-2 hover:underline ${className}`}
            {...rest}
        >
            {children}
        </LinkBase>
    );
};

export default Link;
