import { Code2 } from "lucide-react";

import { Container } from "../../ui/container";

type ResumeSkillsProps = {
  skills?: string[];
};

const stampTilts = ["-rotate-2", "rotate-1", "-rotate-1", "rotate-2", "-rotate-3", "rotate-3"];

export default function ResumeSkills({ skills }: ResumeSkillsProps) {
  if (!skills?.length) return null;

  return (
    <section className="pb-12">
      <Container>
        <div className="mx-auto max-w-3xl">
          <div className="flex items-center gap-2.5">
            <Code2 size={16} />
            <h2 className="font-mono text-xs font-bold uppercase tracking-widest text-neutral-500">
              Skill set
            </h2>
          </div>

          <h3 className="mt-1.5 font-heading text-2xl font-black">Highlighted Skills</h3>

          <div className="mt-6 flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <span
                key={skill}
                className={`rounded border-[2px] border-black/70 px-3 py-1.5 font-mono text-xs font-black uppercase tracking-wide text-black/70 ${stampTilts[index % stampTilts.length]}`}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}