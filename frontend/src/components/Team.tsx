import { useState } from 'react';
import { motion } from 'framer-motion';

const teamMembers = [
  {
    id: 'team-1',
    name: 'John Doe',
    role: 'Team Member',
    initials: 'JD',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
    avatarTone: 'from-[#f5c7b8] via-[#f8ede8] to-[#9dc6a7]',
  },
  {
    id: 'team-2',
    name: 'Jane Doe',
    role: 'Team Member',
    initials: 'JD',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
    avatarTone: 'from-[#f4d35e] via-[#f7efe1] to-[#d9897f]',
  },
  {
    id: 'team-3',
    name: 'John Doe',
    role: 'Team Member',
    initials: 'JD',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
    avatarTone: 'from-[#d8c3a5] via-[#f5efe6] to-[#91b59c]',
  },
  {
    id: 'team-4',
    name: 'Jane Doe',
    role: 'Team Member',
    initials: 'JD',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
    avatarTone: 'from-[#e8b4bc] via-[#fff3e6] to-[#c5a46d]',
  },
  {
    id: 'team-5',
    name: 'John Doe',
    role: 'Team Member',
    initials: 'JD',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
    avatarTone: 'from-[#c6d6b8] via-[#f5f1e8] to-[#c7876b]',
  },
  {
    id: 'team-6',
    name: 'Jane Doe',
    role: 'Team Member',
    initials: 'JD',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
    avatarTone: 'from-[#f0b7a4] via-[#fff1df] to-[#aabf8d]',
  },
  {
    id: 'team-7',
    name: 'John Doe',
    role: 'Team Member',
    initials: 'JD',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
    avatarTone: 'from-[#d9c7a3] via-[#f8efe3] to-[#ba8b7c]',
  },
  {
    id: 'team-8',
    name: 'Jane Doe',
    role: 'Team Member',
    initials: 'JD',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
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
    className="team-carousel-card group flex h-[360px] w-[min(82vw,292px)] shrink-0 flex-col rounded-[8px] border border-white/55 bg-white/[0.08] p-5 backdrop-blur-xl transition-transform duration-300 ease-out hover:-translate-y-2 hover:scale-[1.015] focus-within:-translate-y-2 focus-within:scale-[1.015] sm:h-[390px] sm:w-[300px] sm:p-6 md:h-[430px] md:w-[332px]"
  >
    <div
      className={`grid h-[62px] w-[62px] place-items-center rounded-full bg-gradient-to-br ${member.avatarTone} text-[17px] font-extrabold text-[#1f1f1f] sm:h-[70px] sm:w-[70px] sm:text-[19px] md:h-[76px] md:w-[76px] md:text-[20px]`}
    >
      {member.initials}
    </div>

    <p className="mt-8 max-w-[248px] text-[17px] font-medium leading-[1.22] tracking-[0] text-[#151515] sm:mt-9 sm:text-[18px] md:mt-10 md:text-[20px]">
      {member.bio}
    </p>

    <div className="mt-auto">
      <h3 className="text-[22px] font-extrabold leading-[0.98] tracking-[0] text-[#101010] sm:text-[24px] md:text-[26px]">
        {member.name}
      </h3>
      <p className="mt-2 text-[16px] font-normal leading-none tracking-[0] text-[#202020] sm:text-[18px] md:text-[19px]">
        {member.role}
      </p>
    </div>
  </article>
);

const Team = () => {
  const [isCarouselPaused, setIsCarouselPaused] = useState(false);

  return (
    <section id="team" className="relative -mb-px overflow-hidden bg-white pt-10 text-[#061f45] sm:pt-12 lg:pt-14">
      <div className="pointer-events-none absolute inset-x-0 bottom-[-1px] h-[66%] bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(234,244,255,0.98)_26%,rgba(14,106,243,0.72)_58%,#0E6AF3_86%,#0E6AF3_100%)]" />
      <div className="pointer-events-none absolute -left-[14%] bottom-[23%] h-[300px] w-[74%] rounded-[50%] bg-white/75 blur-[18px]" />
      <div className="pointer-events-none absolute right-[-12%] top-[24%] h-[390px] w-[56%] rounded-[50%] bg-[#e7f3ff] blur-[24px]" />

      <div className="relative z-10 mx-auto mb-8 max-w-7xl px-5 sm:mb-10 sm:px-8 lg:mb-12 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[22px] font-extrabold leading-none tracking-[0] text-[#061f45] sm:text-[24px] md:text-[26px]">
            What Our Customer Says
          </p>
          <p className="mt-3 max-w-[780px] text-[clamp(30px,8vw,46px)] font-light leading-[0.96] tracking-[0] text-black sm:leading-[0.92]">
            Powering innovation through seamless technology and customer success.
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 26 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.65, delay: 0.08 }}
        className="relative z-10 pb-14 sm:pb-16 lg:pb-20"
      >
        <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-10 bg-gradient-to-l from-[#0E6AF3]/70 via-[#0E6AF3]/25 to-transparent sm:w-20 lg:w-28" />

        <div className="overflow-hidden py-4 sm:py-5">
          <div
            className="team-carousel-track flex w-max"
            style={{ animationPlayState: isCarouselPaused ? 'paused' : 'running' }}
          >
            <div className="flex gap-4 pr-4 sm:gap-5 sm:pr-5 lg:gap-6 lg:pr-6">
              {teamMembers.map((member) => (
                <TeamCard
                  key={member.id}
                  member={member}
                  onPause={() => setIsCarouselPaused(true)}
                  onResume={() => setIsCarouselPaused(false)}
                />
              ))}
            </div>
            <div className="flex gap-4 pr-4 sm:gap-5 sm:pr-5 lg:gap-6 lg:pr-6" aria-hidden="true">
              {teamMembers.map((member) => (
                <TeamCard
                  key={`${member.id}-duplicate`}
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
