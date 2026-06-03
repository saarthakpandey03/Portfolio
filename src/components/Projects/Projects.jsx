import SectionHeader from '../common/SectionHeader'
import ProjectCard from './ProjectCard'
import { PROJECTS } from '../../utils/constants'
import './projects.css'

/* ─── Terminal code snippets (JSX) ──────────────────────────────
   Kept here so ProjectCard stays data-agnostic.
──────────────────────────────────────────────────────────────── */
const CODE_SNIPPETS = {
documind: (
  <>
    <span className="tc"># DocuMind AI - RAG Pipeline</span><br/>

    <span className="tg">from</span>
    <span className="ta"> langchain_community.document_loaders</span>
    <span className="tg"> import</span>
    <span className="ty"> PyPDFLoader</span><br/>

    <span className="tg">from</span>
    <span className="ta"> langchain.text_splitter</span>
    <span className="tg"> import</span>
    <span className="ty"> RecursiveCharacterTextSplitter</span><br/>

    <span className="tg">from</span>
    <span className="ta"> langchain_community.vectorstores</span>
    <span className="tg"> import</span>
    <span className="ty"> FAISS</span><br/><br/>

    <span className="tg">loader</span>
    <span className="tc"> = </span>
    <span className="ta">PyPDFLoader</span>
    <span className="tc">(</span>
    <span className="ty">"research_paper.pdf"</span>
    <span className="tc">)</span><br/>

    <span className="tg">documents</span>
    <span className="tc"> = loader.load()</span><br/><br/>

    <span className="tg">splitter</span>
    <span className="tc"> = RecursiveCharacterTextSplitter(</span><br/>
    &nbsp;&nbsp;<span className="ty">chunk_size=1000</span><span className="tc">,</span><br/>
    &nbsp;&nbsp;<span className="ty">chunk_overlap=200</span><br/>
    <span className="tc">)</span><br/><br/>

    <span className="tg">chunks</span>
    <span className="tc"> = []</span><br/>

    <span className="tr">for</span>
    <span className="tc"> doc </span>
    <span className="tr">in</span>
    <span className="tc"> documents:</span><br/>
    &nbsp;&nbsp;<span className="tg">chunks</span>
    <span className="tc"> += splitter.split_documents([doc])</span><br/><br/>

  </>
),
videomind: (
  <>
    <span className="tc"># VideoMind AI - Video Q&A System</span><br/>

    <span className="tg">from</span>
    <span className="ta"> youtube_transcript_api</span>
    <span className="tg"> import</span>
    <span className="ty"> YouTubeTranscriptApi</span><br/>

    <span className="tg">from</span>
    <span className="ta"> langchain.text_splitter</span>
    <span className="tg"> import</span>
    <span className="ty"> RecursiveCharacterTextSplitter</span><br/><br/>

    <span className="tg">video_id</span>
    <span className="tc"> = </span>
    <span className="ty">"youtube_video_id"</span><br/>

    <span className="tg">transcript</span>
    <span className="tc"> = YouTubeTranscriptApi.get_transcript(</span>
    <span className="tg">video_id</span>
    <span className="tc">)</span><br/><br/>

    <span className="tg">full_text</span>
    <span className="tc"> = </span>
    <span className="ty">""</span><br/>

    <span className="tr">for</span>
    <span className="tc"> chunk </span>
    <span className="tr">in</span>
    <span className="tc"> transcript:</span><br/>
    &nbsp;&nbsp;<span className="tg">full_text</span>
    <span className="tc"> += chunk["text"] + </span>
    <span className="ty">" "</span><br/><br/>

    <span className="tg">splitter</span>
    <span className="tc"> = RecursiveCharacterTextSplitter(</span><br/>
    &nbsp;&nbsp;<span className="ty">chunk_size=1000</span><span className="tc">,</span><br/>
    &nbsp;&nbsp;<span className="ty">chunk_overlap=200</span><br/>
    <span className="tc">)</span><br/><br/>

    <span className="tg">docs</span>
    <span className="tc"> = splitter.create_documents([full_text])</span><br/>


  </>
),

  futureearth: (
    <>
      <span className="tc">// Gamified Learning Engine 🎮</span><br/>
      <span className="tg">const</span>
      <span className="ta"> FutureEarth</span>
      <span className="tc"> = () =&gt; {'{'}</span><br/>
      &nbsp;&nbsp;<span className="tg">const</span>
      <span className="tc"> [xp, setXP] = </span>useState
      <span className="tc">(</span><span className="ty">0</span><span className="tc">)</span><br/>
      &nbsp;&nbsp;<span className="tg">const</span>
      <span className="tc"> [level, setLevel] = </span>useState
      <span className="tc">(</span><span className="ty">1</span><span className="tc">)</span><br/><br/>
      &nbsp;&nbsp;<span className="tg">const</span>
      <span className="ta"> completeQuiz</span>
      <span className="tc"> = async (answers) =&gt; {'{'}</span><br/>
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="tg">const</span> score
      <span className="tc"> = </span>calcScore<span className="tc">(answers)</span><br/>
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="tg">const</span> earned
      <span className="tc"> = score * </span><span className="ty">10</span><br/>
      &nbsp;&nbsp;&nbsp;&nbsp;setXP<span className="tc">(prev =&gt; prev + earned)</span><br/>
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="tr">if</span>
      <span className="tc"> (xp &gt;= level * </span>
      <span className="ty">100</span><span className="tc">)</span><br/>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;setLevel
      <span className="tc">(l =&gt; l + </span><span className="ty">1</span>
      <span className="tc">)</span><br/>
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="tg">await</span> api.saveProgress
      <span className="tc">({'{'}</span>userId, xp<span className="tc">{'}'}</span>
      <span className="tc">)</span><br/>
      &nbsp;&nbsp;<span className="tc">{'}'}</span>
    </>
  ),
}

export default function Projects() {
  const projectsWithCode = PROJECTS.map((p) => ({
    ...p,
    codeJSX: CODE_SNIPPETS[p.id],
  }))

  return (
    <section id="projects" className="projects section-pad">
      <div className="wrap">
        <SectionHeader
          num="03"
          label="What I've Built"
          title="Featured Projects"
          sub="Real-world applications built with performance and scale in mind."
        />

        <div className="projects__list">
          {projectsWithCode.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              delay={`d${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
