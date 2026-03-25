import { redirect } from "next/navigation";

// Root page — forward to dashboard (middleware handles auth gate)
export default function HomePage() {
  redirect("/dashboard");
}
