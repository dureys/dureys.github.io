'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { personalInfo } from '@/data/personal';

/**
 * Interactive "oguzhan.os" console. Boots on mount, then responds to typed
 * commands by assembling real portfolio content on demand — the site behaves
 * like a system you operate instead of a document you scroll.
 */

type Seg = { t: string; c?: string };
type RichLine = Seg[];

const A = 'text-accent';
const DIM = 'text-text-muted';
const BRIGHT = 'text-text-primary';

const PROMPT = 'visitor@oguzhan.os:~$';

const COMMANDS: Record<string, () => RichLine[]> = {
  help: () => [
    [
      { t: 'available ', c: DIM },
      { t: 'whoami  projects  experience  skills  hire  ask <q>  clear', c: A },
    ],
  ],
  whoami: () => [
    [
      { t: 'Oguzhan Durace', c: BRIGHT },
      { t: ' — I build AI systems that reach production and stay there.' },
    ],
    [
      { t: 'Berlin. 6 yrs mapping enterprise process at ' },
      { t: 'Accenture, Shell, Salesforce', c: A },
      { t: ' before going deep on applied AI.' },
    ],
  ],
  projects: () => [
    [
      { t: '▸ Lead Qualification Engine', c: A },
      { t: '   enrich → score → route in Salesforce   ' },
      { t: '[+40% conversion]', c: A },
    ],
    [
      { t: '▸ Smart Case Management', c: A },
      { t: '     NLP triage + auto-routing            ' },
      { t: '[-60% triage time]', c: A },
    ],
    [
      { t: '▸ Multi-Agent CRM', c: A },
      { t: '           3 agents: enrich · segment · write ' },
      { t: '[POC]', c: A },
    ],
    [
      { t: '▸ Jira-Slack Alerting', c: A },
      { t: '       smart batching kills alert fatigue  ' },
      { t: '[+35% response]', c: A },
    ],
    [{ t: 'scroll down for the full case studies and live demo.', c: DIM }],
  ],
  experience: () => [
    [
      { t: '2024→now', c: A },
      { t: '  AI Automation Architect · Andercore' },
    ],
    [
      { t: '2023-24 ', c: A },
      { t: '  Salesforce Product Manager · Ubitricity (Shell)' },
    ],
    [
      { t: '2021-23 ', c: A },
      { t: '  Digital Integration Analyst · Accenture' },
    ],
  ],
  skills: () => [
    [
      { t: 'LLMs       ', c: DIM },
      { t: 'GPT · Claude · Gemini · Ollama', c: A },
    ],
    [
      { t: 'Build      ', c: DIM },
      { t: 'Python · TypeScript · FastAPI · n8n · React', c: A },
    ],
    [
      { t: 'Enterprise ', c: DIM },
      { t: 'Salesforce · Jira · REST APIs', c: A },
    ],
  ],
  hire: () => [
    [{ t: 'Available for senior AI automation and consulting roles.' }],
    [
      { t: '→ ', c: A },
      { t: personalInfo.email, c: A },
      { t: '   ·   ' + personalInfo.location, c: DIM },
    ],
  ],
  contact: () => COMMANDS.hire(),
};

export function CommandConsole() {
  const [lines, setLines] = useState<RichLine[]>([]);
  const [value, setValue] = useState('');
  const [ready, setReady] = useState(false);
  const [history, setHistory] = useState<string[]>([]);
  const histPos = useRef(-1);
  const bodyRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const push = useCallback((rich: RichLine[]) => {
    setLines((prev) => [...prev, ...rich]);
  }, []);

  useEffect(() => {
    const boot: RichLine[] = [
      [{ t: 'initializing oguzhan.os ...', c: DIM }],
      [{ t: 'loading system graph ...', c: DIM }],
      [
        { t: 'agent online. type ' },
        { t: 'help', c: A },
        { t: ' or tap a command below.' },
      ],
    ];
    const timers: ReturnType<typeof setTimeout>[] = [];
    boot.forEach((line, i) => {
      timers.push(setTimeout(() => push([line]), 380 * (i + 1)));
    });
    timers.push(
      setTimeout(() => {
        push(COMMANDS.whoami());
        setReady(true);
      }, 380 * (boot.length + 1))
    );
    return () => timers.forEach(clearTimeout);
  }, [push]);

  useEffect(() => {
    if (bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
  }, [lines]);

  const run = useCallback(
    (raw: string) => {
      const cmd = raw.trim();
      if (!cmd) return;
      setHistory((h) => [...h, cmd]);
      histPos.current = -1;
      push([[{ t: PROMPT + ' ', c: DIM }, { t: cmd, c: BRIGHT }]]);
      const base = cmd.split(/\s+/)[0].toLowerCase();
      if (base === 'clear') {
        setLines([]);
        return;
      }
      if (base === 'ask') {
        push([
          [
            { t: 'the agent ', c: A },
            {
              t:
                '> ask me anything about Oguzhan. (the live build wires this to a RAG over his work and answers in his voice.)',
              c: DIM,
            },
          ],
        ]);
        return;
      }
      const fn = COMMANDS[base];
      if (fn) push(fn());
      else
        push([
          [
            { t: 'command not found: ' + base + '  ·  try ', c: 'text-text-secondary' },
            { t: 'help', c: A },
          ],
        ]);
    },
    [push]
  );

  const chips = ['whoami', 'projects', 'experience', 'skills', 'hire', 'help'];

  return (
    <div
      onClick={() => inputRef.current?.focus()}
      className="overflow-hidden rounded-lg border border-border-subtle bg-[#080b0c]/85 backdrop-blur-sm shadow-2xl shadow-black/40"
    >
      {/* window chrome */}
      <div className="flex items-center gap-2 border-b border-border-subtle bg-black/30 px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
        <span className="ml-2 font-mono text-xs text-accent">oguzhan.os</span>
        <span className="font-mono text-xs text-text-muted">v2.0</span>
        <span className="ml-auto flex items-center gap-2 font-mono text-[11px] text-text-secondary">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
          8 systems · 40% avg uplift · available
        </span>
      </div>

      {/* output */}
      <div
        ref={bodyRef}
        className="h-[320px] overflow-y-auto px-5 py-4 font-mono text-[14px] leading-[1.8]"
      >
        {lines.map((line, i) => (
          <div
            key={i}
            className="animate-fade-up whitespace-pre-wrap break-words text-[#b9c6bb]"
          >
            {line.map((seg, j) => (
              <span key={j} className={seg.c}>
                {seg.t}
              </span>
            ))}
          </div>
        ))}
      </div>

      {/* chips */}
      <div className="flex flex-wrap gap-1.5 px-4 pb-2">
        {chips.map((c) => (
          <button
            key={c}
            onClick={(e) => {
              e.stopPropagation();
              run(c);
              inputRef.current?.focus();
            }}
            className="rounded-full border border-border-subtle bg-white/[0.03] px-3.5 py-1.5 font-mono text-xs text-text-secondary transition-colors hover:border-border-strong hover:text-accent"
          >
            {c}
          </button>
        ))}
      </div>

      {/* input */}
      <div className="flex items-center gap-2 border-t border-border-subtle px-5 py-3.5">
        <span className="font-mono text-[14px] text-accent">{PROMPT}</span>
        <input
          ref={inputRef}
          value={value}
          disabled={!ready}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              run(value);
              setValue('');
            } else if (e.key === 'ArrowUp') {
              e.preventDefault();
              if (!history.length) return;
              histPos.current = Math.min(histPos.current + 1, history.length - 1);
              setValue(history[history.length - 1 - histPos.current]);
            } else if (e.key === 'ArrowDown') {
              e.preventDefault();
              if (histPos.current <= 0) {
                histPos.current = -1;
                setValue('');
              } else {
                histPos.current -= 1;
                setValue(history[history.length - 1 - histPos.current]);
              }
            }
          }}
          placeholder={ready ? 'type a command...' : 'booting...'}
          aria-label="Portfolio command input"
          className="flex-1 bg-transparent font-mono text-[14px] text-text-primary caret-accent outline-none placeholder:text-text-muted"
        />
      </div>
    </div>
  );
}
