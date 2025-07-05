# Relógio Digital em JavaScript

Este projeto é um **relógio digital** desenvolvido em **JavaScript**, que exibe a hora atual de forma dinâmica e em tempo real, com formatação de hora, minuto e segundo. Ele também exibe a data e o dia da semana.

## Funcionalidades

- **Exibição da hora**: Mostra a hora, minuto e segundo atual de forma dinâmica.
- **Atualização em tempo real**: A hora é atualizada a cada segundo, oferecendo uma visualização precisa do momento atual.
- **Exibição do dia da semana**: Exibe o dia da semana (como SEG, TER, etc.).
- **Exibição da data**: Mostra a data no formato **DD/MM/AAAA**.
- **Interface de relógio tradicional e smart**: A aplicação conta com duas formas de exibir a hora — um relógio tradicional e um formato "smart".

## Como Funciona

### 1. Relógio Digital

A função `moveRelogio()` é responsável por atualizar a hora a cada segundo. A cada execução, ela pega a hora atual, formata os valores de hora, minuto e segundo (adicionando um zero à esquerda se necessário) e os exibe no formato correto.

### 2. Data e Dia da Semana

A função `pegarDia()` obtém a data atual e formata o dia da semana, exibindo-o como **SEG**, **TER**, **QUA**, etc. Ela também exibe a data no formato **DD/MM/AAAA**, com o mês e o dia ajustados para garantir que sempre apareçam com dois dígitos.

### 3. Atualização Automática

O relógio é atualizado automaticamente a cada segundo utilizando `setTimeout()` para chamar a função `moveRelogio()`. Isso garante que a hora seja constantemente atualizada.

## Estrutura do Projeto
![image](https://github.com/user-attachments/assets/1a6550a4-4b65-4491-92c2-9f6646b60f38)

