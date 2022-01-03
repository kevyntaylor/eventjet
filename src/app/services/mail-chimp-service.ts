export class MailChimpService {

  constructor() { }

  showMailChimpForm() {
    const mailChimp = localStorage.getItem('mailChimp') === 'true';
    const mailChimpLocal = localStorage.getItem('mailChimpLocal') === 'true';
    if (mailChimp) {
      return false;
    } else {
      return mailChimpLocal;
    }
  }

  setMailChimpForm(isVisible: boolean) {
    localStorage.setItem('mailChimpLocal', isVisible + '');
  }

  hideMailChimp() {
    localStorage.setItem('mailChimp', 'true');
  }
}
