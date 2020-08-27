export default {

    login(user, imie, nazwisko) {
        return new Promise((resolve, reject) => {
            localStorage.setItem('user_nr', btoa(user))
            localStorage.setItem('imie', imie)
            localStorage.setItem('nazwisko', nazwisko)
            if (this.checkIfUserIsLogged()) {
                resolve(true)
            } else
                reject('Cannot login')
        })
    },

    logout() {
        return new Promise((resolve, reject) => {
            localStorage.removeItem('user_nr')
            localStorage.removeItem('imie')
            localStorage.removeItem('nazwisko')
            if (!this.checkIfUserIsLogged()) {
                resolve(true)
            } else
                reject('Cannot logout')
        })
    },

    checkIfUserIsLogged() {
        return Boolean(localStorage.getItem('user_nr'))
    },

    getCurrentUser() {
        if (this.checkIfUserIsLogged())
            return atob(localStorage.getItem('user_nr'))
        else return null
    },

    getCurrentUserEncoded() {
        if (this.checkIfUserIsLogged())
            return localStorage.getItem('user_nr');
        else return null
    },

}