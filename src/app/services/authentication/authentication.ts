/* eslint-disable @typescript-eslint/ban-types */
import { verify, JsonWebTokenError } from 'jsonwebtoken'

class Authentication {
  private secret: String

  constructor (secret?: string) {
    this.secret = secret || String(process.env.JWT_SECRET)
  }

  public required (token: string): object {
    try {
      const dataDecoded = verify(token, String(this.secret))
      if (typeof dataDecoded === 'string') {
        return { content: dataDecoded }
      } else {
        return dataDecoded
      }
    } catch (error) {
      return new JsonWebTokenError('Token not decoded.')
    }
  }
}

export default Authentication
