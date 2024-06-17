export function GET(request) {
  console.log(request);
  //   return new Response("Hello, Next.js!", { status: 200 });
  return Response.json({ message: "Hello, Next.js!" });
}

export function POST(request) {}
