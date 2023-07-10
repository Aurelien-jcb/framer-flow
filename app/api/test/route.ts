export async function GET() {
  return new Response(JSON.stringify({content: 'Réponse appel api /test'}))
}