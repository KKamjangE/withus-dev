import { Viewer } from '@toast-ui/react-editor';

interface FeedCardProps {
    feed: string;
}

const FeedCard = ({ feed }: FeedCardProps) => {
    return (
        <li className='card bg-base-100 shadow-xl'>
            <div className='card-body'>
                <div className='flex items-end gap-3'>
                    <h2 className='card-title'>김씨</h2>
                    <span>2024.04.26</span>
                    <span>오전 11:08</span>
                </div>
                <Viewer initialValue={feed} theme={'dark'} />
            </div>
        </li>
    );
};

export default FeedCard;
