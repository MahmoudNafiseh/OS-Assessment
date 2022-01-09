const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
app.use(cors());
app.use(express.static('build'));

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
const errorHandler = (error, request, response, next) => {
  console.error(error.message);

  if (error.name === 'CastError') {
    return response.status(400).send({ error: 'malformatted id' });
  }

  next(error);
};
const password = process.argv[2];

const uri = `mongodb+srv://nafisehdb:${password}@cluster0.fgryd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

mongoose.connect(uri);

const profileSchema = new mongoose.Schema({
  name: String,
  dob: Date,
  location: String,
  team: String,
  gender: Object,
  sports: Array,
  about: String,
  interests: String,
  profImg: String,
});
const Profile = mongoose.model('Profile', profileSchema);
module.exports = mongoose.model('Profile', profileSchema);

profileSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

const requestLogger = (request, response, next) => {
  console.log('Method:', request.method);
  console.log('Path:  ', request.path);
  console.log('Body:  ', request.body);
  console.log('---');
  next();
};
app.use(requestLogger);
// app.get('/', (request, response) => {
//   response.send('<h1>Hello World!</h1>');
// });

app.get('/api/profiles', (req, res) => {
  Profile.find({}).then(profiles => {
    res.json(profiles);
  });
});

app.post('/api/profiles', (request, response) => {
  const body = request.body;

  if (body === undefined) {
    return response.status(400).json({ error: 'content missing' });
  }
  const profile = new Profile({
    name: body.name,
    dob: body.dob,
    location: body.location,
    team: body.team,
    gender: body.gender,
    sports: body.sports,
    about: body.about,
    interests: body.interests,
    profImg: body.profImg,
  });

  profile.save().then(savedProfile => {
    response.json(savedProfile);
  });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
