import '@toast-ui/editor/dist/toastui-editor.css';
import '@toast-ui/editor/dist/theme/toastui-editor-dark.css';

import { Editor } from '@toast-ui/react-editor';
import { useRef } from 'react';

import Button from '#/components/Button';
import { FeedMarkdown } from '#/contents/data';

const FeedCreatePage = () => {
    const markdownRef = useRef(null);

    return (
        <div className='h-[calc(100vh-40px)]'>
            <Editor
                initialValue={FeedMarkdown}
                previewStyle='vertical'
                previewHighlight={false}
                height='100%'
                initialEditType='markdown'
                hideModeSwitch={true}
                useCommandShortcut={true}
                toolbarItems={[
                    ['heading', 'bold', 'italic', 'strike', 'quote'],
                    ['hr', 'ul', 'ol', 'task'],
                    ['table', 'image', 'link', 'code'],
                ]}
                theme={'dark'}
                usageStatistics={false}
                ref={markdownRef}
            />
            <Button className='absolute bottom-10 right-16 w-40'>등록</Button>
        </div>
    );
};

export default FeedCreatePage;
