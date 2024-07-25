import { useEffect, useState } from "react";
import imageCompression from "browser-image-compression";

const base64ToBlob = (base64Data: string, contentType = 'image/jpeg'): Blob => {
    const byteCharacters = atob(base64Data);
    const byteArrays: Uint8Array[] = [];
    for (let offset = 0; offset < byteCharacters.length; offset += 512) {
        const slice = byteCharacters.slice(offset, offset + 512);
        const byteNumbers = new Array(slice.length);
        for (let i = 0; i < slice.length; i++) {
            byteNumbers[i] = slice.charCodeAt(i);
        }
        byteArrays.push(new Uint8Array(byteNumbers));
    }
    return new Blob(byteArrays, { type: contentType });
};

const compressBase64Image = async (base64Data: string): Promise<string> => {
    const blob = base64ToBlob(base64Data);
    const file = new File([blob], "image.jpg", { type: blob.type, lastModified: Date.now() });

    const options = {
        maxSizeMB: 0.5,  // Adjust size if needed
        maxWidthOrHeight: 1280,  // Adjust resolution if needed
        useWebWorker: true
    };

    const compressedFile = await imageCompression(file, options);
    return URL.createObjectURL(compressedFile);
};

const useCompressedImage = (base64Data: string) => {
    const [compressedImage, setCompressedImage] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        if (!base64Data) {
            setCompressedImage(null);
            return;
        }

        const processImage = async () => {
            setLoading(true);
            try {
                const compressedImageUrl = await compressBase64Image(base64Data);
                setCompressedImage(compressedImageUrl);
                setError(null);
            } catch (err) {
                console.error('Image processing failed:', err);
                setError('Image processing failed. Please try again.');
            } finally {
                setLoading(false);
            }
        };

        processImage();

        return () => {
            if (compressedImage) {
                URL.revokeObjectURL(compressedImage);
            }
        };
    }, [base64Data]);

    return { compressedImage, error, loading };
};

export default useCompressedImage;