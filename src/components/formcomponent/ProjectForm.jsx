import { useState } from "react"

export const ProjectForm = () => {
    const [projectName, setProjectName] = useState("Nome do Projeto");
    const [imageUrl, setImageUrl] = useState("https://picsum.photos/200/200")
    const [startDate, setStartDate] = useState("")
    const [dueDate, setDueDate] = useState("")
    const [summary, setSummary] = useState("Descreva brevemente seu projeto")
    const [desiredOutcome, setDesiredOutcome] = useState("Resultado esperado")
    const [beneficts, setBeneficts] = useState("Exemplo: Participando do projeto voce irá desenvolver tanto suas hard skills quanto as softs.")
    const [schedule, setSchedule] = useState("Exemplo: Todas as Segundas, Quartas e Sextas-feiras às 18:00")
    const [registrationDueDate, setRegistrationDueDate] = useState("")
    const [languages, setLanguages] = useState([])
    const [otherLanguage, setOtherLanguadge] = useState("")
    const [checked, setChecked] = useState(false)

    const languageList = [ "JavaScript", "Python", "HTML", "CSS", "C#", "TypeScript", "GO"]

    const addLanguage = (language) => {
        const languageList = [...languages, language]
        setLanguages(languageList)
        setChecked(true)
    }

    const removeLanguage = () => {
        const languageList = [...languages]
        languageList.pop()
        setLanguages(languageList)
        setChecked(false)
    } 

    return(
        <div className="bg-[#F6F5F4] flex flex-col items-center py-12">
            <header className="h-20 text-black">Cabeçalho</header>
            <div className="bg-[#FFFFFF] rounded-xl px-12 py-8 flex flex-row items-center gap-x-8">
                <img className="rounded-full" src={imageUrl} alt="Capa do Projeto"/>
                <div>
                    <p className="text-black">{projectName}</p>
                    <p>{startDate}/{dueDate}</p>
                    <p>{summary}</p>
                    <p>{desiredOutcome}</p>
                    <p>{beneficts}</p>
                    <p>{schedule}</p>
                    <p>Data limite de inscriçāo: {registrationDueDate}</p>
                    <p>{languages.join(', ')}</p>
                </div>
            </div>
            <form className="w-4/5 p-8" >
                <label>
                    <p className="text-black">Nome do Projeto:</p>
                    <input className="bg-[#C3DCE3] w-full mb-2 px-4 py-2 text-[#757575]" value={projectName} onChange={(event) => setProjectName(event.target.value)}/>
                </label>
                <label>
                    <p className="text-black">Link da imagem do projeto:</p>
                    <input className="bg-[#C3DCE3] w-full mb-2 px-4 py-2 text-[#757575]" type="url" value={imageUrl} onChange={(event) => setImageUrl(event.target.value)}/>
                </label>
                <div className="flex flex-row w-full gap-6 mb-2">
                    <label className="w-2/4">
                        <p className="text-black">Data Estimada de Inicio:</p>
                        <input className="bg-[#C3DCE3] w-full px-4 py-2 text-[#757575]" type="date" value={startDate} onChange={(event) => setStartDate(event.target.value)} />
                    </label>
                    <label className="w-2/4">
                        <p className="text-black">Data Estimada de Inicio:</p>
                        <input className="bg-[#C3DCE3] w-full px-4 py-2 text-[#757575]"  type="date" value={dueDate} onChange={(event) => setDueDate(event.target.value)} />
                    </label>
                </div>
                <label>
                    <p className="text-black">Resumo:</p>
                    <input className="bg-[#C3DCE3] w-full mb-2 px-4 py-2 text-[#757575]"  value={summary} onChange={(event) => setSummary(event.target.value)}/>
                </label>
                <label>
                    <p className="text-black">Objetivo do projeto:</p>
                    <input className="bg-[#C3DCE3] w-full mb-2 px-4 py-2 text-[#757575]"  value={desiredOutcome} onChange={(event) => setDesiredOutcome(event.target.value)}/>
                </label>
                <label>
                    <p className="text-black">Benefícios em participar do projeto:</p>
                    <input className="bg-[#C3DCE3] w-full mb-2 px-4 py-2 text-[#757575]"  value={beneficts} onChange={(event) => setBeneficts(event.target.value)}/>
                </label>
                <label>
                    <p className="text-black">Agenda:</p>
                    <input className="bg-[#C3DCE3] w-full mb-2 px-4 py-2 text-[#757575]"  value={schedule} onChange={(event) => setSchedule(event.target.value)}/>
                </label>
                <label>
                    <p className="text-black">Data Limite de Inscriçāo:</p>
                    <input className="bg-[#C3DCE3] w-full mb-2 px-4 py-2 text-[#757575]"  type="date" value={registrationDueDate} onChange={(event) => setRegistrationDueDate(event.target.value)} />
                </label>
                <fieldset className="flex flex-wrap" >
                    <legend className="text-black">Escolha as linguagens que serão utilizadas:</legend>
                    {languageList.map((id)=>{
                        return(
                            <div className="w-2/4" key={id}>
                            <input className="bg-[#C3DCE3]" type="checkbox" id={id} name="language" value={id} onClick={checked ? () => removeLanguage(id) : () => addLanguage(id)}/>
                            <label className="text-black" for={id}>{id}</label>
                            </div>
                        )
                    })}
                    <div className="w-2/4 mb-2">
                        <input type="checkbox" id="other" name="language" value="other" onClick={checked ? () => removeLanguage(otherLanguage) : () => addLanguage(otherLanguage)} />
                        <label className="text-black" for="other">Other</label>
                        <input className="bg-[#C3DCE3] px-1" type="text" id="otherValue" name="other" value={otherLanguage} onChange={(event) => setOtherLanguadge(event.target.value)} />
                    </div>
                </fieldset>
            </form>
            <button className="bg-[#2B788B] w-2/6 mb-2 px-4 py-2 text-white" type="submit">Publicar!</button>
        </div>

    )
}