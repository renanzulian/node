import Auth from './authentication'
import { sign, JsonWebTokenError } from 'jsonwebtoken'
import * as faker from 'faker'

describe('Authentication', () => {
  const randomKey = faker.hacker.phrase()
  const auth = new Auth(randomKey)

  const randomName = faker.name.findName()
  const randomEmail = faker.internet.email()
  const randomExample = { name: randomName, email: randomEmail }

  it('Should decode the token', () => {
    const randomToken = sign(randomExample, randomKey)

    const tokenDecoded = auth.required(randomToken)
    expect(tokenDecoded).toBeInstanceOf(Object)
    expect(tokenDecoded).toHaveProperty('name', randomName)
    expect(tokenDecoded).toHaveProperty('email', randomEmail)
    expect(tokenDecoded).toHaveProperty('iat')
  })

  it('Should not decode the token', () => {
    const newRandomKey = faker.internet.email()
    const randomToken = sign(randomExample, newRandomKey)

    const tokenDecoded = auth.required(randomToken)
    expect(tokenDecoded).toBeInstanceOf(JsonWebTokenError)
    expect(tokenDecoded).toBeFalsy()
  })
})
