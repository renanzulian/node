// import Controller from './usersControllers'
// import UserDefault from './user'
// import * as faker from 'faker'

// describe('Users component', () => {
//   const controller = new Controller()
//   const randomNewUser = {
//     name: faker.name.findName(),
//     email: faker.internet.email(),
//     password: faker.internet.password(10)
//   }

//   it('Should create a new user', async () => {
//     const newUser = await controller.addNewUser(randomNewUser)
//     expect(newUser).toBeInstanceOf(UserDefault)
//     expect(newUser.name).toBe(randomNewUser.name)
//     expect(newUser.email).toBe(randomNewUser.email)
//     expect(newUser.password).not.toBe(randomNewUser.password)
//     expect(newUser).toHaveProperty('created_at')
//   })
// })
