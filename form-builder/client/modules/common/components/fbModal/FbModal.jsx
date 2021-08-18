import React, { useState, useEffect } from 'react';
import { Modal } from 'react-bootstrap';

const FbModal = ({title, bodyComponent, onModalClose}) => {
    const [isOpen, setIsOpen] = useState(false);

    const hideModal = () => {
        console.log('hiding modal');
        setIsOpen(false);
        onModalClose();
    };

    useEffect(() => {
        setIsOpen(true);
    }, []);

    return (
        <Modal animation={false} show={isOpen} onHide={hideModal} onExit={hideModal}>
            <Modal.Header>
                <Modal.Title>
                    <h5>{title}</h5>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {bodyComponent}
            </Modal.Body>
            <Modal.Footer>
                <button className="button secondary-button" onClick={hideModal}>Cancel</button>
                <button className="button">Save</button>
            </Modal.Footer>
        </Modal>
    )
}

export default FbModal;