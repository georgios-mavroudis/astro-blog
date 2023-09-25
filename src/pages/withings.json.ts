import type { APIRoute } from "astro";

// export const GET: APIRoute = ({ params, request }) => {
//     return new Response(JSON.stringify({
//         message: "This was a GET!"
//       })
//     )
//   }
import { $params, type WithingsParams } from '../db/store';

export const POST: APIRoute = async ({ request, url }) => {
    const body = await request.text()
    if (body == null) {
      return new Response(JSON.stringify({ body: 404 }))
    }
    const urlParams = new URLSearchParams(body);

    const some: WithingsParams = { 
        user_id: parseInt(urlParams.get('userid') as string),
        appli: parseInt(urlParams.get('appli') as string),
        start_date: parseInt(urlParams.get('startdate') as string),
        end_date: parseInt(urlParams.get('enddate') as string),
        user_uuid: url.searchParams.get('user-uuid') as string
    }
    const updatedJson = [...($params.value ?? []), some];

    $params.set(updatedJson)
    return new Response(
        JSON.stringify(some), {
          status: 200,
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
}