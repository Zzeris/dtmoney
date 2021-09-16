import Modal from 'react-modal'
import closeImg from '../../assets/close.svg'
import { Container } from './styles'

interface NewTransactionModalProps {
    isOpem: boolean
    onRequestClose: () => void
}

export function NewTransactionModal({isOpem, onRequestClose}: NewTransactionModalProps) {
    return(
        <Modal
            isOpen={isOpem}
            onRequestClose={onRequestClose}
            className="react-modal-content"
            overlayClassName="react-modal-overlay"
        >

            <button
                type="button"
                onClick={onRequestClose}
                className="react-modal-close"
            >
                <img src={closeImg} alt="Fechar"/>
            </button>

            <Container>
                <h2>Cadastrar transação</h2>

                <input
                    placeholder="Título"
                />

                <input
                    type="number"
                    placeholder="Valor"
                />

                <input
                    placeholder="Categoria"
                />

                <button type="submit" className="submit-button">Cadastrar</button>
            </Container>
        </Modal>
    )
}