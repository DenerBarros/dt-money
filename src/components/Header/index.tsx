import { useState } from 'react';
import logoImg from '../../assets/logo.svg';
import Modal from 'react-modal';
import { Container, Content } from './styles';

interface HeaderProps {
  onOpenNewransactionModal: () => void;
}

export function Header({ onOpenNewransactionModal }: HeaderProps) {

  return (
    <Container>
        <Content>
            <img src={logoImg} alt="dbmoney" />
            <button type="button" onClick={onOpenNewransactionModal}>
                Nova Transação
            </button>
           
        </Content>
    </Container>
  )
}

