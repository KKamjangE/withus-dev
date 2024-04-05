import { CloudIcon } from '@heroicons/react/24/outline';

import { usePostSignIn } from '#/hooks/queries/sign';

import GoogleLogo from '#/assets/google-logo.svg?react';

const AuthPage = () => {
    const { mutate } = usePostSignIn();
    return (
        <div className="flex flex-col gap-6 items-center mt-28">
            <CloudIcon className="h-36 w-36 text-cyan-500" />
            <h2 className="text-5xl font-bold">
                WithUS에 오신 것을 환영합니다!
            </h2>
            <h2 className="text-xl">
                <span className="font-bold">그룹에서 사용하는 이메일 주소</span>
                로 로그인하는 것을 추천드려요.
            </h2>
            <form className="flex flex-col items-center gap-3 w-full max-w-sm">
                <input
                    placeholder="name@work-email.com"
                    type="text"
                    className="input input-secondary"
                    autoFocus
                    required
                />
                <input
                    placeholder="password"
                    type="password"
                    className="input input-secondary"
                    required
                />
                <button
                    type="submit"
                    className="btn btn-neutral text-lg font-medium"
                >
                    시작
                </button>
            </form>
            <span className="divider">또는</span>
            <button className="btn btn-outline text-lg font-medium max-w-sm flex items-center hover:bg-white hover:text-black">
                <GoogleLogo width={30} height={30} />
                sign with google
            </button>
        </div>
    );
};

export default AuthPage;
