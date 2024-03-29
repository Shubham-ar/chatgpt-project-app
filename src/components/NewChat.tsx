import { PlusIcon } from "@heroicons/react/24/solid";

import React from "react";

type Props = {};

const NewChat = (props: Props) => {
  return (
    <div className="border border-gray-600 chatRow">
      <PlusIcon className="h-4 w-4" />
      <p>New Chat</p>
    </div>
  );
};

export default NewChat;
