import React, { useState, useEffect } from 'react';

import {
   Box,
   Text,
   Avatar,
   Heading,
   Flex,
   HStack,
   VStack,
} from '@chakra-ui/react';

const ProfileItem = ({ profile }) => {
   let date =
      new Date(profile.dob).toString().slice(4, 10) +
      ', ' +
      new Date(profile.dob).toString().slice(11, 15);
   let img = profile.profImg;
   const RenderSports = () => {
      return profile.sports.map((item) => <li>{item.label}</li>);
   };
   return (
      <Box
         mb='5'
         p='5'
         bg='gray.300'
         maxW={{ base: '100%', md: '60%', lg: '50%' }}
         rounded={20}
      >
         <VStack alignItems={'flex-start'} w='100%'>
            <HStack>
               <Avatar src={img} size={'lg'} />
            </HStack>
            <Flex>
               <Box>
                  <Text>Name: {profile.name}</Text>
               </Box>
               <Box ml='10'>
                  <Text>Date of Birth: {date}</Text>
               </Box>
            </Flex>
            <Flex>
               <Box>
                  <Text>Team: {profile.team} </Text>
               </Box>{' '}
               <Box ml='10'>
                  <Text>Location: {profile.location} </Text>
               </Box>
            </Flex>
            <Text>Gender: {profile.gender.label}</Text>
            <Flex>
               <Box>
                  <Text>Sports: </Text>
               </Box>
               <Box ml='10'>
                  <ul>
                     <RenderSports />
                  </ul>
               </Box>
            </Flex>
            <Flex>
               <Box>
                  <Text>Interests: &nbsp;{profile.interests} </Text>
               </Box>
            </Flex>
            <Flex>
               <Box>
                  <Text>About: {profile.about} </Text>
               </Box>
            </Flex>
         </VStack>
      </Box>
   );
};
export default ProfileItem;
