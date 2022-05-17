const { faker } = require('@faker-js/faker');

const userList = [
  {
    id: 1,
    fullName: faker.name.findName(),
    urlImage: faker.image.avatar(),
    dateOfRegister: faker.date.future(),
    status: 'ACTIVE',
    userType: 2,
    validated: true,
  },
  {
    id: 2,
    fullName: faker.name.findName(),
    urlImage: faker.image.avatar(),
    dateOfRegister: faker.date.future(),
    status: 'BANNED',
    userType: 1,
    validated: false,
  },
  {
    id: 3,
    fullName: faker.name.findName(),
    urlImage: faker.image.avatar(),
    dateOfRegister: faker.date.future(),
    status: 'ACTIVE',
    userType: 1,
    validated: true,
  },
  {
    id: 4,
    fullName: faker.name.findName(),
    urlImage: faker.image.avatar(),
    dateOfRegister: faker.date.future(),
    status: 'ACTIVE',
    userType: 1,
    validated: false,
  },
];

module.exports = {
  userList,
};
