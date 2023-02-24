import { useState } from "react"

export const ProjectForm = () => {
    const [projectName, setProjectName] = useState("Nome do Projeto");
    const [imageUrl, setImageUrl] = useState("https://picsum.photos/200/200")
    const [stCSSDate, setStCSSDate] = useState("")
    const [dueDate, setDueDate] = useState("")
    const [summary, setSummary] = useState("Descreva brevemente seu projeto")
    const [desiredOutcome, setDesiredOutcome] = useState("Resultado esperado:")
    const [beneficts, setBeneficts] = useState("Exemplo: PCSSicipando do projeto voce irá desenvolver tanto suas hard skills quanto as softs.")
    const [schedule, setSchedule] = useState("Exemplo: Todas as Segundas, QuCSSas e Sextas-feiras as 18:00.s")
    const [registrationDueDate, setRegistrationDueDate] = useState("")
    // const [languages, setLanguages] = useState("")

    return(
        <div className="bg-[#F6F5F4] flex flex-col items-center">
            <header className="h-20 text-black">Cabeçalho</header>
            <div className="bg-[#FFFFFF] rounded-xl px-12 py-8 flex flex-row items-center gap-x-8">
                <img className="rounded-full" src={imageUrl} alt="Capa para o Projeto // Logo ProjetaDev"/>
                <p className="text-black">{projectName}</p>
            </div>
            <form>
                <label>
                    <p>Nome do Projeto:</p>
                    <input value={projectName} onChange={(event) => setProjectName(event.target.value)}/>
                </label>
                <label>
                    <p>Link da imagem do projeto:</p>
                    <input type="url" value={imageUrl} onChange={(event) => setImageUrl(event.target.value)}/>
                </label>
                <div className="flex flex-row gap-8">
                    <label>
                        <p>Data Estimada de Inicio:</p>
                        <input type="date" value={stCSSDate} onChange={(event) => setStCSSDate(event.target.value)} />
                    </label>
                    <label>
                        <p>Data Estimada de Inicio:</p>
                        <input type="date" value={dueDate} onChange={(event) => setDueDate(event.target.value)} />
                    </label>
                </div>
                <label>
                    <p>Resumo:</p>
                    <input value={summary} onChange={(event) => setSummary(event.target.value)}/>
                </label>
                <label>
                    <p>Objetivo do projeto:</p>
                    <input value={desiredOutcome} onChange={(event) => setDesiredOutcome(event.target.value)}/>
                </label>
                <label>
                    <p>Benefícios em pCSSicipar do projeto:</p>
                    <input value={beneficts} onChange={(event) => setBeneficts(event.target.value)}/>
                </label>
                <label>
                    <p>Agenda:</p>
                    <input value={schedule} onChange={(event) => setSchedule(event.target.value)}/>
                </label>
                <label>
                        <p>Data Limite de Inscriçāo:</p>
                        <input type="date" value={registrationDueDate} onChange={(event) => setRegistrationDueDate(event.target.value)} />
                </label>
                    {/* <p>Linguagens:</p>
                    <input type="checkbox" value={languages} onChange={(event) => setLanguages(event.target.value)}/> */}
                <fieldset className="" >
                    <legend>Escolha as linguagens que serão utilizadas</legend>
                    <div>
                        <input type="checkbox" id="SQL" name="language" value="SQL" />
                        <label for="SQL">SQL</label>
                    </div>
                    <div>
                        <input type="checkbox" id="HTML" name="language" value="HTML" />
                        <label for="HTML">HTML</label>
                    </div>
                    <div>
                        <input type="checkbox" id="CSS" name="language" value="CSS" />
                        <label for="CSS">CSS</label>
                    </div>
                    <div>
                        <input type="checkbox" id="C#" name="language" value="C#" />
                        <label for="C#">C#</label>
                    </div>
                    <div>
                        <input type="checkbox" id="TypeScript" name="language" value="TypeScript" />
                        <label for="TypeScript">TypeScript</label>
                    </div>
                    <div>
                        <input type="checkbox" id="SQL" name="language" value="SQL" />
                        <label for="SQL">SQL</label>
                    </div>
                    <div>
                        <input type="checkbox" id="HTML" name="language" value="HTML" />
                        <label for="HTML">HTML</label>
                    </div>
                    <div>
                        <input type="checkbox" id="CSS" name="language" value="CSS" />
                        <label for="CSS">CSS</label>
                    </div>
                    <div>
                        <input type="checkbox" id="other" name="language" value="other" />
                        <label for="other">Other</label>
                        <input type="text" id="otherValue" name="other" />
                    </div>
                </fieldset>
                <button type="submit">Publicar!</button>
            </form>

        </div>

    )
}