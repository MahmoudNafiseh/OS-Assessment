import React, { useEffect, useState } from 'react';
import {
   Box,
   FormLabel,
   Input,
   Button,
   Image,
   HStack,
   VStack,
} from '@chakra-ui/react';
import Select from 'react-select';
import ImgToBase64 from './ImgToBase64';
const FormPreview = ({
   values,
   MultiValueRemove,
   handleBack,
   handleSubmit,
}) => {
   const [img, setImg] = useState();
   useEffect(async () => {
      setImg(await ImgToBase64(values.profImg));
   }, []);
   return (
      <Box w='100%'>
         <HStack>
            <VStack w='50%' h='20%'>
               <FormLabel>Name</FormLabel>
               <Input readOnly value={values.name} />
               <FormLabel>Date of Birth</FormLabel>
               <Input readOnly type='date' value={values.dob} />
            </VStack>
            <VStack w='50%' h='20%'>
               <FormLabel>Location</FormLabel>
               <Input readOnly value={values.location} />
               <FormLabel>Team</FormLabel>
               <Input readOnly value={values.team} />
            </VStack>
         </HStack>
         <HStack>
            {' '}
            <VStack w='50%' h='20%'>
               <FormLabel>Gender</FormLabel>
               <Select
                  defaultValue={values.gender}
                  components={{ MultiValueRemove }}
                  isDisabled
               />
            </VStack>
            <VStack w='50%' h='20%'>
               <FormLabel>Sports</FormLabel>
               <Select
                  defaultValue={values.sports}
                  components={{ MultiValueRemove }}
                  isDisabled
                  isMulti
               />
            </VStack>
         </HStack>
         <HStack>
            <VStack w='50%' h='20%'>
               <FormLabel>About</FormLabel>
               <Input readOnly value={values.about} />
               <FormLabel>Interests</FormLabel>
               <Input readOnly value={values.interests} />
            </VStack>
            <VStack w='50%' h='20%'>
               <FormLabel>Profile Image</FormLabel>
               <Image src={img} maxW='100px' />
            </VStack>
         </HStack>
         <VStack mt='5'>
            <HStack>
               <Button
                  onClick={handleBack}
                  title='Back'
                  colorScheme={'linkedin'}
                  variant={'solid'}
                  mr='5'
               >
                  Back
               </Button>
               <Button
                  onClick={handleSubmit}
                  title='Submit'
                  colorScheme={'linkedin'}
                  variant={'solid'}
               >
                  Submit
               </Button>
            </HStack>
         </VStack>
      </Box>
   );
};

export default FormPreview;
