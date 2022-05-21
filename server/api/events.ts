import { Client } from "@notionhq/client";
const config = useRuntimeConfig().public;
const DATABASE_ID = config.EVENTS_DATABASE_ID;

export interface Event {
  title: string;
  description: string;
  date?: { start: String, end: String, timeZone: string };
  url: string;
  tags: string[];
}

const createEvent = (record): Event => {
  const { properties: { Title, Description, Date, Url, Tags } } = record;
  return {
    title: Title.title[0].plain_text,
    description: Description.rich_text[0].plain_text,
    date: Date.date,
    url: Url.url,
    tags: Tags.multi_select.map(tag => [tag.name, tag.color])
  }
}


export default async () => {
  let events: Event[] = [];
  const notion = new Client({ auth: config.NOTION_TOKEN });
  const eventsDb = await notion.databases.query({
    database_id: DATABASE_ID, sorts: [
      {
        "property": "Date",
        "direction": "ascending"
      }
    ]
  });

  eventsDb.results.map((record) => {
    let event = createEvent(record);
    events.push(event);
  })

  return {
    events
  }
}