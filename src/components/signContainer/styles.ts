import { h1, normal, small } from '#/styles/theme';
import styled from '@emotion/styled';

export const SignContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 50px 0;
    gap: 30px;
`;

export const SignGuideContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
`;

export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 400px;
`;

export const GuideTitle = styled.h2`
    font-size: ${h1};
    font-weight: 600;
`;

export const NormalText = styled.p`
    font-size: ${normal};
`;

export const BoldSpan = styled.span`
    font-weight: 600;
`;

export const IconSize = styled.div`
    font-size: 60px;
`;

export const Divider = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 15px;
    p {
        white-space: nowrap;
    }
    hr {
        width: 100%;
        opacity: 0.5;
    }
`;

export const FindLinkContainer = styled.section`
    display: flex;
    justify-content: center;
    gap: 20px;
`;

export const LinkText = styled.a`
    font-size: ${small};
    color: #1264a3;
    text-decoration: underline;
    cursor: pointer;
`;

export const HelperText = styled.p`
    font-size: ${small};
    color: red;
    margin: 5px 0 0;
`;
