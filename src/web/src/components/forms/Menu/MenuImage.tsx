import React, { useEffect, useState, useRef } from "react";
import { ImageResponse } from "@app/app/interfaces/Response";
import { getMenuPics } from "@app/services/api";

const MenuImage = ({ menuItemId }: { menuItemId: number }) => {
    const [menuItemPhotos, setMenuItemPhotos] = useState<ImageResponse[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const fetchMenuItemPhotos = async () => {
            setLoading(true);
            try {
                const response = await getMenuPics(menuItemId);
                setMenuItemPhotos(response);
            } catch (error) {
                console.error("Error fetching images:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchMenuItemPhotos();
    }, [menuItemId]);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (menuItemPhotos.length === 0) {
        return <p>No images available.</p>;
    }

    return (
        <div className="d-flex flex-wrap justify-content-center" ref={containerRef}>
            {menuItemPhotos.map((photo, index) => (
                <div key={index} className="col-3">
                    <img
                        alt={photo.fileName ?? "Menu Item Photo"}
                        src={`data:${photo.contentType ?? "image/jpeg"};base64,${photo.base64Data}`}
                        className="img-thumbnail"
                        style={{ maxWidth: '100%', maxHeight: '300px' }}
                        loading="lazy"
                    />
                </div>
            ))}
        </div>
    );
}

export default MenuImage;