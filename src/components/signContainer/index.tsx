import { Button, TextField } from '@mui/material';
import * as S from './styles';
import FilterDramaIcon from '@mui/icons-material/FilterDrama';
import GoogleSignButton from '#/components/common/button/GoogleSignButton';
import { usePostSignIn } from '#/hooks/queries/sign';
import { useFormik } from 'formik';
import validationSchema from '#/contents/validationSchema';

const Sign = () => {
    const { mutate } = usePostSignIn();
    const formik = useFormik({
        initialValues: {
            userMail: '',
            password: '',
        },
        validationSchema: validationSchema.signInSchema,
        onSubmit: (form) => {
            console.log(form);
        },
    });
    return (
        <S.SignContainer>
            <S.IconSize>
                <FilterDramaIcon fontSize="inherit" />
            </S.IconSize>
            <S.SignGuideContainer>
                <S.GuideTitle>WithUS에 오신 것을 환영합니다!</S.GuideTitle>
                <S.NormalText>
                    <S.BoldSpan>그룹에서 사용하는 이메일 주소</S.BoldSpan>로
                    로그인하는 것을 추천드려요.
                </S.NormalText>
            </S.SignGuideContainer>
            <S.FormContainer onSubmit={formik.handleSubmit}>
                <TextField
                    fullWidth
                    size="small"
                    placeholder="name@work-email.com"
                    type="text"
                    name={'userMail'}
                    value={formik.values.userMail}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.userMail && !!formik.errors.userMail}
                    helperText={
                        formik.touched.userMail && formik.errors.userMail
                    }
                />
                <TextField
                    fullWidth
                    size="small"
                    placeholder="password"
                    type="password"
                    name={'password'}
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.password && !!formik.errors.password}
                    helperText={
                        formik.touched.password && formik.errors.password
                    }
                />
                <Button
                    fullWidth
                    variant="contained"
                    type="submit"
                    size="large"
                    color="orange"
                >
                    계속
                </Button>
                <S.Divider>
                    <hr />
                    <S.NormalText>또는</S.NormalText>
                    <hr />
                </S.Divider>
                <GoogleSignButton />
                <S.FindLinkContainer>
                    <S.LinkText>이메일이 기억나지 않아요</S.LinkText>
                    <S.LinkText>비밀번호가 기억나지 않아요</S.LinkText>
                </S.FindLinkContainer>
            </S.FormContainer>
        </S.SignContainer>
    );
};

export default Sign;
