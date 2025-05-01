import Link from 'next/link';

const projects = [
  {
    slug: 'parking-system',
    title: 'Parking System',
    description: 'Built with React.js for UI, Spring Boot REST API and MySQL.',
    github: 'https://github.com/sahanatavari10/ParkingSystem'
  },
  {
    slug: 'portfolio-website',
    title: 'Portfolio Website',
    description: 'Built with Next.js & Tailwind CSS, responsive, dynamic routes, light/dark theme.',
    github: 'https://github.com/sahanatavari10/my-portfolio'
  },
  {
    slug: 'cart-system',
    title: 'Cart System',
    description: 'Next.js UI integrating Spring Boot REST API for CRUD and checkout flows.',
    github: 'https://github.com/sahanatavari10/cart-system'
  }
];

export default function HomePage() {
  return (
    <>
      <section className="space-y-6">
        <h2 className="text-4xl font-extrabold">Hi, I’m Sahana!</h2>
        <p className="text-lg max-w-prose">
          A Backend Engineer (Java Spring Boot) and Frontend enthusiast (Next.js, React) building
          performant, scalable web applications. Skilled in PostgreSQL, AWS (SQS, SNS, Lambda), Github,
          and modern UI/UX.
        </p>
      </section>

      <section className="mt-12">
        <h3 className="text-2xl font-semibold mb-4">Projects</h3>
        <ul className="space-y-4">
          {projects.map((p) => (
            <li key={p.slug}>
              <Link href={`/projects/${p.slug}`} className="block p-4 border rounded-lg hover:shadow-lg transition">
                <h4 className="text-xl font-bold">{p.title}</h4>
                <p className="mt-1 text-sm">{p.description}</p>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
