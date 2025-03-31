import { Dispatch } from "react";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
// import { useAppDispatch } from "@/redux/hook";
// import { filteredByPriority } from "@/redux/features/todoSlice";

type TTodoFilterProps = {
  priority: string;
  setPriority: Dispatch<string>;
};

const TodoFilter = ({ priority, setPriority }: TTodoFilterProps) => {
  // const dispatch = useAppDispatch();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="primary-bg text-xl font-semibold cursor-pointer text-white">
          Filter
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Filter by priority</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup
          value={priority}
          onValueChange={(value) => {
            setPriority(value);
            // dispatch(filteredByPriority(value));
          }}
        >
          <DropdownMenuRadioItem value="high">High</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="medium">Medium</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="low">Low</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default TodoFilter;
