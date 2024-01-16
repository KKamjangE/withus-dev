import * as yup from 'yup';

const signInSchema = yup.object({
    userMail: yup
        .string()
        .required('이메일은 필수로 입력해야 합니다.')
        .email('이메일 형식이 올바르지 않습니다.'),
    password: yup.string().required('비밀번호는 필수로 입력해야 합니다.'),
});

export default { signInSchema };
