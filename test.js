const moment =  require("moment")

console.log(
  moment(new Date(Number(req.nextUrl.searchParams.get("time")))).fromNow()
)
