import { EventInput } from '@fullcalendar/core';

let eventGuid = 0;
const TODAY_STR = new Date().toISOString().replace(/T.*$/, ''); // YYYY-MM-DD of today

export const INITIAL_EVENTS: EventInput[] = [

  {
    id: createEventId(),

    start: TODAY_STR + 'T00:00:00',
    end: TODAY_STR + 'T03x  :00:00'
  },
  {
    id: createEventId(),

    start: TODAY_STR + 'T12:00:00',
    end: TODAY_STR + 'T12:30:00'
  }
];

export function createEventId() {
  return String(eventGuid++);
}
