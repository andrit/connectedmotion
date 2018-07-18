import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
`;

class ItemPage extends Component {
    render() {
        return (
            <Wrapper>
                Item Page
            </Wrapper>
        );
    }
}

export default ItemPage;