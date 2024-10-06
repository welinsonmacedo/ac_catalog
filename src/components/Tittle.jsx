import React from 'react';
import styled from 'styled-components';

// Definindo os componentes estilizados
const Content = styled.p`
font-size: 7em;
font-weight:400;
padding-left: 15px;
@media (max-width: 768px) {
  padding: 20px;
  }
`;
const ContentSub = styled.h2`

`;
const Container = styled.div`
display:flex;
align-items: center;
border-bottom: 2px dashed #d6d862;
`;



function Title() {
    return (
        <Container>
            <Content>
                AC

            </Content>
            <ContentSub>
                Ângela Campos
            </ContentSub>

        </Container>
    );
}

export default Title;
