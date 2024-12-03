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

const cardData = [
    {
        id: 1,
        title: 'The perfect latte',
        description: 'Caffè latte is a coffee beverage of Italian origin made with espresso and steamed milk.',
        imageUrl: 'https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60',
        badges: ['Hot', 'Caffeine'],
        buttonText: 'Buy Latte',
    },
    {
        id: 2,
        title: 'Cold Brew Delight',
        description: 'Cold brew is steeped in cool water for hours, creating a refreshing and smooth coffee.',
        imageUrl: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60',
        badges: ['Cold', 'Smooth'],
        buttonText: 'Try Cold Brew',
    },
    {
        id: 3,
        title: 'Classic Cappuccino',
        description: 'Cappuccino is a classic Italian coffee drink that’s best known for its rich flavor.',
        imageUrl: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60',
        badges: ['Foamy', 'Rich'],
        buttonText: 'Order Cappuccino',
    },
    {
        id: 4,
        title: 'Espresso Shot',
        description: 'A concentrated shot of coffee with a bold and intense flavor, perfect for a quick boost.',
        imageUrl: 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60',
        badges: ['Bold', 'Intense'],
        buttonText: 'Get Espresso',
    },
];

const cardData2 = [
    {
        id: 1,
        title: 'The perfect latte',
        description: 'Caffè latte is a coffee beverage of Italian origin made with espresso and steamed milk.',
        imageUrl: 'https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60',
        badges: ['Hot', 'Caffeine'],
    },
    {
        id: 2,
        title: 'The perfect latte',
        description: 'Caffè latte is a coffee beverage of Italian origin made with espresso and steamed milk.',
        imageUrl: 'https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60',
        badges: ['Hot', 'Caffeine'],
    },
];


const Social = () => {
    return (
        <div className='container'>
            <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} className='gap-4'>
                {cardData.map((card, index) => (
                    <Card key={card.id} maxW='xl' bgColor="gray.100">
                        <CardBody className='flex flex-col gap-4'>
                            <Image
                                objectFit='cover'
                                width={1200}
                                height={1200}
                                src={card.imageUrl}
                                alt={card.title}
                                className='aspect-square object-cover'
                            />
                            <Box>
                                <Heading size='md' className='line-clamp-1 mb-2'>
                                    {card.title}
                                </Heading>
                                <Text className='line-clamp-2'>
                                    {card.description}
                                </Text>
                                <HStack className='mt-4'>
                                    {card.badges.map((badge, index) => (
                                        <Badge key={index} className='bg-white'>{badge}</Badge>
                                    ))}
                                </HStack>
                            </Box>
                        </CardBody>
                        <CardFooter>
                            <Button>{card.buttonText}</Button>
                        </CardFooter>
                    </Card>
                ))}
            </SimpleGrid>
            <SimpleGrid columns={{base: 1, xl: 2}} className='gap-4 mt-4'>
                {cardData2.map((card) => (
                    <Card key={card.id} bgColor="gray.100">
                    <CardBody className='flex flex-col md:flex-row gap-4'>
                        <Image
                            className='w-1/3'
                            objectFit='cover'
                            width={1200}
                            height={1200}
                            src={card.imageUrl}
                            alt={card.title}
                        />
                        <Box>
                            <Heading size='md' mb='2'>
                                {card.title}
                            </Heading>
                            <Text>
                                {card.description}
                            </Text>
                            <HStack mt='4'>
                                {card.badges.map((badge, index) => (
                                    <Badge key={index}>{badge}</Badge>
                                ))}
                                
                            </HStack>
                        </Box>
                    </CardBody>
                </Card>
                ))}
            </SimpleGrid>
        </div>
    );
};

export default Social;