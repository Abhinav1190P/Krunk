import React from 'react'
import { HStack, Input, InputGroup, InputRightElement, IconButton, VStack, Text, Image } from '@chakra-ui/react'
import { AttachmentIcon } from '@chakra-ui/icons';
import { FaChevronRight } from 'react-icons/fa'

export default function SendMessage() {
    return (
        <VStack spacing={0} borderBottomLeftRadius={'20px'} borderBottomRightRadius={'20px'} bg={'linear-gradient(to left, rgba(229,238,255,0.3), #E5EEFF)'}>
            <HStack mt={1} p={2} d="flex" alignItems="flex-end">
                <InputGroup>
                    <Input size={'md'} p={3} borderRadius={10} bg={'white'} placeholder="Type your message..." />
                    <InputRightElement>
                        <IconButton
                            aria-label="Attachment"
                            icon={<AttachmentIcon />}
                            variant="ghost"
                            colorScheme="gray"
                        />
                    </InputRightElement>
                </InputGroup>
                <IconButton bg={'#4C82EF'} w={'90px'} icon={<FaChevronRight />} colorScheme="blue" />
            </HStack>
            <Text pb={2} fontSize="sm" color="#B1B1B1" display="flex" alignItems="center" justifyContent={'center'}>
                Powered by {' '}
                <Text ml={1} as="span" fontWeight="bold">
                    Krunk.ai
                </Text>
                <Image mr={1} src='./krun.png' w={10} h={10} />
            </Text>

        </VStack>
    )
}
