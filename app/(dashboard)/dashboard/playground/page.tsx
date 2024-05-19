"use client";
import BreadCrumb from "@/components/breadcrumb";
import { CreateProfileOne } from "@/components/forms/user-profile-stepper/create-profile";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { Paperclip, Search } from "lucide-react";
import { ChatTextarea } from "@/components/chat/ChatTextarea";
import { SearchSettings } from "@/components/forms/search-settings/search-settings";
import { ChatMessage, ExtendedMessage } from "@/components/chat/Message";
import Messages from "@/components/chat/Messages";
import { v4 as uuid } from "uuid";
import { useState } from "react";
import { set } from "date-fns";
import { queryApi } from "@/app/api/queryApi";

const breadcrumbItems = [{ title: "Profile", link: "/dashboard/profile" }];
export default function page() {
  const message2: ExtendedMessage = {
    id: "2",
    createdAt: "2021-09-01T00:00:20Z",
    text: "Good!",
    isUserMessage: false,
  };

  const message1: ExtendedMessage = {
    id: "1",
    createdAt: "2021-09-01T00:00:00Z",
    text: "Hello, how can I help you today?",
    isUserMessage: true,
  };

  const session_id = "ccadd12d-6c1d-4339-bd88-5f0454cd8972"; //uuid();
  const [lastMessage, setLastMessage] = useState<string | undefined>();
  const [query, { isLoading }] = queryApi.useQueryMutation();

  const handleOnSendMessage = (message: string) => {
    console.log("handleOnSendMessage", message);
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
