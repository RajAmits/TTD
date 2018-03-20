import Api from '@/services/Api'

export default {
  register (userInfo) {
    return Api().post('register', userInfo)
  }
}

// call a register method of employee
// here we export register method to call register employee service which is called by vue component.
// so for doing this we need to configure a register endpoint on client.
