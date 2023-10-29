export function formatTime(timeStr) {
  const timeObj = new Date(timeStr)
  const str = timeObj.getFullYear() + '-' + String(timeObj.getMonth() + 1).padStart(2, '0') + '-' + String(timeObj.getDate()).padStart(2, '0') + ' ' + String(timeObj.getHours()).padStart(2, '0') + ':' + String(timeObj.getMinutes()).padStart(2, '0')
  return str
}