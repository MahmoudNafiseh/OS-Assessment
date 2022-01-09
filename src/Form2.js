import React, { useState, useEffect } from 'react';
import { Box, FormLabel, Input, Button } from '@chakra-ui/react';
import Select from 'react-select';
import { options } from './Options';
const Form2 = ({
  team,
  gender,
  sports,
  handleNext,
  handleChange,
  handleBlur,
  setFieldValue,
  setFieldTouched,
  handleBack,
}) => {
  const genderOptions = [
    { label: 'Male', value: 'male' },
    { label: 'Female', value: 'female' },
    { label: 'Non-binary', value: 'non-binary' },
    { label: 'Other', value: 'other' },
    { label: 'Prefer Not to Answer', value: 'prefer not to answer' },
  ];
  return (
    <Box>
      <FormLabel>Team</FormLabel>
      <Input
        onChange={handleChange('team')}
        onBlur={handleBlur('team')}
        value={team}
      />
      <FormLabel>Gender</FormLabel>
      {/* <Input
        onChange={handleChange('gender')}
        onBlur={handleBlur('gender')}
        value={gender}
      /> */}
      <Select
        defaultValue={gender}
        onChange={value => setFieldValue('gender', value)}
        onBlur={setFieldTouched}
        options={genderOptions}
        value={gender}
      />

      <FormLabel>Sports</FormLabel>
      {/* <Input
        onChange={handleChange('sports')}
        onBlur={handleBlur('sports')}
        value={sports}
      /> */}
      <Select
        defaultValue={sports}
        onChange={value => setFieldValue('sports', value)}
        onBlur={setFieldTouched}
        options={options}
        value={sports}
        isMulti
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

export default Form2;
