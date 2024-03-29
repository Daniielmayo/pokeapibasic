"use client";
import { IoCartOutline } from "react-icons/io5";
import { SimpleWidget } from "..";
import { useAppSelector } from "@/store";

export const WidgetsGrid = () => {
  const isCard = useAppSelector((state) => state.counter.count);

  return (
    <div className="flex flex-wrap p-2">
      <SimpleWidget
        title={`${isCard}`}
        subTitle={"Contador"}
        label="Contador"
        icon={<IoCartOutline size={70} className="text-blue-500" />}
        href="/dashboard/counter"
      />
    </div>
  );
};
