import React, { useState } from "react";

function AddTasks({ onAddTaskSubmit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  return (
    <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
      <input
        type="text"
        placeholder="Digite o título da tarefa"
        className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <input
        type="text"
        placeholder="Digite a descrição da tarefa"
        className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <button
        onClick={() => {
          /*O ! não está sendo aplicado diretamente ao trim() como um método, mas sim ao resultado dele, que é uma string. Ele serve para verificar se, depois de remover os espaços, a string ainda tem algum conteúdo. Pq o trim() remove os espaços e deixa os outros caracteres. */
          if (!title.trim() || !description.trim()) {
            return alert("Preencha o título ou a descrição da tarefa");
          }
          onAddTaskSubmit(title, description);
          setTitle("");
          setDescription("");
        }}
        className="bg-slate-300 outline-slate-400 px-4 py-2 text-blue-950 rounded-md font-medium"
      >
        Adicionar
      </button>
    </div>
  );
}

export default AddTasks;
