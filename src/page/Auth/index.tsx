import { usePostSignIn } from '#/hooks/queries/sign';
import { Link } from 'react-router-dom';

const AuthPage = () => {
    const { mutate } = usePostSignIn();
    return (
        <div>
            <div>
                <div />
            </div>
            <div>
                <h2>WithUS에 오신 것을 환영합니다!</h2>
                <h2>
                    <span>그룹에서 사용하는 이메일 주소</span>로 로그인하는 것을
                    추천드려요.
                </h2>
            </div>
            <form>
                <input
                    placeholder="name@work-email.com"
                    type="text"
                    name={'userMail'}
                />
                <input
                    placeholder="password"
                    type="password"
                    name={'password'}
                />
                <button type="submit">계속</button>
                <div>
                    <hr />
                    <span>또는</span>
                    <hr />
                </div>
                <div>
                    <Link to={'#'}>이메일이 기억나지 않아요</Link>
                    <Link to={'#'}>비밀번호가 기억나지 않아요</Link>
                </div>
            </form>
        </div>
    );
};

export default AuthPage;
