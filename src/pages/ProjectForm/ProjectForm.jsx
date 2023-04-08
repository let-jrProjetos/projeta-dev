import { useState } from "react"
import { useForm } from "../../hooks/useForm";

const ProjectFormPage = () => {
    const { form, onChange } = useForm({ projectName:"", link:"", startDate:"", dueDate:"", summary:"", desiredOutcome:"", beneficts:"", schedule:"", registrationDueDate:"", otherLanguage:"" })

    const projectExemple = 
    { 
        projectName:"NOME DO PROJETO",
        link:"https://picsum.photos/200/200",
        startDate:"",
        dueDate:"",
        summary:"Descreva brevemente seu projeto",
        desiredOutcome:"Resultado esperado",
        beneficts:"| Participando do projeto voce irá desenvolver tanto suas hard skills quanto as softs |",
        schedule:"~ Todas as Segundas, Quartas e Sextas-feiras às 18:00 ~",
        registrationDueDate:""
    }

    const [languages, setLanguages] = useState([])
    const [languageOptions,setLanguageOptions] = useState([ "JavaScript", "Python", "HTML", "CSS", "C#", "TypeScript"])

    const updateLanguageOptions = (language) => {
        const newLanguageOptions = [...languageOptions]
        newLanguageOptions.push(language)
        setLanguageOptions(newLanguageOptions)
        form.otherLanguage = ""
    }

    const changeLanguageList = (language) => {
        if(languages.includes(language)){
            const newLanguageList = [...languages]
            const index = newLanguageList.indexOf(language)
            newLanguageList.splice(index,1)
            setLanguages(newLanguageList)
        }else{
            const newLanguageList = [...languages]
            newLanguageList.push(language)
            setLanguages(newLanguageList)
        }
    }

    const submitForm = (event) => {
        event.preventDefault()
        console.log(form)
    }

    return(
        <div className="bg-[#F6F5F4] flex flex-col items-center py-12">
            <header className="font-Dela text-black h-20">Cabeçalho</header>
            <div className="bg-[#FFFFFF] font-Montserrat min-w-min rounded-xl m-10 px-12 py-12 flex flex-row flex-wrap justify-center gap-8">
                <img className="rounded-full" src={ form.link === "" ? projectExemple.link : form.link } alt="Capa do Projeto"/>
                <div className="text-black self-center ">
                    <p className="font-Dela">{ form.projectName === "" ? projectExemple.projectName : form.projectName }</p>
                    <p>{ form.startDate === "" ? "" : `${form.startDate} / ` }{ form.dueDate }</p>
                    <p>{ form.summary === "" ? projectExemple.summary : form.summary }</p>
                    <p>{ form.desiredOutcome === "" ? projectExemple.desiredOutcome : form.desiredOutcome}</p>
                    <p>{ form.beneficts === "" ? projectExemple.beneficts : form.beneficts}</p>
                    <p>{ form.schedule === "" ? projectExemple.schedule : form.schedule}</p>
                    <p>Data limite de inscriçāo: { form.registrationDueDate }</p>
                    <p>{languages.join(', ')}</p>
                </div>
            </div>
            <form onSubmit={submitForm} className="font-Montserrat w-4/5 p-8" >
                <label 
                    htmlFor="projectName"
                    className="text-black"
                >Nome do Projeto:</label>
                <input 
                    id="projectName"
                    name="projectName"
                    value={form.projectName}
                    type="text"
                    onChange={onChange}
                    className="bg-[#C3DCE3] w-full mb-2 px-4 py-2 text-[#757575]"
                    required
                />

                <label 
                    htmlFor="link"
                    className="text-black"
                >Link da imagem do projeto:</label>
                <input 
                    id="link"
                    name="link"
                    value={form.link}
                    type="url"
                    onChange={onChange}
                    className="bg-[#C3DCE3] w-full mb-2 px-4 py-2 text-[#757575]"
                    required
                />

                <div className="flex flex-row flex-wrap w-full mb-2" >
                    <label 
                        htmlFor="startDate"
                        className="w-2/4 text-black"
                    >Data de Inicio:</label>
                    <input 
                        id="startDate"
                        name="startDate"
                        value={form.startDate}
                        type="date"
                        onChange={onChange}
                        className="bg-[#C3DCE3] w-full px-4 py-2 text-[#757575]"
                        required
                    />
                </div>
                <div className="flex flex-row flex-wrap w-full mb-2" >
                <label 
                        htmlFor="dueDate" 
                        className="w-2/4 text-black"
                    >Data de Término:</label>
                    <input 
                        id="dueDate"
                        name="dueDate"
                        value={form.dueDate}
                        type="date"
                        onChange={onChange}
                        className="bg-[#C3DCE3] w-full px-4 py-2 text-[#757575]"
                        required
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
                    type="text"
                    onChange={onChange}
                    className="bg-[#C3DCE3] w-full mb-2 px-4 py-2 text-[#757575]"
                    required
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
                    required
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
                    required
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
                    required
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
                    required 
                />

                <fieldset className="flex flex-wrap">
                    <legend className="text-black">Escolha as linguagens que serão utilizadas:</legend>
                    {languageOptions.map((language)=>{
                        return(
                            <div key={language} className="w-2/4 flex flex-row gap-1" >
                                <input 
                                    id={language}
                                    name="language"
                                    value={language}
                                    type="checkbox"
                                    onClick={ () => changeLanguageList(language) }
                                    className="bg-[#C3DCE3]"
                                />
                                <label 
                                    htmlFor={language} 
                                    className="text-black"
                                >{language}</label>
                            </div>
                        )
                    })}
                </fieldset>
                <div className="flex w-2/4 mb-2">
                        <label 
                            htmlFor="otherLanguage"
                            className="text-black mr-1"
                        >Outra: </label>
                        <input 
                            id="otherLanguage"
                            name="otherLanguage"
                            value={form.otherLanguage}
                            type="text"
                            onChange={onChange}
                            className="bg-[#C3DCE3] w-32 mr-1 px-1 text-black"
                        />
                        <button 
                            id="other"
                            name="other"
                            value="other"
                            type="button"
                            onClick={ () => updateLanguageOptions(form.otherLanguage) }
                            className="bg-[#C3DCE3] border-2 border-[#2B788B] max-w-3/6 px-2 py-1 text-black"
                        >Adicionar</button>
                    </div>
                    <div className="flex justify-center mt-8" >
                        <button
                        type="submit"
                        className="bg-[#2B788B] max-w-3/6 px-4 py-2 text-white "
                        >Publicar!</button>
                    </div>
            </form>
        </div>
    )
}
export default ProjectForm;