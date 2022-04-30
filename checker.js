class Check {
  constructor(btn, input, onValidate) {
    if (onValidate) this.onValidate = onValidate;
    this.btnElement = btn;
    this.inputElement = input;

    this.btnElement.addEventListener('click', this.onClick);
  }
  onClick = () => {
    this.currentPasswd = this.inputElement.value;
    this.calculate();
    this.validate();
  };
  calculate = () => {
    const password = this.currentPasswd;
    const special = `~!@#$%^&*()-_=+[{}]\|;:'",<.>/?${'`'}`;
    const noSpecial = !Array(...password).some((x) => special.includes(x));
    this.noSpecial = noSpecial;

    const allLow = String(password).toLowerCase();
    const allBig = String(password).toUpperCase();
    const noLowOrBig =
      allLow === password || allBig === password ? true : false;
    this.noLowOrBig = noLowOrBig;

    const numbers = `0123456789`;
    const noNumber = !Array(...password).some((x) => numbers.includes(x));
    this.noNumber = noNumber;

    this.length = password.length;
  };
  validate = () => {
    this.passwordLevel =
      this.noLowOrBig || this.noNumber || this.noSpecial || this.length <= 4
        ? 0
        : this.length <= 8
        ? 1
        : 2;
    this.onValidate(this.passwordLevel);
  };
}
