import React from 'react';
import { Box, FormLabel, Input, Button } from '@chakra-ui/react';
const Form3 = ({
  about,
  profImg,
  interests,
  handleNext,
  handleChange,
  handleBlur,
  handleBack,
  setFieldValue,
}) => {
  return (
    <Box>
      <FormLabel>About</FormLabel>
      <Input
        onChange={handleChange('about')}
        onBlur={handleBlur('about')}
        value={about}
      />
      <FormLabel>Interests</FormLabel>
      <Input
        type="text"
        onChange={handleChange('interests')}
        onBlur={handleBlur('interests')}
        value={interests}
      />
      <FormLabel>Image</FormLabel>
      <Input
        type="file"
        accept="image/*"
        onChange={value =>
          setFieldValue('profImg', value.currentTarget.files[0])
        }
        isRequired={true}
      />
      <Box mt="5">
        <Button
          onClick={handleBack}
          title="Back"
          colorScheme={'linkedin'}
          variant={'solid'}
          mr="5"
        >
          Back
        </Button>
        <Button
          onClick={handleNext}
          title="Next"
          colorScheme={'linkedin'}
          variant={'solid'}
        >
          Next
        </Button>
      </Box>
    </Box>
  );
};

export default Form3;
