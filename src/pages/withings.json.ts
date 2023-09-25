import type { APIRoute } from "astro";

// export const GET: APIRoute = ({ params, request }) => {
//     return new Response(JSON.stringify({
//         message: "This was a GET!"
//       })
//     )
//   }

export const POST: APIRoute = async ({ request, params, url }) => {
    const body = await request.text()
    if (body == null) {
      return new Response(JSON.stringify({ body: 404 }))
    }
    const urlParams = new URLSearchParams(body);
    const some = { 
        userid: urlParams.get('userid'),
        appli: urlParams.get('appli'),
        startdate: urlParams.get('startdate'),
        enddate: urlParams.get('enddate'),
        user_uuid: url.searchParams.get('user-uuid')
    }
    
    return new Response(
        JSON.stringify(some), {
          status: 200,
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
}