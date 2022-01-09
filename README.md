# Opensponsorship Assessment

You can check the project online at https://opensponsorship-nafiseh.herokuapp.com/

## Some notes

- Unfortunately I did not have enough time to add comments to my code.
- The front-end design was really rushed due to time constraints, I tried making it kind of responsive, I think I did okay. Would've been better if I had some more time.
- For some reason going back does not show the image path, get an error there. Was kind of obscure for me so I just left it there, since I had no time to fix it.
- I ended up saving images on the MongoDB Atlas Instance in Base64, which was a bit odd, and took a lot of my time since I had to read a fair bit about FileReader. I think I would optimally save it on an S3 store or something similar, and refer to it like that.
- I did not make a put request header in the API, since I was starting to run out of time. Although if I had a bit more time it would've been possible.
- Cannot edit profiles after submission, which I would've preferred adding, but you can edit before submission by going back.
