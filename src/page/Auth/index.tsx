import { CloudIcon, EnvelopeIcon, KeyIcon } from '@heroicons/react/24/outline';

import GoogleLogo from '#/assets/google-logo.svg?react';
import Button from '#/components/Button';
import Input from '#/components/Input';
import Link from '#/components/Link';
import { PAGE_PATH } from '#/contents/page';
import { usePostSignIn } from '#/hooks/queries/sign';

const AuthPage = () => {
    const { mutate } = usePostSignIn();
    return (
        <div className='flex flex-col items-center gap-4'>
            <CloudIcon className='size-16 text-primary md:size-24' />
            <h1 className='text-2xl font-bold md:text-4xl'>
                WithUS에 오신 것을 환영합니다!
            </h1>
            <p className='text-center text-lg md:text-xl'>
                <span className='block font-bold md:inline'>
                    그룹에서 사용하는 이메일 주소
                </span>
                로 로그인하는 것을 추천드려요.
            </p>
            <form className='flex w-full max-w-80 flex-col items-center gap-3 md:max-w-sm md:gap-4'>
                <Input
                    forwardIcon={<EnvelopeIcon width={18} />}
                    placeholder='name@work-email.com'
                    type='email'
                    autoFocus
                    required
                />
                <Input
                    forwardIcon={<KeyIcon width={18} />}
                    placeholder='password'
                    type='password'
                    required
                />
                <Button type='submit'>시작</Button>
            </form>
            <div className='w-full max-w-80 md:max-w-screen-sm'>
                <span className='divider'>또는</span>
            </div>
            <button className='btn flex w-full max-w-80 items-center bg-white text-base font-medium text-neutral hover:bg-white hover:text-neutral md:max-w-sm md:text-lg'>
                <GoogleLogo className='size-6 md:size-8' />
                sign with google
            </button>
            <Link to={PAGE_PATH.createAccout}>처음 방문하셨나요?</Link>
        </div>
    );
};

export default AuthPage;
