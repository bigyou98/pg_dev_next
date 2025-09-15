import { DateTime } from 'luxon';

const format = 'yyyy-MM-dd HH:mm:ss';

export const customDate = (value) => DateTime.fromISO(value).toFormat(format);

export const curDate = () => DateTime.now().toFormat(format);
