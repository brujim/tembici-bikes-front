export default {
  POST: {
    session: {
      method: 'POST',
      uri: '/autologin'
    },
    order: {
      method: 'POST',
      uri: '/upgrade'
    },
    login: {
      method: 'POST',
      uri: '/login'
    },
    recoveryPassword: {
      method: 'POST',
      uri: '/users/recover'
    }
  },
  GET: {
    subscriptions: {
      method: 'GET',
      uri: '/upgrade/subscriptions'
    }
  }
} as const
