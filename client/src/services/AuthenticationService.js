/**
 * Created by papa on 23.sep.2017.
 */

import Api from '@/services/Api'

export default {
  register (credentials) {
    return Api().post('register', credentials)
  }
}
