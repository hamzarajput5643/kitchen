import React, { useState, useEffect } from 'react';
import useCompressedImage from '@app/hooks/useCompressedImg';
import { FaTrash } from 'react-icons/fa';

const style = {
    iconDelete: {
        top: "8px",
        right: "10px"
    }
};

interface ImageUtilsProps {
    imageUrl: string;
    onDelete?: () => void;
}

export const ImageUtils: React.FC<ImageUtilsProps> = ({ imageUrl, onDelete }) => {
    const { compressedImage, error, loading } = useCompressedImage(imageUrl);
    const [hovered, setHovered] = useState(false);
    const [imageLoaded, setImageLoaded] = useState(false);

    useEffect(() => {
        if (compressedImage) {
            const img = new Image();
            img.onload = () => setImageLoaded(true);
            img.onerror = () => setImageLoaded(false);  // Handle image load errors
            img.src = compressedImage;
        }
    }, [compressedImage]);

    if (error) {
        return <div>Error: {error}</div>;
    }

    const handleMouseEnter = () => {
        setHovered(true);
    };

    const handleMouseLeave = () => {
        setHovered(false);
    };

    const handleDelete = () => {
        if (onDelete) {
            onDelete();
        }
    };

    return (
        <div
            className="position-relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {loading ? (
                <p>Loading...</p>
            ) : imageLoaded ? (
                <>
                    <img
                        src={compressedImage || ''}
                        alt="Compressed Image"
                        className="img-thumbnail"
                        style={{ height: "180px" }}
                    />
                    {hovered && (
                        <div className="position-absolute" style={style.iconDelete}>
                            <button className="btn btn-sm btn-danger" onClick={handleDelete}>
                                <FaTrash className='icon-delete' />
                            </button>
                        </div>
                    )}
                </>
            ) : (
                <p>Image failed to load</p>
            )}
        </div>
    );
};