import { postAPI } from '#/api/axios';
import { postSignInAPIProps, postSignUpAPIProps } from '#/api/sign/type';
import { API_PATH } from '#/contents/api';

const postSignInAPI = (data: postSignInAPIProps) => {
    return postAPI({ endPoint: API_PATH.post_sign_in, data });
};

const postSignUpAPI = (data: postSignUpAPIProps) => {
    return postAPI({ endPoint: API_PATH.psot_sign_up, data });
};

export default {
    postSignInAPI,
    postSignUpAPI,
};
