// app/sign-up/page.tsx
import { SignUp } from '@clerk/nextjs';

export default function Page() {
  return <SignUp afterSignOutUrl="/new-user" redirectUrl="/new-user" />;
}
