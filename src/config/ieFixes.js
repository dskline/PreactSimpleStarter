import { isIE } from './browser'

if (isIE) {
  // Fix background image stutter in IE
  document.body.onmousewheel = function (event) {
    event.preventDefault()
    window.scrollTo(0, window.pageYOffset - event.wheelDelta)
  }
}
