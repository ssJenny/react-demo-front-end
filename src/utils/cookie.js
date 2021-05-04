import cookie from 'react-cookies'
const expires = new Date()
expires.setDate(Date.now() + 1000 * 60 * 60 * 24 * 2)
const OPTIONS = {
    path: '/',
    expires,
    maxAge: 24 * 60 * 60 * 1000
}

export const setCookie = (name, value, options) => {
    cookie.save(name, value, {
        ...OPTIONS,
        ...options
    })
}
