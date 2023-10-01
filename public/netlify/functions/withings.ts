// import { type APIRoute } from "astro";
// import { type WithingsParams } from '../../../src/db/store';

import { type HandlerEvent, type Handler, type HandlerContext } from "@netlify/functions";

// export const POST: APIRoute = async ({ request, url }) => {
//     const body = await request.text()
//     if (body == null) {
//       return new Response(JSON.stringify({ body: 404 }))
//     }
//     const urlParams = new URLSearchParams(body);

//     const some: WithingsParams = { 
//         user_id: parseInt(urlParams.get('userid') as string),
//         appli: parseInt(urlParams.get('appli') as string),
//         start_date: parseInt(urlParams.get('startdate') as string),
//         end_date: parseInt(urlParams.get('enddate') as string),
//         user_uuid: url.searchParams.get('user-uuid') as string
//     }
    
//     return new Response(
//         JSON.stringify(some), {
//           status: 200,
//           headers: {
//             "Content-Type": "application/json"
//           }
//         }
//       );
// }
const handler: Handler = async (event: HandlerEvent, context: HandlerContext) => {
  const body = await event.body;
  const queryParams = await event.queryStringParameters;
  console.log("PARAMS:", body, queryParams);
  const some = {
    user_id: 123,
    appli: 123,
    start_date: 123,
    end_date: 123,
    user_uuid: 123,
  }

  return {
    statusCode: 200,
    body: JSON.stringify(some), 
  }
}