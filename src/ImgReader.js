import React, { useEffect, useState } from 'react';
const ImgReader = ({ file, setProfile, profile }) => {
  const [preview, setPreview] = useState(null);
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => {
    setPreview(reader.result);
  };
  return (
    <div>
      <img src={preview} width="200px" />
    </div>
  );
};
export default ImgReader;
