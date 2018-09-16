declare var M

export class MaterialService {
  static toast(message: string, classes: string = '') {
    M.toast({html: message, classes: classes})
  }

  static updateTextInputs() {
    M.updateTextFields()
  }

  static initSidenav() {
    const el = document.querySelectorAll('.sidenav')
    M.Sidenav.init(el)
  }
}
