import { useState } from "react"

export const ProjectForm = () => {
    const [projectName, setProjectName] = useState("Nome do Projeto");
    const [imageUrl, setImageUrl] = useState("https://picsum.photos/200/200")
    const [stCSSDate, setStCSSDate] = useState("")
    const [dueDate, setDueDate] = useState("")
    const [summary, setSummary] = useState("Descreva brevemente seu projeto")
    const [desiredOutcome, setDesiredOutcome] = useState("Resultado esperado:")
    const [beneficts, setBeneficts] = useState("Exemplo: Participando do projeto voce irá desenvolver tanto suas hard skills quanto as softs.")
    const [schedule, setSchedule] = useState("Exemplo: Todas as Segundas, Quartas e Sextas-feiras as 18:00.s")
    const [registrationDueDate, setRegistrationDueDate] = useState("")
    // const [languages, setLanguages] = useState("")

    return(
        <div className="bg-[#F6F5F4] flex flex-col items-center py-12">
            <header className="h-20 text-black">Cabeçalho</header>
            <div className="bg-[#FFFFFF] rounded-xl px-12 py-8 flex flex-row items-center gap-x-8">
                <img className="rounded-full" src={imageUrl} alt="Capa para o Projeto // Logo ProjetaDev"/>
                <p className="text-black">{projectName}</p>
            </div>
            <form className="w-4/5 p-8" >
                <label>
                    <p className="text-black">Nome do Projeto:</p>
                    <input className="bg-[#C3DCE3] w-full mb-2 px-4 py-2 text-black" value={projectName} onChange={(event) => setProjectName(event.target.value)}/>
                </label>
                <label>
                    <p className="text-black">Link da imagem do projeto:</p>
                    <input className="bg-[#C3DCE3] w-full mb-2 px-4 py-2 text-black" type="url" value={imageUrl} onChange={(event) => setImageUrl(event.target.value)}/>
                </label>
                <div className="flex flex-row w-full gap-6 mb-2">
                    <label className="w-2/4">
                        <p className="text-black">Data Estimada de Inicio:</p>
                        <input className="bg-[#C3DCE3] w-full px-4 py-2 text-black" type="date" value={stCSSDate} onChange={(event) => setStCSSDate(event.target.value)} />
                    </label>
                    <label className="w-2/4">
                        <p className="text-black">Data Estimada de Inicio:</p>
                        <input className="bg-[#C3DCE3] w-full px-4 py-2 text-black"  type="date" value={dueDate} onChange={(event) => setDueDate(event.target.value)} />
                    </label>
                </div>
                <label>
                    <p className="text-black">Resumo:</p>
                    <input className="bg-[#C3DCE3] w-full mb-2 px-4 py-2 text-black"  value={summary} onChange={(event) => setSummary(event.target.value)}/>
                </label>
                <label>
                    <p className="text-black">Objetivo do projeto:</p>
                    <input className="bg-[#C3DCE3] w-full mb-2 px-4 py-2 text-black"  value={desiredOutcome} onChange={(event) => setDesiredOutcome(event.target.value)}/>
                </label>
                <label>
                    <p className="text-black">Benefícios em participar do projeto:</p>
                    <input className="bg-[#C3DCE3] w-full mb-2 px-4 py-2 text-black"  value={beneficts} onChange={(event) => setBeneficts(event.target.value)}/>
                </label>
                <label>
                    <p className="text-black">Agenda:</p>
                    <input className="bg-[#C3DCE3] w-full mb-2 px-4 py-2 text-black"  value={schedule} onChange={(event) => setSchedule(event.target.value)}/>
                </label>
                <label>
                    <p className="text-black">Data Limite de Inscriçāo:</p>
                    <input className="bg-[#C3DCE3] w-full mb-2 px-4 py-2 text-black"  type="date" value={registrationDueDate} onChange={(event) => setRegistrationDueDate(event.target.value)} />
                </label>
                    {/* <p>Linguagens:</p>
                    <input type="checkbox" value={languages} onChange={(event) => setLanguages(event.target.value)}/> */}
                <fieldset className="flex flex-wrap" >
                    <legend className="text-black">Escolha as linguagens que serão utilizadas:</legend>
                    <div className="w-2/4">
                        <input type="checkbox" id="JavaScript" name="language" value="JavaScript" />
                        <label className="text-black" for="JavaScript">JavaScript</label>
                    </div>
                    <div className="w-2/4">
                        <input type="checkbox" id="Python" name="language" value="Phyton" />
                        <label className="text-black" for="Python">Python</label>
                    </div>
                    <div className="w-2/4">
                        <input type="checkbox" id="HTML" name="language" value="HTML" />
                        <label className="text-black" for="HTML">HTML</label>
                    </div>
                    <div className="w-2/4">
                        <input type="checkbox" id="CSS" name="language" value="CSS" />
                        <label className="text-black" for="CSS">CSS</label>
                    </div>
                    <div className="w-2/4">
                        <input type="checkbox" id="C#" name="language" value="C#" />
                        <label className="text-black" for="C#">C#</label>
                    </div>
                    <div className="w-2/4">
                        <input type="checkbox" id="TypeScript" name="language" value="TypeScript" />
                        <label className="text-black" for="TypeScript">TypeScript</label>
                    </div>
                    <div className="w-2/4">
                        <input type="checkbox" id="GO" name="language" value="Go" />
                        <label className="text-black" for="GO">GO</label>
                    </div>
                    <div className="w-2/4">
                        <input type="checkbox" id="HTML" name="language" value="HTML" />
                        <label className="text-black" for="HTML">HTML</label>
                    </div>
                    <div className="w-2/4">
                        <input type="checkbox" id="CSS" name="language" value="CSS" />
                        <label className="text-black" for="CSS">CSS</label>
                    </div>
                    <div className="w-2/4 mb-2">
                        <input type="checkbox" id="other" name="language" value="other" />
                        <label className="text-black" for="other">Other</label>
                        <input className="bg-[#C3DCE3]" type="text" id="otherValue" name="other" />
                    </div>
                </fieldset>
            </form>
            <button className="bg-[#2B788B] w-2/6 mb-2 px-4 py-2 text-white" type="submit">Publicar!</button>
        </div>

    )
}