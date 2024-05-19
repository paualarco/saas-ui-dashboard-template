"use client";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { ChatTextarea } from "@/components/chat/ChatTextarea";
import { SearchSettings } from "@/components/forms/search-settings/search-settings";
import Messages from "@/components/chat/Messages";
import { useState } from "react";
import { queryApi } from "@/app/api/queryApi";

export default function Page() {
  const session_id = "ccadd12d-6c1d-4339-bd88-5f0454cd8972"; //uuid();
  const [lastMessage, setLastMessage] = useState<string | undefined>();
  const [query, { isLoading }] = queryApi.useQueryMutation();

  const handleOnSendMessage = (message: string) => {
    setLastMessage(message);
    query({ query: message, top_k: 5, session_id: session_id });
  };

  return (
    <div className={"h-full w-full"}>
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel defaultSize={50} className={"min-w-[265px] max-w-md "}>
          <div className="flex h-[200px] justify-center p-6">
            <SearchSettings />
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={50}>
          <ResizablePanelGroup direction="vertical">
            <ResizablePanel defaultSize={25}></ResizablePanel>

            {/* <ResizablePanel defaultSize={75}>
              <div className="flex h-full items-center justify-center p-6">
                <span className="font-semibold">Three</span>
              </div>
            </ResizablePanel> */}
            <div className="relative flex h-full flex-col rounded-md bg-muted/50 lg:col-span-2 justify-between">
              <div className="h-full">
                <Badge variant="outline" className="absolute right-3 top-3">
                  Output
                </Badge>
                <div className="p-3 mt-8">
                  {/* <ChatMessage
                    message={message1}
                    isNextMessageSamePerson={false}
                  />
                  <ChatMessage
                    message={message2}
                    isNextMessageSamePerson={false}
                  /> */}
                  <Messages
                    fileId="1"
                    session_id={session_id}
                    lastMessage={lastMessage}
                    isProcessing={isLoading}
                  />
                </div>
                <ScrollArea className="h-full"></ScrollArea>
              </div>
              <div className={"p-4"}>
                <ChatTextarea
                  onSend={handleOnSendMessage}
                  sessionId={session_id}
                />
              </div>
            </div>
          </ResizablePanelGroup>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}
