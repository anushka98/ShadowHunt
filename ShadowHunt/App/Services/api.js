import firebase from 'firebase'

const getUser = () => {
  return firebase.database().ref("users").child(uid)
}

export default {
  getUser
}
