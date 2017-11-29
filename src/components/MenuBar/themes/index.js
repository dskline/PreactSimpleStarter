import './blackwhite.scss'
import './primary.scss'
import './transparent.scss'

const defaultClassNames = 'flex w-100 fixed top-0 fw5 avenir'

export const transparent = {
  className: defaultClassNames + ' bg-transparent'
}
export const primary = {
  className: defaultClassNames + ' bg-primary-dark-opaque shadow-3'
}
export const blackwhite = {
  className: defaultClassNames + ' bg-white shadow-3'
}
