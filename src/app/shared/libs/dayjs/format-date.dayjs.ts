import dayjs from 'dayjs'

export const FORMAT_DATE = (date: string, format: string = 'YYYY-MM-DD') => dayjs(date).format(format);