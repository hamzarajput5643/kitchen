import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

export const OverlayLoading = ({
    type = 'light',
}: {
    type?: 'dark' | 'light';
}) => {
    return (
        <div className={`overlay ${type}`}>
            <FontAwesomeIcon icon={faSpinner} size="2x" spin />
        </div>
    );
};