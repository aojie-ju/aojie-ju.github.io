import Image from 'next/image'

const techTags = (tags: string[]) => (
  <div className="flex flex-wrap gap-2">
    {tags.map((t) => (
      <span
        key={t}
        className="text-xs font-mono bg-sage/10 text-sage-deep px-2 py-1 rounded"
      >
        {t}
      </span>
    ))}
  </div>
)

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Sticky thin nav */}
      <nav className="sticky top-0 z-10 bg-bg/85 backdrop-blur border-b border-ink/10">
        <div className="max-w-prose mx-auto px-6 py-3 flex gap-6 text-sm">
          <a href="#publications" className="hover:text-sage transition-colors">
            Publications
          </a>
          <a href="#research" className="hover:text-sage transition-colors">
            Research
          </a>
          <a href="#projects" className="hover:text-sage transition-colors">
            Projects
          </a>
          <a href="#about" className="hover:text-sage transition-colors">
            About
          </a>
        </div>
      </nav>

      <div className="max-w-prose mx-auto px-6 pt-12 pb-16">
        {/* Hero */}
        <section className="flex flex-col-reverse sm:flex-row gap-8 items-start mb-20">
          <div className="flex-1">
            <h1 className="text-4xl font-semibold tracking-tight mb-3">
              Aojie Ju
            </h1>
            <p className="text-xl mb-3 leading-snug">
              I build AI products and study how they land across cultures.
            </p>
            <p className="text-sm text-ink/70 mb-5 leading-relaxed">
              AristAI AI engineer · IC2S2 2026 paper on computational social
              science · UIUC MS Data Science · bilingual EN/中文
            </p>
            <p className="text-sm">
              <a
                href="mailto:aojieju@gmail.com"
                aria-label="Email Aojie Ju at aojieju@gmail.com"
                className="hover:text-sage hover:underline"
              >
                aojieju@gmail.com
              </a>
              <span className="mx-2 text-ink/30" aria-hidden="true">·</span>
              <a
                href="https://www.linkedin.com/in/aojie-ju-3b499216b/"
                aria-label="Aojie Ju on LinkedIn"
                className="hover:text-sage hover:underline"
              >
                LinkedIn
              </a>
              <span className="mx-2 text-ink/30" aria-hidden="true">·</span>
              <a
                href="https://github.com/aojie-ju"
                aria-label="Aojie Ju on GitHub"
                className="hover:text-sage hover:underline"
              >
                GitHub
              </a>
            </p>
          </div>
          <Image
            src="/headshot.webp"
            alt="Aojie Ju"
            width={360}
            height={360}
            className="rounded-full object-cover w-[120px] h-[120px]"
            priority
          />
        </section>

        {/* Story */}
        <section className="mb-20">
          <p className="text-base leading-relaxed border-l-2 border-sage/40 pl-5 italic text-ink/85">
            I came to AI the long way around. Trained as a historian at
            Nanjing, then in international affairs at GW, then in political
            science at UIUC — where I used causal-inference methods to study
            how colonial land systems shape contemporary public goods
            (presented at MPSA 2023) and earlier, Asian American political
            behavior — I kept running into the same question: how do
            institutions and the agents inside them actually shape behavior?
            When the methods to answer it changed, I followed. An MS in Data
            Science. Last year, quantitative work on weather-derivative
            pricing, election sentiment, and ETF prediction. Now I build
            LLM-powered tools for classroom discussion at AristAI, and study
            what frontier models can and can&apos;t infer about political
            strategy (IC2S2 2026). The thread is the question and the methods,
            not the field.
          </p>
        </section>

        {/* Publications */}
        <section id="publications" className="mb-20 scroll-mt-16">
          <h2 className="text-xl font-semibold mb-6">Publications</h2>
          <div className="space-y-6">
            <article>
              <p className="text-base leading-relaxed">
                <strong className="font-semibold">Ju, A.</strong>, &amp; Pi, Y. (2026).{' '}
                <em>
                  From Strategy Recognition to Strategic Adaptation:
                  Validating LLM Agents in Spatial Voting Models.
                </em>{' '}
                International Conference on Computational Social Science (IC2S2
                2026), Burlington, VT.{' '}
                <a
                  href="/papers/ic2s2-2026.pdf"
                  className="text-sage hover:underline"
                >
                  [PDF]
                </a>
              </p>
              <p className="text-sm text-ink/70 mt-2 leading-relaxed">
                Two studies test whether LLMs can both recognize and enact five
                classic party strategies in a Laver (2005) spatial voting model.
                GPT-4o recognizes strategies at 39% (vs 20% chance) but, as a
                competing agent, rigidly plays one strategy regardless of
                opponent — recognition and use are uncorrelated (r = -0.15),
                showing that passing an inference test is necessary but
                insufficient for LLM social-simulation agents.
              </p>
            </article>
            <article>
              <p className="text-base leading-relaxed">
                Henrici, J., &amp;{' '}
                <strong className="font-semibold">Ju, A.</strong> (2021).{' '}
                <em>
                  Wuhan Household Food Provisioning under Blockaded COVID-19
                  Lockdown.
                </em>{' '}
                Culture, Agriculture, Food and Environment, 43(2), 96–106.{' '}
                <a
                  href="https://doi.org/10.1111/cuag.12274"
                  className="text-sage hover:underline"
                >
                  [DOI]
                </a>
              </p>
            </article>
            <article>
              <p className="text-base leading-relaxed">
                Henrici, J.,{' '}
                <strong className="font-semibold">Ju, A.</strong>, &amp;
                Raulston, C. (2021).{' '}
                <em>
                  Feeding Families in Wuhan During a COVID-19 Quarantine:
                  Intersectional Adaptations to a Disaster.
                </em>{' '}
                Natural Hazards Center Quick Response Research Report.
              </p>
            </article>
          </div>
          <p className="text-sm text-ink/70 mt-8 leading-relaxed">
            <span className="font-semibold text-ink">Service.</span> Reviewer,
            International Conference on Computational Social Science (IC2S2),
            2026.
          </p>
        </section>

        {/* Selected Research */}
        <section id="research" className="mb-20 scroll-mt-16">
          <h2 className="text-xl font-semibold mb-6">Selected Research</h2>
          <div className="space-y-6">
            <article>
              <h3 className="text-base font-semibold mb-1">
                Colleague AI Distillation MCP Server{' '}
                <span className="text-sm font-normal text-ink/60">— 2025</span>
              </h3>
              <p className="text-sm leading-relaxed text-ink/85">
                Standalone MCP server synthesizing domain-expert evaluator
                personas from heterogeneous scholarly sources (Google Scholar,
                ORCID, ResearchGate) via Claude-generated 5-layer schemas.
              </p>
            </article>
            <article>
              <h3 className="text-base font-semibold mb-1">
                2024 Election Sentiment &amp; Voting Forecasts{' '}
                <span className="text-sm font-normal text-ink/60">
                  — IRisk Lab, 2024
                </span>
              </h3>
              <p className="text-sm leading-relaxed text-ink/85">
                Transformer-based sentiment analysis (Cardiff RoBERTa,
                fine-tuned LSTM) forecasting voting outcomes within 3% error;
                methodological connection to LLM-based public-opinion
                measurement.
              </p>
            </article>
            <article>
              <h3 className="text-base font-semibold mb-1">
                Pricing Weather Derivatives under Stochastic Volatility{' '}
                <span className="text-sm font-normal text-ink/60">
                  — IRisk Lab, co-authored, 2025
                </span>
              </h3>
              <p className="text-sm leading-relaxed text-ink/85">
                Calibrated Model M (OU + CIR) on daily temperature from 13
                international cities; priced HDD derivatives via Monte Carlo
                and FFT; validated against CME market quotes. Led model
                calibration.
              </p>
            </article>
            <article>
              <h3 className="text-base font-semibold mb-1">
                Heterogeneous Colonial Rules &amp; Public Goods Provision{' '}
                <span className="text-sm font-normal text-ink/60">
                  — presented MPSA 2023
                </span>
              </h3>
              <p className="text-sm leading-relaxed text-ink/85">
                Sole-authored quasi-experimental RDD on the Cape/Boer
                demarcation in South Africa; finds the land system drives
                4–12% gaps in modern compulsory education and household
                electricity.
              </p>
            </article>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="mb-20 scroll-mt-16">
          <h2 className="text-xl font-semibold mb-6">Projects</h2>
          <div className="space-y-8">
            <article>
              <h3 className="text-base font-semibold mb-2">
                AristAI{' '}
                <span className="text-sm font-normal text-ink/60">
                  — Dec 2025 → Present
                </span>
              </h3>
              <p className="text-sm text-ink/70 mb-2 leading-snug">
                Real-time AI copilot for live classroom discussions.
              </p>
              <p className="text-sm leading-relaxed text-ink/85 mb-3">
                AI-assisted classroom forum used by instructors to run live
                discussion sessions with real-time AI copilot support. I
                designed the LLM-based voice intent classifier (30+ intent
                categories, bilingual), the LangGraph-orchestrated copilot
                with token-cost observability, and the MCP server exposing
                30+ educational tools to AI agents.
              </p>
              {techTags([
                'Next.js',
                'FastAPI',
                'PostgreSQL',
                'LangGraph',
                'MCP',
                'Claude API',
              ])}
            </article>
            <article>
              <h3 className="text-base font-semibold mb-2">
                National Accreditation Platform{' '}
                <span className="text-sm font-normal text-ink/60">
                  — 2025
                </span>
              </h3>
              <p className="text-sm text-ink/70 mb-2 leading-snug">
                Federal-compliant credentialing + labor-market infrastructure
                for US higher education.
              </p>
              <p className="text-sm leading-relaxed text-ink/85 mb-3">
                Accreditation infrastructure for US higher-ed institutions:
                Ed25519/AES-256-GCM cryptographic credentialing (IMS CLR 2.0),
                federal Gainful Employment regulatory logic, BLS labor-market
                integration (600+ time series), Docker-isolated agent sandbox
                for untrusted ML evaluators, and the Colleague AI Distillation
                MCP server.
              </p>
              {techTags([
                'Node.js',
                'Ed25519',
                'IMS CLR 2.0',
                'BLS API',
                'Docker',
                'MCP',
              ])}
            </article>
            <article>
              <h3 className="text-base font-semibold mb-2">
                tax-workflow-mcp{' '}
                <span className="text-sm font-normal text-ink/60">
                  — 2026
                </span>
              </h3>
              <p className="text-sm text-ink/70 mb-2 leading-snug">
                Free, privacy-first US tax filing for F-1 / J-1 international
                students.
              </p>
              <p className="text-sm leading-relaxed text-ink/85 mb-3">
                An MCP server + skill that handles 1040-NR, Form 8843, treaty
                benefits, FICA refund (Forms 843 + 8316), and dual-status
                returns — the cases TurboTax and Cash App Taxes refuse.
                Sprintax charges $50–$100/year for the same scope; this is
                free. Your SSN never enters Claude&apos;s context.{' '}
                <a
                  href="https://github.com/aojie-ju/tax-workflow-mcp"
                  className="text-sage hover:underline"
                >
                  [GitHub]
                </a>
              </p>
              {techTags([
                'TypeScript',
                'MCP',
                'Claude Code',
                'pdf-lib',
                'Zod',
              ])}
            </article>
          </div>
        </section>

        {/* About */}
        <section id="about" className="mb-20 scroll-mt-16">
          <h2 className="text-xl font-semibold mb-6">About</h2>
          <p className="text-sm leading-relaxed text-ink/85">
            Currently in Champaign, IL, working as AI engineer at AristAI.
            Trained at UIUC (M.S. Data Science 2025; M.A. Political Science
            2024, within Ph.D. program), George Washington University (M.A.
            International Affairs 2020), and Nanjing University (B.A. History
            2018). Mandarin Chinese (native), English (full professional).
            Currently writing on cross-cultural LLM evaluation and AI-assisted
            teaching.
          </p>
        </section>

        {/* Footer */}
        <footer className="pt-8 border-t border-ink/10 text-xs text-ink/60 text-center">
          <a
            href="mailto:aojieju@gmail.com"
            aria-label="Email Aojie Ju at aojieju@gmail.com"
            className="hover:text-sage"
          >
            aojieju@gmail.com
          </a>
          <span className="mx-2" aria-hidden="true">·</span>
          <a
            href="https://www.linkedin.com/in/aojie-ju-3b499216b/"
            aria-label="Aojie Ju on LinkedIn"
            className="hover:text-sage"
          >
            LinkedIn
          </a>
          <span className="mx-2" aria-hidden="true">·</span>
          <a
            href="https://github.com/aojie-ju"
            aria-label="Aojie Ju on GitHub"
            className="hover:text-sage"
          >
            GitHub
          </a>
          <span className="mx-2" aria-hidden="true">·</span>
          <span>© {new Date().getFullYear()} Aojie Ju · Built with Next.js on GitHub Pages</span>
        </footer>
      </div>
    </main>
  )
}
