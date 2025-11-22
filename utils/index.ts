
// Centralized icon mapping for consistent visuals across the app
export const getIconUrl = (tech: string): string | null => {
  const normalize = (str: string) => str.toLowerCase().replace(/\s+/g, '');
  
  const map: Record<string, string> = {
    'python': 'python/python-original',
    'java': 'java/java-original',
    'php': 'php/php-original',
    'javascript': 'javascript/javascript-original',
    'c': 'c/c-original',
    'c++': 'cplusplus/cplusplus-original',
    'tensorflow': 'tensorflow/tensorflow-original',
    'scikitlearn': 'scikitlearn/scikitlearn-original',
    'pandas': 'pandas/pandas-original',
    'numpy': 'numpy/numpy-original',
    'scipy': 'python/python-original', // Fallback
    'powerbi': 'microsoftsqlserver/microsoftsqlserver-plain', // Approximate fallback
    'react': 'react/react-original',
    'flask': 'flask/flask-original',
    'django': 'django/django-plain',
    'html5': 'html5/html5-original',
    'css3': 'css3/css3-original',
    'bootstrap': 'bootstrap/bootstrap-original',
    'tailwind': 'tailwindcss/tailwindcss-original',
    'mysql': 'mysql/mysql-original',
    'mongodb': 'mongodb/mongodb-original',
    'sqlite': 'sqlite/sqlite-original',
    'cassandra': 'cassandra/cassandra-original',
    'kafka': 'apachekafka/apachekafka-original',
    'azure': 'azure/azure-original',
    'openaiapi': 'openai/openai-original', // Try openai
    'opencv': 'opencv/opencv-original',
    'linux': 'linux/linux-original',
    'git': 'git/git-original',
    'docker': 'docker/docker-original',
    'nosql': 'mongodb/mongodb-original', // Fallback
    'nlp': 'python/python-original', // Fallback
  };

  const key = normalize(tech);
  // Check direct match or manual map
  if (map[key]) {
    return `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${map[key]}.svg`;
  }
  
  // Fallback for specific cases that might be missing in map but exist in devicon
  // or return null to show text/generic icon
  return null;
};
