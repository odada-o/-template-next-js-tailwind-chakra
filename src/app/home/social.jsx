import {
    Badge,
    Box,
    Button,
    Card,
    CardBody,
    CardFooter,
    Container,
    Heading,
    HStack,
    SimpleGrid,
    Text,
} from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';

const Social = () => {
    return (
        <Container>
            <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} gap='3'>
                <Card maxW='xl' bgColor="gray.100">
                    <CardBody className='flex flex-col gap-4'>
                        <Image
                            objectFit='cover'
                            width={1200}
                            height={1200}
                            src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
                            alt='Caffe Latte'
                        />
                        <Box>
                            <Heading size='md' mb='2'>
                                The perfect latte
                            </Heading>
                            <Text>
                                Caffè latte is a coffee beverage of Italian origin made with espresso and steamed milk.
                            </Text>
                            <HStack mt='4'>
                                <Badge>Hot</Badge>
                                <Badge>Caffeine</Badge>
                            </HStack>
                        </Box>
                    </CardBody>
                    <CardFooter>
                        <Button>Buy Latte</Button>
                    </CardFooter>
                </Card>
                <Card maxW='xl' bgColor="gray.100">
                    <CardBody className='flex flex-col gap-4'>
                        <Image
                            objectFit='cover'
                            width={1200}
                            height={1200}
                            src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
                            alt='Caffe Latte'
                        />
                        <Box>
                            <Heading size='md' mb='2'>
                                The perfect latte
                            </Heading>
                            <Text>
                                Caffè latte is a coffee beverage of Italian origin made with espresso and steamed milk.
                            </Text>
                            <HStack mt='4'>
                                <Badge>Hot</Badge>
                                <Badge>Caffeine</Badge>
                            </HStack>
                        </Box>
                    </CardBody>
                    <CardFooter>
                        <Button>Buy Latte</Button>
                    </CardFooter>
                </Card>
                <Card maxW='xl' bgColor="gray.100">
                    <CardBody className='flex flex-col gap-4'>
                        <Image
                            objectFit='cover'
                            width={1200}
                            height={1200}
                            src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
                            alt='Caffe Latte'
                        />
                        <Box>
                            <Heading size='md' mb='2'>
                                The perfect latte
                            </Heading>
                            <Text>
                                Caffè latte is a coffee beverage of Italian origin made with espresso and steamed milk.
                            </Text>
                            <HStack mt='4'>
                                <Badge>Hot</Badge>
                                <Badge>Caffeine</Badge>
                            </HStack>
                        </Box>
                    </CardBody>
                    <CardFooter>
                        <Button>Buy Latte</Button>
                    </CardFooter>
                </Card>
                <Card maxW='xl' bgColor="gray.100">
                    <CardBody className='flex flex-col gap-4'>
                        <Image
                            objectFit='cover'
                            width={1200}
                            height={1200}
                            src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
                            alt='Caffe Latte'
                        />
                        <Box>
                            <Heading size='md' mb='2'>
                                The perfect latte
                            </Heading>
                            <Text>
                                Caffè latte is a coffee beverage of Italian origin made with espresso and steamed milk.
                            </Text>
                            <HStack mt='4'>
                                <Badge>Hot</Badge>
                                <Badge>Caffeine</Badge>
                            </HStack>
                        </Box>
                    </CardBody>
                    <CardFooter>
                        <Button>Buy Latte</Button>
                    </CardFooter>
                </Card>
            </SimpleGrid>
            <SimpleGrid columns={[2, null, 3, 4, 5]} gap='3'>
                <Box h='20' bg='red.500' />
                <Box h='20' bg='blue.500' />
                <Box h='20' bg='green.500' />
            </SimpleGrid>
        </Container>
    );
};

export default Social;