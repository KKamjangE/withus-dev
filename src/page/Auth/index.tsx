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
        <div className="flex flex-col gap-4 items-center">
            <CloudIcon className="size-24 text-cyan-500" />
            <h2 className="text-2xl font-bold">
                WithUS에 오신 것을 환영합니다!
            </h2>
            <h2 className="text-lg text-center">
                <span className="font-bold block">
                    그룹에서 사용하는 이메일 주소
                </span>
                로 로그인하는 것을 추천드려요.
            </h2>
            <form className="flex flex-col items-center gap-3 w-full max-w-80">
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
                    className="btn-neutral text-lg font-medium text-white"
                >
                    시작
                </Button>
            </form>
            <div className="w-full max-w-80">
                <span className="divider">또는</span>
            </div>
            <Button className="btn-outline text-lg font-medium flex items-center max-w-80 hover:bg-white hover:text-black">
                <GoogleLogo width={30} height={30} />
                sign with google
            </Button>
            <Link
                to={PAGE_PATH.createAccout}
                className="text-blue-500 hover:underline underline-offset-2"
            >
                처음 왔어요!
            </Link>
        </div>
    );
};

export default AuthPage;
