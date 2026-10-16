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
          <a href="#work" className="hover:text-sage transition-colors">
            Work
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
              I test whether AI systems, and the numbers built on them, can be
              trusted.
            </p>
            <p className="text-sm text-ink/70 mb-5 leading-relaxed">
              Data Scientist at AristAI · IC2S2 2026 paper on LLM agents · UIUC
              M.S. Data Science · bilingual EN/中文
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
            When the methods to answer it changed, I followed. An M.S. in Data
            Science, with research at the Illinois Risk Lab on weather
            derivatives, insurance, public safety and election sentiment. Now
            I&apos;m a data scientist at AristAI, working on LLM evaluation and
            agent design for an AI accreditation platform, and I study what
            frontier models can and can&apos;t infer about political strategy
            (IC2S2 2026). The thread is one question: when can a model&apos;s
            judgment stand in for a person&apos;s?
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
                2026), Burlington, VT; an earlier version appeared at the
                PoliSim Workshop, CHI 2026.{' '}
                <a
                  href="/papers/ic2s2-2026.pdf"
                  className="text-sage hover:underline"
                >
                  [PDF]
                </a>
              </p>
              <p className="text-sm text-ink/70 mt-2 leading-relaxed">
                Two studies ask whether LLMs that recognize a party&apos;s
                strategy from simulated trajectories also choose it when placed
                in the agent&apos;s role, in Laver&apos;s (2005) spatial model
                of party competition. Six LLM configurations recognized
                strategies at 9.4–39% accuracy (chance: 20%); recognizing a
                strategy and choosing it were not clearly related.
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
                Pricing Weather Derivatives under Stochastic Volatility{' '}
                <span className="text-sm font-normal text-ink/60">
                  — IRisk Lab, co-authored team report, 2025
                </span>
              </h3>
              <p className="text-sm leading-relaxed text-ink/85">
                Led model calibration: an Ornstein–Uhlenbeck temperature model
                with Cox–Ingersoll–Ross volatility, fit to 45 years of daily
                data for 13 cities. Priced degree-day derivatives by Monte Carlo
                and FFT and checked them against CME settlement prices; the
                standard model understated tail risk.
              </p>
            </article>
            <article>
              <h3 className="text-base font-semibold mb-1">
                2024 Election Sentiment{' '}
                <span className="text-sm font-normal text-ink/60">
                  — IRisk Lab, 2024
                </span>
              </h3>
              <p className="text-sm leading-relaxed text-ink/85">
                Measured sentiment in 2024 presidential-election tweets (Cardiff
                RoBERTa, fine-tuned LSTM) and documented where model-based
                opinion measurement breaks down.
              </p>
            </article>
            <article>
              <h3 className="text-base font-semibold mb-1">
                Insurance and Public-Safety Models{' '}
                <span className="text-sm font-normal text-ink/60">
                  — IRisk Lab, 2024–2025
                </span>
              </h3>
              <p className="text-sm leading-relaxed text-ink/85">
                Tree-based models predicting life-insurance purchase (AUC from
                0.78 to 0.86), and a GLM for San Francisco crime-prevention
                analysis (deviance explained from 55% to 63%).
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
                Sole-authored regression discontinuity design at the Cape/Boer
                boundary in South Africa: the land system, not legal or cultural
                Anglicization, drives 4–12% gaps in compulsory schooling and
                household electricity today.
              </p>
            </article>
          </div>
        </section>

        {/* Work and Projects */}
        <section id="work" className="mb-20 scroll-mt-16">
          <h2 className="text-xl font-semibold mb-6">Work and Projects</h2>
          <div className="space-y-8">
            <article>
              <h3 className="text-base font-semibold mb-2">
                AristAI, Data Scientist{' '}
                <span className="text-sm font-normal text-ink/60">
                  — Sept 2026 → Present
                </span>
              </h3>
              <p className="text-sm text-ink/70 mb-2 leading-snug">
                An AI platform that evaluates program quality and helps colleges
                prepare for accreditation.
              </p>
              <p className="text-sm leading-relaxed text-ink/85 mb-3">
                I work on whether its AI can be trusted. I evaluate the
                platform&apos;s LLM outputs with a judge model from a different
                provider, blind expert labels and agreement statistics, and
                calibrate AI ratings against human expert ratings. I also design
                the LLM agents behind its verification and documentation work,
                with separate drafting and fact-checking roles and a person
                confirming every decision, so staff confirm decisions instead of
                writing and checking by hand.
              </p>
              {techTags([
                'AI agents',
                'LLM evaluation',
                'Calibration',
                'Python',
                'PostgreSQL',
                'Claude Code',
              ])}
            </article>
            <article>
              <h3 className="text-base font-semibold mb-2">
                AlgoMinds{' '}
                <span className="text-sm font-normal text-ink/60">
                  — 2026 → Present
                </span>
              </h3>
              <p className="text-sm text-ink/70 mb-2 leading-snug">
                A multi-agent LLM system built under an explicit contract
                about what it is allowed to assert.
              </p>
              <p className="text-sm leading-relaxed text-ink/85 mb-3">
                Technical lead of a 6–7 person team building agents that
                produce financial analyses, working with Claude Code as the
                coding partner. The interest is not the finance — it is that
                the domain makes over-claiming expensive, and therefore
                testable. The methodology I wrote governs what a report may
                say: every fact must sit on one declared tier of an evidence
                ladder — measured, derived, modelled, cited, or absent — with
                deliberately no tier for &ldquo;the model believes,&rdquo; and
                the system permanently declines the one question, position
                sizing, that would cross from analysis into advice. The ladder
                is the adopted standard and the governing document;
                enforcement in code is still being built. Non-commercial.
              </p>
              {techTags([
                'LangGraph',
                'FastAPI',
                'PostgreSQL',
                'AWS CDK',
                'Next.js',
                'Cognito',
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
            <article>
              <h3 className="text-base font-semibold mb-2">
                Colleague AI Distillation MCP Server{' '}
                <span className="text-sm font-normal text-ink/60">
                  — 2025
                </span>
              </h3>
              <p className="text-sm leading-relaxed text-ink/85">
                Standalone MCP server synthesizing domain-expert evaluator
                personas from heterogeneous scholarly sources (Google Scholar,
                ORCID, ResearchGate) via Claude-generated 5-layer schemas.
              </p>
            </article>
          </div>
        </section>

        {/* About */}
        <section id="about" className="mb-20 scroll-mt-16">
          <h2 className="text-xl font-semibold mb-6">About</h2>
          <p className="text-sm leading-relaxed text-ink/85">
            Currently in Urbana, IL, working as a data scientist at AristAI.
            Trained at UIUC (M.S. Data Science 2025; M.A. Political Science
            2024, within Ph.D. program), George Washington University (M.A.
            International Affairs 2020), and Nanjing University (B.A. History
            2018). Mandarin Chinese (native), English (full professional).
            Currently writing on whether LLM-simulated survey respondents
            capture how much real people disagree.
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
