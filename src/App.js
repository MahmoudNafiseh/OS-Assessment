import React, { useEffect, useState } from 'react';
import { ChakraProvider, Box, Flex, Button, Text } from '@chakra-ui/react';
import { Formik } from 'formik';
import './App.css';
import Form1 from './Form1';
import Form2 from './Form2';
import Form3 from './Form3';
import FormPreview from './FormPreview';
import ImgToBase64 from './ImgToBase64';
import axios from 'axios';
import ProfileItem from './ProfileItem';

function App() {
   const [viewProfile, setViewProfile] = useState(false);
   const [formState, setFormState] = useState(1);
   const [prof, setProf] = useState([]);
   const handleProfile = () => {
      setViewProfile(!viewProfile);
   };
   const fetchData = async () => {
      await axios.get('api/profiles').then((res) => setProf(res.data));
   };

   useEffect(() => {
      fetchData();
   }, []);
   const MultiValueRemove = () => {
      return <div></div>;
   };
   const handleNext = () => {
      setFormState(formState + 1);
   };
   const handleBack = () => {
      setFormState(formState - 1);
   };
   const addProfile = async (data) => {
      let img = await ImgToBase64(data.profImg);
      await axios.post('/api/profiles', {
         name: data.name,
         dob: data.dob,
         location: data.location,
         team: data.team,
         gender: data.gender,
         sports: data.sports,
         about: data.about,
         interests: data.interests,
         profImg: img,
      });
      fetchData();
      alert(`success!`);
   };
   return (
      <ChakraProvider>
         <Flex h='10%' alignSelf={'flex-start'}>
            <Button onClick={handleProfile}>
               {viewProfile ? 'Submit more' : 'View Profiles'}
            </Button>
         </Flex>
         <Box display='flex' justifyContent={'center'} h='100vh'>
            {viewProfile ? (
               <Flex w='100%' justifyContent={'center'}>
                  {prof.length > 0 ? (
                     <Box w='100%'>
                        {prof.map((item) => (
                           <ProfileItem profile={item} />
                        ))}
                     </Box>
                  ) : (
                     <Text>Loading...</Text>
                  )}
               </Flex>
            ) : (
               <Box
                  minW={'20%'}
                  d='flex'
                  maxW={{ base: '100%', md: '70%', lg: '50%' }}
                  // maxH={{ base: '100%', md: '70%', lg: '70%' }}
                  minH={'20%'}
                  bg='gray.300'
                  p='10'
                  rounded='10'
                  alignSelf={'center'}
               >
                  <Formik
                     initialValues={{
                        name: '',
                        dob: '',
                        location: '',
                        team: '',
                        gender: '',
                        sports: null,
                        about: '',
                        interests: '',
                        profImg: '',
                     }}
                     onSubmit={(values) => addProfile(values)}
                  >
                     {({
                        setFieldValue,
                        setFieldTouched,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        values,
                     }) =>
                        formState === 1 ? (
                           <Form1
                              dob={values.dob}
                              name={values.name}
                              location={values.location}
                              handleNext={handleNext}
                              handleChange={handleChange}
                              handleBlur={handleBlur}
                              handleBack={handleBack}
                           />
                        ) : formState === 2 ? (
                           <Form2
                              team={values.team}
                              gender={values.gender}
                              sports={values.sports}
                              handleNext={handleNext}
                              handleChange={handleChange}
                              handleBlur={handleBlur}
                              setFieldValue={setFieldValue}
                              setFieldTouched={setFieldTouched}
                              handleBack={handleBack}
                           />
                        ) : formState === 3 ? (
                           <Form3
                              about={values.about}
                              interests={values.interests}
                              handleNext={handleNext}
                              handleChange={handleChange}
                              handleBlur={handleBlur}
                              setFieldValue={setFieldValue}
                              setFieldTouched={setFieldTouched}
                              handleBack={handleBack}
                           />
                        ) : (
                           <FormPreview
                              values={values}
                              handleBack={handleBack}
                              MultiValueRemove={MultiValueRemove}
                              handleSubmit={handleSubmit}
                           />
                        )
                     }
                  </Formik>
               </Box>
            )}
         </Box>
      </ChakraProvider>
   );
}
export default App;
