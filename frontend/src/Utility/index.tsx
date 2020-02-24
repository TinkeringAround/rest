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

// ==========================================================
export const unixTimeToSting = (unix: number) => {
  var a = new Date(unix)
  var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  var time = a.getHours() + ':' + a.getMinutes()
  var date = a.getDate() + '. ' + months[a.getMonth()] + ' ' + a.getFullYear()
  return time + '     ' + date
}
