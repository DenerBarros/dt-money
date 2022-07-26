import { Container } from "./styles";

export function TransactionsTable() {
    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Desenvolvimento de WebSite</td>
                        <td className="deposit">R$12000,00</td>
                        <td>Desenvolvimento</td>
                        <td>26/07/2022</td>
                    </tr>
                    <tr>
                        <td>Alguel</td>
                        <td className="withdraw">-R$1100,00</td>
                        <td>Casa</td>
                        <td>10/07/2022</td>
                    </tr>                   
                </tbody>
            </table>
        </Container>

    );
}