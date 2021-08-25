import Restful from '@/utils/restful'

type UserType = {
  id: number
  username: string
}

export const User = new Restful<UserType>('/user')
