"use client";
import { UploadDialog } from "@/components/dialog/upload-file-dialog";
import { IntegrationCard } from "@/components/integrations/integration-card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useState } from "react";

export default function page() {
  const notionDescription =
    "Single space where you can think, write, and plan.";
  const [isOpen, setIsOpen] = useState(false);
  const onConnectNotion = () => {
    const url =
      "https://api.notion.com/v1/oauth/authorize?owner=user&client_id=463558a3-725e-4f37-b6d3-0889894f68de&redirect_uri=https%3A%2F%2Fexample.com%2Fauth%2Fnotion%2Fcallback&response_type=code";

    const width = 650,
      height = 650;
    const left = window.innerWidth / 2 - width / 2;
    const top = window.innerHeight / 2 - height / 2;

    return window.open(
      url,
      "",
      `toolbar=no, location=no, directories=no, status=no, menubar=no, 
      scrollbars=no, resizable=no, copyhistory=no, width=${width}, 
      height=${height}, top=${top}, left=${left}`,
    );
  };

  return (
    <>
      <ScrollArea className="h-full">
        <div className="flex-1 space-y-4  p-4 md:p-8 pt-6">
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <IntegrationCard
              img="/sources/ic_files.png"
              title="File Upload"
              description={notionDescription}
              handleOnConnect={() => setIsOpen(true)}
            ></IntegrationCard>
            <IntegrationCard
              img="/sources/ic_notion.png"
              title="Notion"
              description={notionDescription}
              handleOnConnect={onConnectNotion}
            ></IntegrationCard>
            <IntegrationCard
              img="/sources/ic_drive.svg"
              title="Drive"
              description={notionDescription}
              disabled
            ></IntegrationCard>
            <IntegrationCard
              img="/sources/ic_youtube.webp"
              title="Youtube"
              description={notionDescription}
              disabled
            ></IntegrationCard>
            <IntegrationCard
              img="/sources/ic_web_crawler.png"
              title="Web Page"
              description={notionDescription}
              disabled
            ></IntegrationCard>
            <IntegrationCard
              img="/sources/ic_slack.png"
              title="Slack"
              description={notionDescription}
              disabled
            ></IntegrationCard>
            <NotionOAuthIframe />
          </div>
          <UploadDialog
            showIcon={false}
            buttonName="Connect"
            isOpen={isOpen}
            setIsOpen={setIsOpen}
          />
        </div>
      </ScrollArea>
    </>
  );
}
