import { ChevronLeftIcon } from "lucide-react";
import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

function TaskPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");
  return (
    <div className="h-screen w-screen bg-slate-500 p-6">
      <div className="w-[800px] space-y-4 ">
        <div className="flex justify-center relative mb-6">
          <button
            onClick={() => navigate(-1)}
            className="absolute left-0 bottom-0"
          >
            <ChevronLeftIcon />
          </button>
          <h1 className="text-3xl text-slate-300 font-bold text-center">
            Detalhes da Tarefa
          </h1>
        </div>
        <div className="bg-slate-300 p-4 rounded-md">
          <h2 className="text-xl text-blue-950 font-bold">{title}</h2>
          <p className="text-blue-950">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default TaskPage;
