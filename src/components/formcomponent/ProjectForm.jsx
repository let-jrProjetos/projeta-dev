import { useState } from "react"
import { useForm } from "../../hooks/useForm";

export default function ProjectForm () {
    const { form, onChange } = useForm({ projectName:"", link:"", startDate:"", dueDate:"", summary:"", desiredOutcome:"", beneficts:"", schedule:"", registrationDueDate:"", otherLanguage:"" })

    const projectExemple = 
    { 
        projectName:"Nome do Projeto",
        link:"https://picsum.photos/200/200",
        startDate:"Descreva brevemente seu projeto",
        dueDate:"",
        summary:"",
        desiredOutcome:"Resultado esperado",
        beneficts:"Exemplo: Participando do projeto voce irá desenvolver tanto suas hard skills quanto as softs.",
        schedule:"Exemplo: Todas as Segundas, Quartas e Sextas-feiras às 18:00",
        registrationDueDate:""
    }

    const [languages, setLanguages] = useState([])
    // const [otherLanguage, setOtherLanguadge] = useState("")
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

    const submitForm = (event) => {
        event.preventDefault()
    }

    return(
        <div className="bg-[#F6F5F4] flex flex-col items-center py-12">
            <header className="h-20 text-black">Cabeçalho</header>
            <div className="bg-[#FFFFFF] rounded-xl px-12 py-8 flex flex-row items-center gap-x-8">
                <img className="rounded-full" src={projectExemple.link} alt="Capa do Projeto"/>
                <div className="text-black">
                    <p>{projectExemple.projectName}</p>
                    <p>{projectExemple.startDate}/{projectExemple.dueDate}</p>
                    <p>{projectExemple.summary}</p>
                    <p>{projectExemple.desiredOutcome}</p>
                    <p>{projectExemple.beneficts}</p>
                    <p>{projectExemple.schedule}</p>
                    <p>Data limite de inscriçāo: {projectExemple.registrationDueDate}</p>
                    <p>{languages.join(', ')}</p>
                </div>
            </div>
            <form onSubmit={submitForm} className="w-4/5 p-8" >
                <label 
                    htmlFor="projectName"
                    className="text-black"
                >Nome do Projeto:</label>
                <input 
                    id="projectName"
                    name="projectName"
                    value={form.projectName}
                    placeholder="Nome do Projeto"
                    type="text"
                    onChange={onChange}
                    className="bg-[#C3DCE3] w-full mb-2 px-4 py-2 text-[#757575]"
                />

                <label 
                    htmlFor="link"
                    className="text-black"
                >Link da imagem do projeto:</label>
                <input 
                    id="link"
                    name="link"
                    value={form.link}
                    placeholder="https://picsum.photos/200/200"
                    type="url"
                    onChange={onChange}
                    className="bg-[#C3DCE3] w-full mb-2 px-4 py-2 text-[#757575]" 
                />

                <div className="flex flex-row w-full gap-6 mb-2" >
                    <label 
                        htmlFor="startDate"
                        className="w-2/4 text-black"
                    >Data Estimada de Inicio:</label>
                    <input 
                        id="startDate"
                        name="startDate"
                        value={form.startDate}
                        type="date"
                        onChange={onChange}
                        className="bg-[#C3DCE3] w-full px-4 py-2 text-[#757575]"
                    />
                    <label 
                        htmlFor="dueDate" 
                        className="w-2/4 text-black"
                    >Data Estimada de Término:</label>
                    <input 
                        id="dueDate"
                        name="dueDate"
                        value={form.dueDate}
                        type="date"
                        onChange={onChange}
                        className="bg-[#C3DCE3] w-full px-4 py-2 text-[#757575]"
                    />
                </div>

                <label 
                    htmlFor="summary"
                    className="text-black"
                >Resumo:</label>
                <input 
                    id="summary"
                    name="summary"
                    value={form.summary}
                    placeholder="Descreva brevemente seu projeto"
                    type="text"
                    onChange={onChange}
                    className="bg-[#C3DCE3] w-full mb-2 px-4 py-2 text-[#757575]" 
                />

                <label 
                    htmlFor="desiredOutcome"
                    className="text-black"
                >Objetivo do projeto:</label>
                <input 
                    id="desiredOutcome"
                    name="desiredOutcome"
                    value={form.desiredOutcome}
                    type="text"
                    onChange={onChange}
                    className="bg-[#C3DCE3] w-full mb-2 px-4 py-2 text-[#757575]" 
                />

                <label 
                    htmlFor="beneficts"
                    className="text-black"
                >Benefícios em participar do projeto:</label>
                <input 
                    id="beneficts"
                    name="beneficts"
                    value={form.beneficts}
                    type="text"
                    onChange={onChange}
                    className="bg-[#C3DCE3] w-full mb-2 px-4 py-2 text-[#757575]" 
                />

                <label 
                    htmlFor="schedule"
                    className="text-black"
                >Agenda:</label>
                <input 
                    id="schedule"
                    name="schedule"
                    value={form.schedule}
                    type="text"
                    onChange={onChange}
                    className="bg-[#C3DCE3] w-full mb-2 px-4 py-2 text-[#757575]" 
                />

                <label 
                    htmlFor="registrationDueDate"
                    className="text-black"
                >Data Limite de Inscriçāo:</label>
                <input 
                    id="registrationDueDate"
                    name="registrationDueDate"
                    value={form.registrationDueDate}
                    type="date"
                    onChange={onChange}
                    className="bg-[#C3DCE3] w-full mb-2 px-4 py-2 text-[#757575]" 
                />

                <fieldset className="flex flex-wrap" >
                    <legend className="text-black">Escolha as linguagens que serão utilizadas:</legend>
                    {languageList.map((id)=>{
                        return(
                            <div key={id} className="w-2/4" >
                                <input 
                                    id={id}
                                    value={id}
                                    name="language"
                                    type="checkbox"
                                    onClick={ checked ? () => removeLanguage(id) : () => addLanguage(id) }
                                    className="bg-[#C3DCE3]"
                                />
                                <label 
                                    htmlFor={id} 
                                    className="text-black"
                                >{id}</label>
                            </div>
                        )
                    })}
                    <div className="w-2/4 mb-2">
                        <input 
                            id="other"
                            value="other"
                            name="language"
                            type="checkbox"
                            onClick={ checked ? () => removeLanguage(otherLanguage) : () => addLanguage(otherLanguage) }
                        />
                        <label 
                            htmlFor="otherLanguage"
                            className="text-black"
                        >Other</label>
                        <input 
                            id="otherLanguage"
                            value={form.otherLanguage}
                            name="otherLanguage"
                            type="text"
                            onChange={onChange}
                            className="bg-[#C3DCE3] px-1"
                        />
                    </div>
                </fieldset>
            </form>
            <button className="bg-[#2B788B] w-2/6 mb-2 px-4 py-2 text-white" type="submit">Publicar!</button>
        </div>

    )
}