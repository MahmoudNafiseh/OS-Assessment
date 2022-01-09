import React from 'react';
import { Box, FormLabel, Input, Button } from '@chakra-ui/react';
const Form1 = ({
   name,
   dob,
   location,
   handleNext,
   handleChange,
   handleBlur,
   handleBack,
}) => {
   return (
      <Box>
         <FormLabel>Name</FormLabel>
         <Input
            onChange={handleChange('name')}
            // onBlur={handleBlur('name')}
            value={name}
            isRequired
         />
         <FormLabel>Date of Birth</FormLabel>
         <Input
            type='date'
            onChange={handleChange('dob')}
            onBlur={handleBlur('dob')}
            value={dob}
         />
         <FormLabel>Location</FormLabel>
         <Input
            onChange={handleChange('location')}
            onBlur={handleBlur('location')}
            value={location}
         />
         <Box mt='5'>
            <Button
               onClick={handleNext}
               title='Next'
               colorScheme={'linkedin'}
               variant={'solid'}
            >
               Next
            </Button>
         </Box>
      </Box>
   );
};

export default Form1;
