import { Badge } from './Badge';
import type { SkillGroup as SkillGroupType } from '@/types';

interface SkillGroupProps {
  group: SkillGroupType;
}

export function SkillGroup({ group }: SkillGroupProps) {
  return (
    <div>
      <h3 className="mb-3 text-sm font-medium text-text-primary">
        {group.category}
      </h3>
      <div className="flex flex-wrap gap-2">
        {group.skills.map((skill) => (
          <Badge key={skill} variant="default">
            {skill}
          </Badge>
        ))}
      </div>
    </div>
  );
}
