import moment from 'moment'
import 'moment/locale/de'

// ===============================================
export const hexToRGBA = (hexColor: string, opacity: string) => {
  if (hexColor === '#fff' || hexColor === '#FFF') return 'rgba(255, 255, 255, ' + opacity + ')'
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hexColor)
  if (!result)
    throw new Error('Formatting Error with Input: ' + hexColor + ' and Opacity: ' + opacity)
  const rgba = result
    ? 'rgba(' +
      parseInt(result[1], 16) +
      ', ' +
      parseInt(result[2], 16) +
      ', ' +
      parseInt(result[3], 16) +
      ', ' +
      opacity +
      ')'
    : ''

  return rgba
}

export const isToday = (timestamp: string) => {
  if (timestamp === '') return false
  return moment.unix(parseInt(timestamp)).isSame(moment.now(), 'days')
}

export const deviceHasLowBattery = (battery: number) => battery < 2400

// ===============================================
export const deviceLastActiveTime = (timestamp: string) => {
  if (timestamp === '') return ''

  moment.locale('de')
  return moment.unix(parseInt(timestamp)).format('HH.mm') + ' Uhr'
}

export const deviceLastActiveDate = (timestamp: string) => {
  if (timestamp === '') return ''

  moment.locale('de')
  return moment.unix(parseInt(timestamp)).format('Do MMMM')
}

// ===============================================
export const timestampToTime = (timestamp: string) => {
  if (timestamp === '') return ''

  const format = 'HH.mm DD.MM.YYYY'

  return moment
    .unix(parseInt(timestamp))
    .subtract(2, 'hour')
    .format(format)
}
