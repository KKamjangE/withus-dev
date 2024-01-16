import * as yup from 'yup';

const signInSchema = yup.object({
    userMail: yup
        .string()
        .email('이메일 형식이 올바르지 않습니다.')
        .required('이메일은 필수로 입력해야 합니다.'),
    password: yup.string().required('비밀번호는 필수로 입력해야 합니다.'),
});

const signUpSchema = yup.object({
    userMail: yup
        .string()
        .email('이메일 형식이 올바르지 않습니다.')
        .required('이메일은 필수로 입력해야 합니다.'),
    password: yup
        .string()
        .matches(
            /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*()_\-=+])[A-Za-z\d!@#$%^&*()_\-=+]/,
            '영문, 숫자, 특수문자를 포함해야 합니다.',
        )
        .min(8, '비밀번호는 8~12자리여야 합니다.')
        .max(12, '비밀번호는 8~12자리여야 합니다.')
        .required('비밀번호는 필수로 입력해야 합니다.'),
});

export default { signInSchema };
