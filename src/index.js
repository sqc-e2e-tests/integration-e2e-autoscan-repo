export function classifyMetric(value) {
  if (value > 90) {
    return "excellent";
  }

  if (value > 60) {
    return "healthy";
  }

  return "needs-review";
}

export function summarizeProject(project) {
  return `${project.name}: ${classifyMetric(project.coverage)}`;
}
