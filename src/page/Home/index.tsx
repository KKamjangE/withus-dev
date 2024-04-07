import { PAGE_PATH } from '#/contents/page';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div>
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
