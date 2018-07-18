import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const Item =  styled.div`
    width: 33%;
    padding: 24px;
`;
const Image =  styled.div`
    width: 100%;
    height: 200px;
    background: url('${(props) => props.image}');
    background-size: cover;
    background-position: center;
`;
const Name =  styled.h4`
`;

const ItemsGrid = ({items}) => (
    <Wrapper>
        {items.map((item, index) => (
            <Item key={index}>
                <Image
                    image={item.picture}
                />
                <Name>{item.name}</Name>
            </Item>
        ))}
    </Wrapper>
);

ItemsGrid.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        picture: PropTypes.string.isRequired,
    })).isRequired,
};

export default ItemsGrid;