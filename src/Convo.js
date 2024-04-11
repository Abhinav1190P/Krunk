import React from 'react';
import { Box, Text, Flex } from '@chakra-ui/react';

const ChatMessage = ({ message, timestamp, fromWho }) => {
    const isMe = fromWho === 'me';

    return (
        <Flex w="100%" justifyContent={isMe ? 'flex-end' : 'flex-start'}>
            <Flex
                flexDirection="column"
                alignItems={isMe ? 'flex-end' : 'flex-start'}
                mb={2}
                maxW="70%"
                ml={isMe ? 'auto' : 0}
            >
                <Box
                    borderRadius="20px"
                    bg={isMe ? "#DCF7C5" : "linear-gradient(to left, rgba(229,238,255,0.3), #E5EEFF)"}
                    p={3}
                    textAlign={isMe ? 'right' : 'left'}
                >
                    <Text size="sm">{message}</Text>
                </Box>
                <Text ml={2} mt={2} fontSize="12px" color="gray.700">
                    {timestamp}
                </Text>
            </Flex>
        </Flex>
    );
};

export default ChatMessage;
