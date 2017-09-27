import axios from 'axios'
import config from './config'
import checkStatus from '../services/utils'

const UserService = {
  getUsersPerPage(args) {
    let url = `${config[process.env.NODE_ENV].base}/users/`
    let params = {}

    if (args.page) {
      url += `page/${args.page}/`
    } else {
      url += 'page/1/'
    }

    if (args.per_page) {
      params.per_page = args.per_page
    }

    if (args.is_active) {
      params.is_active = args.is_active
    }

    if (args.is_admin) {
      params.is_admin = args.is_admin
    }

    if (args.is_superuser) {
      params.is_superuser = args.is_superuser
    }

    return axios.get(url, {params: params}).then(checkStatus)
  }
}

export default UserService
