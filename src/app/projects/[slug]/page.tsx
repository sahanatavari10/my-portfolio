import { notFound } from 'next/navigation';

export const dynamic = 'force-static'; // tells Next.js this is a static route
export const dynamicParams = false;

const projects = [
    {
        slug: 'parking-system',
        title: 'Parking System',
        description: 'Spring Boot REST API + MySQL + React.js.',
        details: 'Implemented parking, ticket generation, and fee calculation.',
        github: 'https://github.com/sahanatavari10/my-portfolio'
    },
  {
    slug: 'portfolio-website',
    title: 'Portfolio Website',
    description: 'Next.js + Tailwind CSS portfolio.',
    details: 'Showcases my projects, skills, and theme toggle.',
    github: 'https://github.com/sahanatavari10/my-portfolio'
  },
  {
    slug: 'cart-system',
    title: 'Cart System',
    description: 'Spring Boot + PostgreSQL.',
    details: 'Features dynamic pages: login, product listing, cart, and checkout.',
    github: 'https://github.com/sahanatavari10/cart-system'
  }
];

export async function generateStaticParams() {
  return projects.map(p => ({ slug: p.slug }));
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
    const project = projects.find(p => p.slug === params.slug);
    if (!project) {
    notFound();
  }
  
    return (
      <article>
        <h2 className="text-3xl font-bold mb-2">{project.title}</h2>
        <p className="mb-4">{project.description}</p>
        <div className="prose dark:prose-dark">
          <p>{project.details}</p>
          {project.github && (
            <p className="mt-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary hover:underline"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.478 2 12a10 10 0 006.838 9.487c.5.092.682-.216.682-.48 0-.237-.009-.868-.014-1.703-2.782.604-3.369-1.341-3.369-1.341-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.07-.608.07-.608 1.004.071 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.091-.647.35-1.088.636-1.338-2.22-.252-4.555-1.112-4.555-4.943 0-1.091.39-1.984 1.03-2.683-.104-.253-.446-1.27.098-2.647 0 0 .84-.27 2.75 1.026A9.563 9.563 0 0112 6.844a9.53 9.53 0 012.504.336c1.909-1.296 2.748-1.026 2.748-1.026.546 1.377.204 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.841-2.338 4.688-4.566 4.936.359.31.679.923.679 1.86 0 1.343-.012 2.426-.012 2.756 0 .266.18.576.688.478A10.003 10.003 0 0022 12c0-5.522-4.477-10-10-10z"
                    clipRule="evenodd"
                  />
                </svg>
                View on GitHub
              </a>
            </p>
          )}
        </div>
      </article>
    );
  }
  