import { rest } from "msw";

export default [
  rest.post('/login', (req, res, context) => {
    const existUser = {
      email: "testuser@icloud.com",
      password: "123456"
    }


    if (req.body.email === existUser.email && req.body.password === existUser.password) {
      localStorage.setItem('uprock-authenticated', 'true');
      localStorage.setItem('uprock-id', '23115');

      return res(
        context.status(200),
        context.json({
          id: 23115,
          email: req.body.email,
          password: req.body.password,
          username: "Username"
        })
      );
    } else {
      return res(
        context.status(401),
        context.json('The email address or password is incorrect.')
      )
    }
  }),

  rest.get('/users/23115', (req, res, context) => {
    return res(
      context.json({
        id: 23115,
        email: "testuser@icloud.com",
        password: "123456"
      })
    )
  })
]

