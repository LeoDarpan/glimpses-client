//Subcomponent for POST component - Likes
import React, { useState, useEffect } from 'react';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbUpAltOutlined from '@material-ui/icons/ThumbUpAltOutlined';

const Likes = ({post, likes, hasLiked}) => {

    if (likes?.length > 0) {
        return hasLiked
            ? (
                <>
                    <div className="tooltip">
                        <ThumbUpAltIcon fontSize="medium" />
                        <div className="tooltipText" id="likes">
                            {likes.length > 2 ? `You and ${likes.length - 1} others` : `${likes.length} like${likes.length > 1 ? 's' : ''}`}
                        </div>
                    </div>
                </>
            ) : (
                <>
                    <div className="tooltip">
                        <ThumbUpAltOutlined fontSize="medium" />
                        <div className="tooltipText" id="likes">
                            {likes.length} {likes.length === 1 ? 'Like' : 'Likes'}
                        </div>
                    </div>
                </>
            );
    }
    return (
        <>
            <div className="tooltip">
                <ThumbUpAltOutlined fontSize="medium" />
                <div className="tooltipText" id="likes">
                    {likes.length} {likes.length === 1 ? 'Like' : 'Likes'}
                </div>
            </div>
        </>
    )           
};
export default Likes;