import { useState } from "react"

export const ProjectForm = () => {
    const [projectName,setProjectName] = useState("Nome do Projeto");
    const [imageUrl,setImageUrl] = useState("https://picsum.photos/200/200")
    const [startDate,setStartDate] = useState("")
    const [dueDate,setDueDate] = useState("")

    return(
        <div className="bg-[#F6F5F4] flex flex-col items-center">
            <header className="h-20 text-black">Cabeçalho</header>
            <div className="bg-[#FFFFFF] rounded-xl px-12 py-8 flex flex-row items-center gap-x-8">
                <img className="rounded-full" src={imageUrl} alt="Capa para o Projeto // Logo ProjetaDev"/>
                <p className="text-black">{projectName}</p>
            </div>
            <form>
                <label>
                    <p>Nome do Projeto</p>
                    <input value={projectName} onChange={(event) => setProjectName(event.target.value)}/>
                </label>
                <label>
                    <p>Link da imagem do projeto</p>
                    <input value={imageUrl} onChange={(event) => setImageUrl(event.target.value)}/>
                </label>
                <div className="flex flex-row gap-8">
                <label>
                    <p>Data Estimada de Inicio</p>
                    <input type="date" value={startDate} onChange={(event) => setStartDate(event.target.value)} />
                </label>
                <label>
                    <p>Data Estimada de Inicio</p>
                    <input type="date" value={dueDate} onChange={(event) => setDueDate(event.target.value)} />
                </label>
                </div>
            </form>

        </div>

    )
}