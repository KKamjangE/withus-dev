import { Link } from 'react-router-dom';
import { CloudIcon, EnvelopeIcon, KeyIcon } from '@heroicons/react/24/outline';

import { PAGE_PATH } from '#/contents/page';
import { usePostSignIn } from '#/hooks/queries/sign';
import GoogleLogo from '#/assets/google-logo.svg?react';
import Button from '#/common/components/Button';
import Input from '#/common/components/Input';

const AuthPage = () => {
    const { mutate } = usePostSignIn();
    return (
        <div className="flex flex-col items-center gap-4">
            <CloudIcon className="size-24 text-cyan-500" />
            <h2 className="text-2xl font-bold md:text-4xl">
                WithUS에 오신 것을 환영합니다!
            </h2>
            <h2 className="text-center text-lg md:text-xl">
                <span className="block font-bold md:inline">
                    그룹에서 사용하는 이메일 주소
                </span>
                로 로그인하는 것을 추천드려요.
            </h2>
            <form className="flex w-full max-w-80 flex-col items-center gap-3 md:max-w-sm">
                <Input
                    forwardIcon={<EnvelopeIcon width={18} />}
                    placeholder="name@work-email.com"
                    type="text"
                    autoFocus
                    required
                    className="input-secondary"
                />
                <Input
                    forwardIcon={<KeyIcon width={18} />}
                    placeholder="password"
                    type="password"
                    required
                    className="input-secondary"
                />
                <Button
                    type="submit"
                    className="btn-neutral text-base font-medium text-white md:text-lg"
                >
                    시작
                </Button>
            </form>
            <div className="w-full max-w-80 md:max-w-screen-sm">
                <span className="divider">또는</span>
            </div>
            <Button className="btn-outline flex max-w-80 items-center bg-white text-base font-medium hover:bg-white hover:text-black md:max-w-sm md:text-lg">
                <GoogleLogo className="size-6 md:size-8" />
                sign with google
            </Button>
            <Link
                to={PAGE_PATH.createAccout}
                className="text-blue-500 underline-offset-2 hover:underline"
            >
                처음 왔어요!
            </Link>
        </div>
    );
};

export default AuthPage;
