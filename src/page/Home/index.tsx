import Link from '#/components/Link';
import { PAGE_PATH } from '#/contents/page';

const HomePage = () => {
    return (
        <div className='flex h-screen items-center justify-center'>
            <ul>
                <li>
                    <Link to={PAGE_PATH.auth}>Auth</Link>
                </li>
                <li>
                    <Link to={PAGE_PATH.createAccout}>Create Account</Link>
                </li>
                <li>
                    <Link to={PAGE_PATH.groupConnection}>Group Connection</Link>
                </li>
            </ul>
        </div>
    );
};

export default HomePage;
