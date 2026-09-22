import { redirect } from "next/navigation";

/* The homepage lives at /winsume (deployed at savotech.vercel.app/winsume).
   Root visitors are forwarded there. Temporary redirect while the site lives
   on the preview domain — see README · Deployment. */
export default function RootIndex() {
  redirect("/winsume");
}
