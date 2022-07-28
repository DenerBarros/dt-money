import { Container } from "./styles";
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';

import { useTransactions } from "../../hooks/useTransactions";


export  function Summary() { 
  const { transactions } = useTransactions(); 

 

  const sumary = transactions.reduce((acc, transaction) =>{
    if (transaction.type ==='deposit') {
      acc.deposits += transaction.amount;
      acc.total += transaction.amount;
  } else {
    acc.withdraw += transaction.amount;
    acc.total -= transaction.amount;
  }

  return acc;
  },{
    deposits: 0,
    withdraw: 0,
    total: 0,
  })

  return (

    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="Entradas" />
        </header>
        <strong>
          {new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL'
          }).format(sumary.deposits)}          
          </strong>
      </div>
      <div>
        <header>
          <p>Saída</p>
          <img src={outcomeImg} alt="Saidas" />
        </header>
        <strong>-   
          {new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL'
          }).format(sumary.withdraw)}    
        </strong>
      </div>
      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Saidas" />
        </header>
        <strong>
          {new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL'
          }).format(sumary.total)} 
        </strong>
      </div>
    </Container>
  )
}
