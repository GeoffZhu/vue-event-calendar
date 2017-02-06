export function dateTimeFormatter (date ,format) {
  // 时间格式化辅助函数 date:毫秒数 format:'yyyy-MM-dd hh:mm:ss'
  if (!date || date == "") {
    return ""
  }

  if (typeof date === "string") {
    var mts = date.match(/(\/Date\((\d+)\)\/)/)
    if (mts && mts.length >= 3) {
      date = parseInt(mts[2])
    }
  }

  date = new Date(date)
  if (!date || date.toUTCString() == "Invalid Date") {
    return ""
  }

  var map = {
    "M": date.getMonth() + 1, //月份
    "d": date.getDate(), //日
    "h": date.getHours(), //小时
    "m": date.getMinutes(), //分
    "s": date.getSeconds(), //秒
    "q": Math.floor((date.getMonth() + 3) / 3), //季度
    "S": date.getMilliseconds() //毫秒
  }

  format = format.replace(/([yMdhmsqS])+/g, function(all, t){
    var v = map[t]
    if(v !== undefined){
      if(all.length > 1){
        v = '0' + v
        v = v.substr(v.length-2)
      }
      return v
    }
    else if(t === 'y'){
      return (date.getFullYear() + '').substr(4 - all.length)
    }
    return all
  })

  return format
}
export function isEqualDateStr (dateStr1, dateStr2) {
  let dateArr1 = dateStr1.split('/')
  let dateArr2 = dateStr2.split('/')
  if (parseInt(dateArr1[0], 10) !== parseInt(dateArr2[0], 10)) {
    return false
  }
  if (parseInt(dateArr1[1], 10) !== parseInt(dateArr2[1], 10)) {
    return false
  }
  if (parseInt(dateArr1[2], 10) !== parseInt(dateArr2[2], 10)) {
    return false
  }
  return true
}