import { AuthForm } from "@/components/auth/AuthForm";

export default function Page() {
  return (
    <main className="flex h-screen flex-col items-center justify-center bg-gray-50 px-4 py-10">
      <AuthForm />
    </main>
  );
}
