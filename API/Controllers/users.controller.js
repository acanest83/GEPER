const User = require('../models/user.model');
const bcryptjs = require('bcryptjs');

//REGISTER//
module.exports.create = (req, res, next) => {
  const { name, tim, rank, surname, telephone, email, role, avatar, password } = req.body;

  User.findOne({ email })
    .then(existingUser => {
      if (existingUser) {
        return res.status(400).json({ message: 'User with the same email already exists' });
      }

  
          const newUser = new User({
            name,
            tim,
            rank,
            surname,
            telephone,
            email,
            role,
            avatar,
            password
          });

          newUser.save()
            .then(user => {
              res.status(201).json({ message: 'User registered successfully', user });
            })
            .catch(error => next(error));

    })
    .catch(error => next(error));
};

//LOGIN//
module.exports.login = (req, res, next) => {
  
  User.findOne({ email: req.body.email })
    .then((user) => {
      if (user) {
        return user.checkPassword(req.body.password).then((match) => {
          if (match) {
            req.session.userId = user.id;
            res.json(user);
          } else {
            res.status(401).json({ error: "unauthorized" });
          }
        });
      } else {
        res.status(401).json({ error: "unauthorized" });
      }
    })
    .catch(next);
};

//LOGOUT//
module.exports.logout = (req, res, next) => {
  req.session.destroy();
  res.status(204).send();
};

//VIEW PROFILE//
module.exports.viewProfile = (req, res, next) => {
  User.findById(req.user._id)
    .then((user) => {
      if (user) {
        const userProfile = { ...user.toObject() };
        delete userProfile.password;
        res.json(userProfile);
      } else {
        next(createError(404, "User not found"));
      }
    })
    .catch((error) => next(error));
};

//ALL USERS//
module.exports.listAllUsers = (req, res, next) => {
  User.find({})
    .then((users) => {
      res.json(users);
    })
    .catch(next);
};
