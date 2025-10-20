import { Code, Palette, TrendingUp, Brain } from 'lucide-react';
import Video from '../../../assets/bg-video.mp4';

const careers = [
  {
    icon: Code,
    title: 'Future-Driven Curriculum',
    description:
      'Stay ahead with courses continually updated to match fast-changing global tech trends.',
  },
  {
    icon: Palette,
    title: 'Industry-Integrated Learning',

    description:
      'Engage in real-world projects with our network of partner companies learn by doing, not just by listening.',
  },
  {
    icon: TrendingUp,
    title: 'Flexible Learning Tracks',
    description:
      'From foundational programs to advanced specializations, choose a pathway that fits your goals and grows with you.',
  },
  {
    icon: Brain,
    title: 'Earn While You Learn',
    description:
      'Gain hands-on experience, mentorship, and income as you build your career through our unique Work, Learn, Earn model.',
  },
];

export default function CareerSection() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-black-500 to-green-950 px-4 py-20">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 object-cover opacity-5 w-full bg-cover"
      >
        <source src={Video} type="video/mp4" />
      </video>
      <div className="mx-auto overflow-hidden z-10">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-[30px] font-bold tracking-wide text-emerald-400 uppercase md:text-[36px]">
            Empowering Tomorrow's Innovators Today
          </h2>
          <p className="text-4 mx-auto max-w-3xl text-gray-300">
            At Certix Institute, our programs are built for the tech-driven
            world ahead. From software engineering to robotics, blockchain to
            AI, every course is designed with one goal: to equip you with the
            tools, experience, and confidence to lead in the digital economy.
          </p>
        </div>

        <div className="grid gap-6 px-7 md:grid-cols-2 lg:grid-cols-4">
          {careers.map((career, index) => (
            <div
              key={index}
              className="group relative rounded-2xl border-2 border-emerald-800/50 bg-emerald-900/30 p-8 backdrop-blur-lg transition-all duration-800 hover:border-emerald-500/70 hover:shadow-lg hover:shadow-emerald-500/90"
            >
              <div className="absolute top-4 right-4 text-4xl opacity-40 transition-opacity group-hover:opacity-60">
                🎃
              </div>

              <div className="space-y-4 text-center">
                <div className="relative mb-2 inline-block">
                  <div className="absolute inset-0 bg-emerald-400/20 blur-xl transition-all group-hover:blur-2xl" />
                  <career.icon
                    className="relative z-10 mx-auto h-12 w-12 text-emerald-400 transition-transform group-hover:scale-110"
                    strokeWidth={1.5}
                  />
                </div>

                <div>
                  <h3 className="mb-2 text-[16px] font-bold text-white">
                    {career.title}
                  </h3>
                  {/* <p className="text-sm text-emerald-400 font-semibold mb-3">{career.subtitle}</p> */}
                  <p className="text-sm leading-relaxed text-gray-300">
                    {career.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
