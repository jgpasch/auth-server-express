import { User } from './models/User.js';

export default function(app) {
  app.post('/signup', function(req, res) {
    console.log(req.body);

    User.findOne({ email: req.body.email }, (err, existingUser) => {

    });

    const newUser = new User({
      email: req.body.email,
      password: req.body.password
    });

    newUser.save(err => {
      if (err) {
        throw Error('error creating new user');
      }
    });

  });

}