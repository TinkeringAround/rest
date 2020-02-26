export const unixTimeToString = (unix: number) => {
  if (unix.toString().length < 13) return null

  var a = new Date(unix)
  var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  var time = a.getHours() + ':' + a.getMinutes()
  var date = a.getDate() + '. ' + months[a.getMonth()] + ' ' + a.getFullYear()
  return time + '     ' + date
}
