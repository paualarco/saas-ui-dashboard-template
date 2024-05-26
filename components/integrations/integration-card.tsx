import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "../ui/badge";
import Image from "next/image";
import { UploadDialog } from "../dialog/upload-file-dialog";
import { Button } from "../ui/button";

// export interface Task {
//   id: UniqueIdentifier;
//   columnId: ColumnId;
//   content: string;
// }

interface IntegrationCardProps {
  img: string;
  title: string;
  description: string;
  disabled?: boolean;
  handleOnConnect?: VoidFunction;
}

export function IntegrationCard({
  img,
  title,
  description,
  disabled,
  handleOnConnect,
}: IntegrationCardProps) {
  return (
    <Card>
      <CardHeader>
        <div
          className={`grid grid-cols-2 justify-between ${
            disabled && "opacity-50 pointer-events-none"
          }`}
        >
          <div className="flex flex-col gap-y-1">
            <div className="flex flex-row gap-x-1 items-center">
              <div>
                <CardTitle>{title}</CardTitle>
              </div>
              <div>
                <Badge className="ml-1" variant="outline">
                  {disabled ? "Soon" : "Free"}
                </Badge>
              </div>
            </div>
            <div>
              <CardDescription>{description}</CardDescription>
            </div>
          </div>
          <div className="flex flex-col space-y-4 items-end">
            <div className="flex flex-row justify-end">
              <Image alt="" src={img} width={60} height={60}></Image>
            </div>
            <div>
              <Button
                className="outlined"
                variant={"outline"}
                onClick={handleOnConnect}
              >
                Connect
              </Button>
            </div>
          </div>
        </div>
      </CardHeader>
    </Card>
  );
}
