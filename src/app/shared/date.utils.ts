import * as dayjs from 'dayjs'
import * as relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);

export const timeFromNow = (time: Date) => {
    return dayjs(time).fromNow();
}
