import axios from 'axios'

const getScience = get('./api/science')
const getLiterature = get('./api/literature')
const getHumanity = get('./api/humanity')
const ERR_OK = 0

function get(url) {
	return function (params) {
		return axios.get (url, {
			params
		}).then((res) => {
			const {errno,data} = res.data
			if (errno === ERR_OK) {
				return data
			}
		}).catch(() => {
      })
	}
}

export {
  getScience,
  getLiterature,
  getHumanity,
}

