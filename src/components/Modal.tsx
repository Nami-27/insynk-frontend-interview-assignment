import React from "react";
import "./index.css";

interface Props {
  heading?: string;
  content: string | React.ReactNode;
  onConfirm: () => void;
  onCancel: () => void;
}

export const Modal: React.FC<Props> = ({
  heading,
  content,
  onConfirm,
  onCancel,
}) => {
  return (
    <div className="modal">
      <div className="modal-content">
        {heading && (
          <div className="modal-header">
            <h3>{heading}</h3>
            <button className="close-btn" onClick={onCancel}>
              &times;
            </button>
          </div>
        )}
        <div className="modal-body">{content}</div>
        <div className="modal-footer">
          <button className="cancel-btn" onClick={onCancel}>
            Cancel
          </button>
          <button className="confirm-btn" onClick={onConfirm}>
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};
