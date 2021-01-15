import mock from "../utils/mock";

/* mock.onPost('/api/home/login').reply(200, {
  'id' : 1,
  'username': 'davidkarlos',
  'email': 'daavidkarlos@gmail.com'
}); */

mock.onPost("/api/home/login").reply((config) => {
  const { email, password } = JSON.parse(config.data);

  if (email !== "david@gmail.com" || password !== "admin") {
    return [
      400,
      {
        message: "Usuário ou senha incorretos",
      },
    ];
  }

  const user = {
    id: "1",
    name: "David",
    email: "david@gmail.com",
  };

  return [200, { user }];
});
