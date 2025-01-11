export const getCategoryColor = (category: string): string => {
  const colorMap: Record<string, string> = {
    'programming-languages': 'bg-blue-600',
    'frameworks': 'bg-emerald-600',
    'containerization-and-orchestration': 'bg-purple-600',
    'operating-systems': 'bg-amber-600',
    'monitoring': 'bg-red-600',
    'automation': 'bg-indigo-600',
    'networking': 'bg-orange-600'
  };

  return colorMap[category] || 'bg-gray-600';
};
