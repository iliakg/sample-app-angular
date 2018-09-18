declare var M

export class MaterialService {
  static toast(message: string, classes: string = '') {
    let msg = ''
    if (message) {
      msg = message
    } else {
      msg = 'Непонятная ошибка'
      console.log('MaterialService toast error: ' + message)
    }

    M.toast({html: msg, classes: classes})
  }

  static updateTextInputs() {
    M.updateTextFields()
  }

  static initSidenav() {
    let el = document.querySelectorAll('.sidenav')
    M.Sidenav.init(el)
  }
}
