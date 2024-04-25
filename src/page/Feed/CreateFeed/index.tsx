import '@toast-ui/editor/dist/toastui-editor.css';
import '@toast-ui/editor/dist/theme/toastui-editor-dark.css';
import { Editor } from '@toast-ui/react-editor';
import { useEffect, useRef } from 'react';

import Button from '#/components/Button';

const content = [
    '![image](https://uicdn.toast.com/toastui/img/tui-editor-bi.png)',
    '',
    '# Awesome Editor!',
    '',
    'It has been _released as opensource in 2018_ and has ~~continually~~ evolved to **receive 10k GitHub ⭐️ Stars**.',
    '',
    '## Create Instance',
    '',
    'You can create an instance with the following code and use `getHtml()` and `getMarkdown()` of the [Editor](https://github.com/nhn/tui.editor).',
    '',
    '```js',
    'const editor = new Editor(options);',
    '```',
    '',
    '> See the table below for default options',
    '> > More API information can be found in the document',
    '',
    '| name | type | description |',
    '| --- | --- | --- |',
    '| el | `HTMLElement` | container element |',
    '',
    '## Features',
    '',
    '* CommonMark + GFM Specifications',
    '   * Live Preview',
    '   * Scroll Sync',
    '   * Auto Indent',
    '   * Syntax Highlight',
    '        1. Markdown',
    '        2. Preview',
    '',
    '## Support Wrappers',
    '',
    '> * Wrappers',
    '>    1. [x] React',
    '>    2. [x] Vue',
    '>    3. [ ] Ember',
].join('\n');

const CreateFeed = () => {
    const markdownRef = useRef(null);

    useEffect(() => {
        if (markdownRef.current) {
            console.log(markdownRef.current);
        }
    }, [markdownRef]);

    return (
        <div className='h-[calc(100vh-40px)]'>
            <Editor
                initialValue={content}
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
                theme={['dark']}
                usageStatistics={false}
                ref={markdownRef}
            ></Editor>
        </div>
    );
};

export default CreateFeed;
