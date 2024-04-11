import React from 'react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import 'react-horizontal-scrolling-menu/dist/styles.css';
import { Box } from '@chakra-ui/react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Text } from '@chakra-ui/react'
const Tags = () => {
    const tags = ['Clutch', 'Fabric lining', 'Baggit', 'Multi Compartment', 'Clutch', 'Fabric lining', 'Baggit', 'Multi Compartment']

    const [selected, setSelected] = React.useState([]);

    const isItemSelected = (tag) => !!selected.find((el) => el === tag);

    const handleClick = (tag) => ({ getItemById, scrollToItem }) => {
        const itemSelected = isItemSelected(tag);

        setSelected((currentSelected) =>
            itemSelected ? currentSelected.filter((el) => el !== tag) : currentSelected.concat(tag)
        );
    };

    return (
        <ScrollMenu scrollContainerClassName='hidden' LeftArrow={LeftArrow} RightArrow={RightArrow}>
            {tags.map((tag, index) => (
                <Tag

                    tag={tag}
                    key={index}
                    selected={isItemSelected(tag)}
                />
            ))}
        </ScrollMenu>
    );
};

const LeftArrow = () => {
    const visibility = React.useContext(VisibilityContext);
    const isFirstItemVisible = visibility.useIsVisible('first', false);
    return (
        <Box
            as={FaChevronLeft}
            className="arrow"
            style={{ cursor: isFirstItemVisible ? 'not-allowed' : 'pointer', justifyContent: 'center' }}
            mt={4}
            onClick={() => visibility.scrollPrev()}
            disabled={isFirstItemVisible}
            display={isFirstItemVisible ? 'none' : 'flex'}
            color={'#4C82EF'}
        />
    );
};

const RightArrow = () => {
    const visibility = React.useContext(VisibilityContext);
    const isLastItemVisible = visibility.useIsVisible('last', false);
    return (
        <Box
            as={FaChevronRight}
            className="arrow"
            style={{ cursor: isLastItemVisible ? 'not-allowed' : 'pointer', justifyContent: 'center' }}
            onClick={() => visibility.scrollNext()}
            disabled={isLastItemVisible}
            mt={4}
            mr={'-2px'}
            minW={'10px'}
            color={'#4C82EF'}
            display={isLastItemVisible ? 'none' : 'flex'}
        />
    );
};

const Tag = ({ tag, onClick, selected }) => {
    return (
        <Box
            borderRadius="md"
            p={2}
            m={1}
            w={'max-content'}
            cursor="pointer"
            bg={'#F2F7FF'}
            border={'2px'}
            fontSize={'small'}
            color={'#4C82EF'}
            fontWeight={600}
            borderColor={'#4C82EF'}
        >
            {tag}
        </Box>
    );
};

export default Tags;
