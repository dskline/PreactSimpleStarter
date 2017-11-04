export class Dimension {
  constructor (ratio, widths) {
    this.ratioPercentage = ratio * 100
    this.widths = widths
  }
}
export const Dimensions = {
  wide: new Dimension(9 / 16, ['1920', '1600', '1366', '1024', '768', '480']),
  normal: new Dimension(3 / 4, ['1920', '1440', '1024', '768', '480'])
}
