import { Button } from '@mui/material';
import GoogleLogo from '#/assets/googlo-logo.svg';
import * as S from './styles';

const GoogleSignButton = () => {
    return (
        <Button
            fullWidth
            variant="contained"
            size="large"
            type="button"
            color="google"
        >
            <S.ButtonContents>
                <S.Logo src={GoogleLogo} />
                Google로 계속
            </S.ButtonContents>
        </Button>
    );
};

export default GoogleSignButton;
