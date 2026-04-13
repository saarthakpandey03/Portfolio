import SectionHeader from '../common/SectionHeader'
import ProjectCard from './ProjectCard'
import { PROJECTS } from '../../utils/constants'
import './projects.css'

/* ─── Terminal code snippets (JSX) ──────────────────────────────
   Kept here so ProjectCard stays data-agnostic.
──────────────────────────────────────────────────────────────── */
const CODE_SNIPPETS = {
  chat: (
    <>
      <span className="tc"># Real-Time Chat Server</span><br/>
      <span className="tg">class</span><span className="ta"> ChatConsumer</span>
      <span className="tc">(AsyncWebsocketConsumer):</span><br/><br/>
      &nbsp;&nbsp;<span className="tg">async def</span>
      <span className="ta"> connect</span><span className="tc">(self):</span><br/>
      &nbsp;&nbsp;&nbsp;&nbsp;self.room = <span className="ty">"global_room"</span><br/>
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="tg">await</span> self.channel_layer<br/>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.group_add<span className="tc">(self.room,</span><br/>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="tc">self.channel_name)</span><br/>
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="tg">await</span> self.accept()<br/><br/>
      &nbsp;&nbsp;<span className="tg">async def</span>
      <span className="ta"> receive</span><span className="tc">(self, text_data):</span><br/>
      &nbsp;&nbsp;&nbsp;&nbsp;data <span className="tc">=</span> json.loads<span className="tc">(text_data)</span><br/>
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="tg">await</span> self.channel_layer<br/>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.group_send<span className="tc">({'{'}</span><br/>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="ty">"type"</span>
      <span className="tc">: </span><span className="ty">"chat_message"</span>
      <span className="tc">,</span><br/>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="ty">"message"</span>
      <span className="tc">: data[</span><span className="ty">"message"</span>
      <span className="tc">]</span><br/>
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="tc">{'}'}</span>
      <span className="tc">)</span>
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
