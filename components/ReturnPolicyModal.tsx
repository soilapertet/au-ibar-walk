import RefundPolicy from "./ReturnPolicy";
import { X } from "lucide-react";

interface RefundModalProps {
    open: boolean;
    onClose: () => void;
}

export default function RefundModal({ open, onClose }: RefundModalProps) {
    
    if (!open) return null;

    return (
        <div className="modal-backdrop" onClick={onClose}>
            <div className="modal-container" onClick={(e) => e.stopPropagation()}>
               
                {/* Sticky Header with a Prominent Close Button */}
                <div className="modal-sticky-header">
                    <span className="modal-badge">Official Policy</span>
                    <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
                        <X size={18} />
                    </button>
                </div>

                {/* Scrollable Body */}
                <div className="modal-scroll-body">
                    <RefundPolicy />
                </div>

                {/* Bottom Action Footer for Easy Exit */}
                <div className="modal-sticky-footer">
                    <button className="modal-action-btn" onClick={onClose}>
                        I Understand, Close
                    </button>
                </div>

            </div>
        </div>
    );
}