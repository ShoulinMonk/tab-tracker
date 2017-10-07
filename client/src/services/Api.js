/**
 * Created by papa on 23.sep.2017.
 */

import axios from 'axios'
export default () => {
  return axios.create({
    baseUrl: `http://locahost:8081/`
  })
}
