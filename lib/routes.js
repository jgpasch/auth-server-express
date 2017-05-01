import { User } from './models/User.js';

export default function(app) {
  app.post('/signup', function(req, res, next) {
    console.log(req.body);

    User.findOne({ email: req.body.email }, (err, existingUser) => {
      if (err) {
        return next(err);
      }

      if (existingUser) {
        return res.status(422).send({error: 'email is already in use' });
      }

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
  });

}
