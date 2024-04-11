import React from 'react';
import { Box, Flex, Text, Image, HStack, VStack } from '@chakra-ui/react';
import { FaChevronRight } from 'react-icons/fa'
const ProductMessage = ({ productName, productCount }) => {
    return (
        <VStack display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="flex-start"
            
            gap="10px"
            width="250px"
            height="141px"
            pb={5}
        >
            <Box
                p={3}
                padding="10px"
                borderRadius="20px"
                background="linear-gradient(114.92deg, #E6EEFF 34.14%, #FAFCFF 105.26%)"
            >
                <Flex
                    display="flex"
                    flexDirection="row"
                    justifyContent="center"
                    alignItems="center"
                    padding="10px 15px"
                    gap="11px"
                    width="230px"
                    height="71px"
                    background="#FFFFFF"
                    borderRadius="10px"
                >
                    <Image ml={9} width="70px" height="50px" src="./bag.jpg" borderRadius="5px" />
                    <Flex flexDirection="column" alignItems="flex-start" padding="0px 5px" gap="7px">
                        <Flex flexDirection="row" justifyContent="center" alignItems="center" padding="0px" gap="5px">
                            <Box width="89px" height="20px" fontWeight="500" fontSize="13px" lineHeight="20px" color="#333333">Bags on Timpu</Box>
                            <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.26627 1.34286C7.823 0.89984 8.60749 0.884695 9.18089 1.30589L9.84212 1.7916C10.1127 1.99033 10.4396 2.0975 10.7753 2.0975H11.6785C12.3701 2.0975 12.981 2.54834 13.1848 3.20923L13.4164 3.96027C13.5153 4.2811 13.7141 4.56195 13.9838 4.76192L14.7539 5.33297C15.3173 5.75071 15.5369 6.49045 15.2927 7.14793L15.0271 7.86319C14.8995 8.20677 14.8956 8.58408 15.0161 8.93022L15.324 9.8147C15.5506 10.4657 15.3279 11.1885 14.7742 11.5991L13.9838 12.1852C13.7141 12.3851 13.5153 12.666 13.4164 12.9868L13.1848 13.7378C12.981 14.3987 12.3701 14.8496 11.6785 14.8496H10.7753C10.4396 14.8496 10.1127 14.9568 9.84212 15.1555L9.10885 15.6941C8.56994 16.09 7.83992 16.1027 7.28752 15.7259L6.4045 15.1236C6.14272 14.9451 5.8332 14.8496 5.51632 14.8496H4.70395C4.02992 14.8496 3.43047 14.421 3.21245 13.7832L2.92501 12.9424C2.82482 12.6493 2.6405 12.3922 2.39508 12.2032L1.61477 11.6025C1.07689 11.1884 0.864543 10.4764 1.08772 9.83531L1.4028 8.93021C1.52329 8.58408 1.5194 8.20678 1.3918 7.8632L1.11844 7.12716C0.87792 6.47957 1.08711 5.75082 1.63449 5.3294L2.39508 4.74384C2.6405 4.55488 2.82482 4.29781 2.92501 4.00472L3.21245 3.16388C3.43047 2.52608 4.02992 2.0975 4.70395 2.0975H5.76732C6.12384 2.0975 6.46983 1.97663 6.7488 1.75464L7.26627 1.34286Z" fill="#FFED8C" />
                                <path d="M12.2372 7.84304L9.08468 10.9955L8.45418 10.365" fill="#F2CF18" />
                                <path d="M4.0407 8.47354L6 10C6.36167 10.366 6.51989 10.3973 6.89345 10.0434L11.6785 5.5725M12.2372 7.84304L9.08468 10.9955L8.45418 10.365M13.9838 12.1852L14.7742 11.5991C15.3279 11.1885 15.5506 10.4657 15.324 9.8147L15.0161 8.93022C14.8956 8.58408 14.8995 8.20677 15.0271 7.86319L15.2927 7.14793C15.5369 6.49045 15.3173 5.75071 14.7539 5.33297L13.9838 4.76192C13.7141 4.56195 13.5153 4.2811 13.4164 3.96027L13.1848 3.20923C12.981 2.54834 12.3701 2.0975 11.6785 2.0975H10.7753C10.4396 2.0975 10.1127 1.99033 9.84212 1.7916L9.18089 1.30589C8.60749 0.884695 7.823 0.89984 7.26627 1.34286L6.7488 1.75464C6.46983 1.97663 6.12384 2.0975 5.76732 2.0975H4.70395C4.02992 2.0975 3.43047 2.52608 3.21245 3.16388L2.92501 4.00472C2.82482 4.29781 2.6405 4.55488 2.39508 4.74384L1.63449 5.3294C1.08711 5.75082 0.87792 6.47957 1.11844 7.12716L1.3918 7.8632C1.5194 8.20678 1.52329 8.58408 1.4028 8.93021L1.08772 9.83531C0.864543 10.4764 1.07689 11.1884 1.61477 11.6025L2.39508 12.2032C2.6405 12.3922 2.82482 12.6493 2.92501 12.9424L3.21245 13.7832C3.43047 14.421 4.02992 14.8496 4.70395 14.8496H5.51632C5.8332 14.8496 6.14272 14.9451 6.4045 15.1236L7.28752 15.7259C7.83992 16.1027 8.56995 16.09 9.10885 15.6941L9.84212 15.1555C10.1127 14.9568 10.4396 14.8496 10.7753 14.8496H11.6785C12.3701 14.8496 12.981 14.3987 13.1848 13.7378L13.4164 12.9868C13.5153 12.666 13.7141 12.3851 13.9838 12.1852Z" stroke="#F2CF18" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>                    </Flex>
                        <Flex mt={3} flexDirection="row" justifyContent="space-between" alignItems="center" padding="0px" gap="5px">
                            <HStack width="123.41px" height="24px">
                                <Text fontWeight="400" fontSize="12px" lineHeight="18px" color="#949494">1123 products</Text>
                                <FaChevronRight width={6} height={6} color='#949494' />
                            </HStack>
                            <Box width="24px" height="24px" />
                        </Flex>
                    </Flex>
                </Flex>
                <Text mt={2} width="230px" height="40px" fontWeight="400" fontSize="13px" lineHeight="20px" color="black">
                    Or set filter and help us choose the best bag for you.
                </Text>
            </Box>
            <Text ml={2} fontSize="12px" color="gray.700">
                14:48
            </Text>
        </VStack>
    );
};

export default ProductMessage;
