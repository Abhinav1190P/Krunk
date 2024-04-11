import React, { useState } from 'react';
import { Flex, Text, IconButton } from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';

export default function Filters() {
  const initialSelectedTags = ['Strap - Long']; 
  const [selectedTags, setSelectedTags] = useState(initialSelectedTags);

  const handleTagClick = (tag) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((selectedTag) => selectedTag !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  return (
    <Flex
      mt={2}
      display="flex"
      flexDirection="row"
      flexWrap="wrap"
      alignItems="flex-start"
      alignContent="flex-start"
      padding="0px"
      gap="10px"
      width="100%"
      height="58px"
    >
      <Tag text="Strap - Long" selected={selectedTags.includes('Strap - Long')} onClick={() => handleTagClick('Strap - Long')} />
      <Tag text="Colour" selected={selectedTags.includes('Colour')} onClick={() => handleTagClick('Colour')} />
      <Tag text="Size" selected={selectedTags.includes('Size')} onClick={() => handleTagClick('Size')} />
      <Tag text="Brand" selected={selectedTags.includes('Brand')} onClick={() => handleTagClick('Brand')} />
      <Tag text="Material" selected={selectedTags.includes('Material')} onClick={() => handleTagClick('Material')} />
    </Flex>
  );
}

function Tag({ text, selected, onClick }) {
  return (
    <Flex
      backgroundColor={selected ? '#F6F9FF' : '#F4F4F4'}
      borderRadius="md"
      pl={2}
      h={'30px'}
      alignItems="center"
      border={selected ? '1px' : 'none'}
      borderColor={selected ? '#4C82EF' : 'transparent'}
      cursor="pointer"
      onClick={onClick}
    >
      <Text color={selected ? '#4C82EF' : 'black'} fontSize={'12px'}>{text}</Text>
      <IconButton
        aria-label="Close tag"
        icon={<CloseIcon />}
        size={'sm'}
        fontSize={'x-small'}
        ml={2}
        w={'5px'}
        variant="ghost"
        colorScheme="blackAlpha"
        display={selected ? 'block' : 'block'}
      />
    </Flex>
  );
}
