export default class LoadingScreen {
  static tearDown () {
    const loadingScreen = document.getElementById('loading-screen')
    if (loadingScreen) {
      loadingScreen.innerHTML = ''
    }
  }
}
