"use client";

import { Button } from "@nextui-org/react";
import { signIn } from "next-auth/react";

export default function SigninButton() {
  return (
    <Button
      color="primary"
      variant="ghost"
      onClick={async () => {
        await signIn(undefined);
      }}
    >
      Sign In
    </Button>
  );
}
