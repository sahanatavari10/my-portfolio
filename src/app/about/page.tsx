import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <section className="prose dark:prose-invert max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold">About Me</h2>
      <p>
        I'm <strong>Sahana Jagadeesh Tavari</strong>, a passionate backend developer with expertise in Java,
        Spring Boot, PostgreSQL, and AWS services like SQS, SNS, and Lambda. I also enjoy crafting
        elegant frontend experiences using Next.js and Tailwind CSS.
      </p>
      <p>
        I recently completed my Bachelor of Engineering in 2024 with a CGPA of 9.33 and currently work as
        a backend developer building scalable and performant APIs.
      </p>
      <p>
        Outside of work, I enjoy watching and reading crime thrillers, exploring new
        restaurants and traveling to new places. I'm always eager to learn, collaborate, and contribute to impactful projects.
      </p>
    </section>
  );
};

export default AboutPage;
