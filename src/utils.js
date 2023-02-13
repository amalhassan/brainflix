// function returning a relative date format for video and comment dates 
const relativeTimeFormat = new Intl.RelativeTimeFormat('en', {
    numeric: 'auto',
})
const timePeriod = [
    {period: 60, name: 'seconds'},
    {period: 60, name: 'minutes'},
    {period: 24, name: 'hours'},
    {period: 7, name: 'days'},
    {period: 4.34524, name: 'weeks'},
    {period: 12, name: 'months'},
    {period: Number.POSITIVE_INFINITY, name: 'years'}
]
export const dateFormatter = (date) => {
    let difference = (date - new Date()) / 1000;
    timePeriod.find((obj) => {
        if (Math.abs(difference) < obj.period) {
            date = relativeTimeFormat.format(Math.round(difference), obj.name);
            return true
        }
        difference = difference / obj.period;
        return null
    })
    return date;
}