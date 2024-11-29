import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal } from "lucide-react";
import { useState } from "react";
import { DropdownMenuSeparator } from "@radix-ui/react-dropdown-menu";
import { ICompany } from "./company-list";

const CompanyListActions = ({ company }: { company: ICompany }) => {
  const [IDialogType, setIDialogType] = useState<any>();


  const handleIDialogType = (type: any) => setIDialogType(type);

  return (
    <Dialog>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 p-0">
            <span className="sr-only">Open menu</span>
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="min-w-44">
          <DialogTrigger asChild>
            <DropdownMenuItem onClick={() => handleIDialogType("Approved")}>
              Approve
            </DropdownMenuItem>
          </DialogTrigger>
          <DropdownMenuSeparator />
          <DialogTrigger asChild>
            <DropdownMenuItem onClick={() => handleIDialogType("Rejected")}>
              Reject
            </DropdownMenuItem>
          </DialogTrigger>
        </DropdownMenuContent>
      </DropdownMenu>
      {/* {IDialogType === "Approved" && (
        <ExpertApprovedAlert
          approveItem={handleApproveExpert}
          isPending={expertStatusMutation.isPending}
        />
      )}

      {IDialogType === "Rejected" && (
        <ExpertRejectAlert
          approveItem={handleRejectExpert}
          isPending={expertStatusMutation.isPending}
        />
      )} */}
    </Dialog>
  );
};

export default CompanyListActions;
