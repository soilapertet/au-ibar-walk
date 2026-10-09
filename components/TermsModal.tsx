import TermsAndConditions from "./TermsAndConditions";

interface TermsModalProps {
    open: boolean;
    onClose: () => void;
}

export default function TermsModal({ open, onClose }: TermsModalProps) {

    if (!open) return null;

    return (
        <section className="modal terms-modal">
            <div className="modalbox" onClick={(e) => e.stopPropagation()}>
                <button className="close" onClick={onClose}>×</button>
                <div className="modal-scroll">
                    <TermsAndConditions />
                </div>
            </div>
        </section>
    )
}