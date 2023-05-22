import React from 'react';
import useTitle from '../../../hooks/useTitle';
import Questions from '../Questions/Questions';

const Blogs = () => {
    useTitle('Blogs | Toyz Land');
    return (
        <div>
            <Questions></Questions>
        </div>
    );
};

export default Blogs;