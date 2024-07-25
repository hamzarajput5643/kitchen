import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const spinnerOverlayStyles: React.CSSProperties = {
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    background: 'rgba(255, 255, 255, 0.7)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 9999,
};

const spinnerStyles: React.CSSProperties = {
    color: 'gray',
};

export const OverlaySpinner = ({
    type = 'light',
}: {
    type?: 'dark' | 'light';
}) => {
    return (
        <div
            style={spinnerOverlayStyles}
            className={`overlay ${type}`}
        >
            <FontAwesomeIcon icon={faSpinner} size="2x" spin style={spinnerStyles} />
        </div>
    );
};