if (window.HTMLFormElement) {
  window.HTMLFormElement.prototype.requestSubmit = function () {
    if (this.dispatchEvent(new Event("submit"))) {
      this.submit();
    }
  };
}
