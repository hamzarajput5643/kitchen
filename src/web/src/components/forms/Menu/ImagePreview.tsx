import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";
import "./MenuHome.scss";

const ImagePreview: React.FC<{ imagePreviews: string[], onDelete: (index: number) => void }> = ({ imagePreviews, onDelete }) => (
    <div className="row mt-3">
        {imagePreviews.map((preview, index) => (
            <div className="col-md-3" key={index}>
                <div className="image-box">
                    <img
                        src={preview}
                        alt={`Preview ${index}`}
                        className="img-thumbnail"
                        style={{ height: "180px" }}
                    />
                    <button className="delete-btn" onClick={() => onDelete(index)}>
                        <FaTrash />
                    </button>
                </div>
            </div>
        ))}
    </div>
);

export default ImagePreview;