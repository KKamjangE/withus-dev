import '@toast-ui/editor/dist/theme/toastui-editor-dark.css';

import { PencilSquareIcon } from '@heroicons/react/24/outline';
import { useNavigate } from 'react-router-dom';

import Button from '#/components/Button';
import { FeedMarkdown } from '#/contents/data';
import { PAGE_PATH } from '#/contents/page';
import FeedCard from '#/page/Feed/FeedCard';

const FeedPage = () => {
    const navigate = useNavigate();
    const feedList = Array.from({ length: 5 }, () => FeedMarkdown);

    return (
        <div className='flex w-full justify-center py-14'>
            <ul className='flex w-5/6 flex-col gap-10'>
                {feedList.map((item, index) => (
                    <FeedCard feed={item} key={index} />
                ))}
            </ul>
            <Button
                className='fixed bottom-10 right-16 w-14'
                onClick={() => navigate(PAGE_PATH.createFeed)}
            >
                <PencilSquareIcon className='h-7 shrink-0' />
            </Button>
        </div>
    );
};

export default FeedPage;
