import { getServerSession } from 'next-auth/next';
import { redirect } from 'next/navigation';

export async function GET() {
  const session = await getServerSession();
  if (session) {
    return new Response('This is protected content. You can access this content because you are signed in.')
  } else {
    redirect('/login')
  }
}

