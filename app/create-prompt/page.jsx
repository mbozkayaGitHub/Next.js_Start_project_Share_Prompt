"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Form from "@components/Form";
import CreatePrompt from "./page";
const CreatePrompt = () => {
  const [post, setPost] = useState({
    propt: "",
    tag: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const createPrompt = async (e) => {};
  return (
    <Form
      type="Create"
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={createPrompt}
    />
  );
};

export default CreatePrompt;
