import { useState } from 'react';
import { motion } from 'framer-motion';

const teamMembers = [
  {
    name: 'Ara Nina Legaspi',
    role: 'Business Analyst',
    initials: 'AL',
    bio: 'Turns business needs into clear requirements, priorities, and product direction.',
    avatarTone: 'from-[#f5c7b8] via-[#f8ede8] to-[#9dc6a7]',
  },
  {
    name: 'Leumar Binas',
    role: 'Project Manager',
    initials: 'LB',
    bio: 'Keeps timelines clear, teams aligned, and client goals visible from kickoff to launch.',
    avatarTone: 'from-[#f4d35e] via-[#f7efe1] to-[#d9897f]',
  },
  {
    name: 'Christian John Jimenez',
    role: 'Frontend Developer',
    initials: 'CJ',
    bio: 'Builds polished interfaces that feel responsive, approachable, and easy to use.',
    avatarTone: 'from-[#d8c3a5] via-[#f5efe6] to-[#91b59c]',
  },
  {
    name: 'Luigi Avila',
    role: 'Frontend Developer',
    initials: 'LA',
    bio: 'Creates smooth user experiences with careful layouts, interactions, and frontend logic.',
    avatarTone: 'from-[#e8b4bc] via-[#fff3e6] to-[#c5a46d]',
  },
  {
    name: 'Lloyd Mangilog',
    role: 'Backend Developer',
    initials: 'LM',
    bio: 'Designs secure services, database flows, and integrations that stay steady under load.',
    avatarTone: 'from-[#c6d6b8] via-[#f5f1e8] to-[#c7876b]',
  },
  {
    name: 'John Louise Ernest Denila',
    role: 'Backend Developer',
    initials: 'JD',
    bio: 'Connects application logic, data models, and backend workflows into reliable systems.',
    avatarTone: 'from-[#f0b7a4] via-[#fff1df] to-[#aabf8d]',
  },
  {
    name: 'Jasmine Mikaella Aninion',
    role: 'UI/UX Designer',
    initials: 'JA',
    bio: 'Shapes clean experiences that feel polished, usable, and easy to understand.',
    avatarTone: 'from-[#d9c7a3] via-[#f8efe3] to-[#ba8b7c]',
  },
  {
    name: 'Carlos Miguel Adem',
    role: 'QA Engineer',
    initials: 'CA',
    bio: 'Tests core journeys closely so launches feel stable, clear, and ready for real users.',
    avatarTone: 'from-[#d8b7d6] via-[#f8ece7] to-[#b5b071]',
  },
];

type TeamCardProps = {
  member: (typeof teamMembers)[number];
  onPause: () => void;
  onResume: () => void;
};

const TeamCard = ({ member, onPause, onResume }: TeamCardProps) => (
  <article
    onMouseEnter={onPause}
    onMouseLeave={onResume}
    onFocus={onPause}
    onBlur={onResume}
    className="team-carousel-card group flex h-[430px] w-[302px] shrink-0 flex-col rounded-[8px] border border-white/55 bg-white/[0.08] p-6 backdrop-blur-xl transition-transform duration-300 ease-out hover:-translate-y-2 hover:scale-[1.015] focus-within:-translate-y-2 focus-within:scale-[1.015] sm:w-[332px]"
  >
    <div
      className={`grid h-[76px] w-[76px] place-items-center rounded-full bg-gradient-to-br ${member.avatarTone} text-[20px] font-extrabold text-[#1f1f1f]`}
    >
      {member.initials}
    </div>

    <p className="mt-10 max-w-[248px] text-[20px] font-medium leading-[1.22] tracking-[0] text-[#151515]">
      {member.bio}
    </p>

    <div className="mt-auto">
      <h3 className="text-[26px] font-extrabold leading-none tracking-[0] text-[#101010]">{member.name}</h3>
      <p className="mt-2 text-[19px] font-normal leading-none tracking-[0] text-[#202020]">{member.role}</p>
    </div>
  </article>
);

const Team = () => {
  const [isCarouselPaused, setIsCarouselPaused] = useState(false);

  return (
    <section id="team" className="relative -mb-px overflow-hidden bg-white pt-14 text-[#061f45]">
      <div className="pointer-events-none absolute inset-x-0 bottom-[-1px] h-[66%] bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(234,244,255,0.98)_26%,rgba(123,177,249,0.72)_58%,#5f9cf6_86%,#5f9cf6_100%)]" />
      <div className="pointer-events-none absolute -left-[14%] bottom-[23%] h-[300px] w-[74%] rounded-[50%] bg-white/75 blur-[18px]" />
      <div className="pointer-events-none absolute right-[-12%] top-[24%] h-[390px] w-[56%] rounded-[50%] bg-[#e7f3ff] blur-[24px]" />

      <div className="relative z-10 mx-auto mb-12 max-w-7xl px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[26px] font-extrabold leading-none tracking-[0] text-[#061f45]">Meet Our Team</p>
          <p className="mt-3 max-w-[780px] text-[clamp(34px,5vw,46px)] font-light leading-[0.9] tracking-[0] text-black">
            Powering innovation through seamless technology and customer success.
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 26 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.65, delay: 0.08 }}
        className="relative z-10 pb-20"
      >
        <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-16 bg-gradient-to-l from-[#6fa4f6]/70 via-[#6fa4f6]/25 to-transparent sm:w-28" />

        <div className="overflow-hidden py-5">
          <div
            className="team-carousel-track flex w-max"
            style={{ animationPlayState: isCarouselPaused ? 'paused' : 'running' }}
          >
            <div className="flex gap-6 pr-6">
              {teamMembers.map((member) => (
                <TeamCard
                  key={member.name}
                  member={member}
                  onPause={() => setIsCarouselPaused(true)}
                  onResume={() => setIsCarouselPaused(false)}
                />
              ))}
            </div>
            <div className="flex gap-6 pr-6" aria-hidden="true">
              {teamMembers.map((member) => (
                <TeamCard
                  key={`${member.name}-duplicate`}
                  member={member}
                  onPause={() => setIsCarouselPaused(true)}
                  onResume={() => setIsCarouselPaused(false)}
                />
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Team;
