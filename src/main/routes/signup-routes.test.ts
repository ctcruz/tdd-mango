import request from 'supertest'
import app from '../config/app'

describe('SignUp Routes', () => {
  test('Should return as account on success', async () => {
    await request(app).post('/api/signup').send({
      name: 'Any Name',
      email: 'any_name@mail.com',
      password: 'any_password',
      passwordConfirmation: 'any_password'
    }).expect(200)
  })
})
