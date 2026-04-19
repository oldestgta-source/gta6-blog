import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Characters — $GTA Vice City Sentinel',
  description:
    'Meet the characters of Grand Theft Auto VI. Explore the full cast from Rockstar Games — Jason, Lucia, and everyone tangled in the criminal underworld of Leonida.',
  openGraph: {
    title: 'GTA VI Characters — $GTA Vice City Sentinel',
    description:
      'The full cast of Grand Theft Auto VI — protagonists, hustlers, criminals, and legends of Leonida.',
  },
};

interface CharacterData {
  name: string;
  tagline: string;
  description: string;
  image: string;
  role: string;
}

const characters: CharacterData[] = [
  {
    name: 'Jason Duval',
    tagline: 'Jason wants an easy life, but things just keep getting harder.',
    description:
      'Grew up around grifters and crooks. After a stint in the Army trying to shake off his troubled teens, Jason ended up in the Keys working for local drug runners. Meeting Lucia could be the best or worst thing to ever happen to him.',
    image:
      'https://www.rockstargames.com/VI/_next/static/media/Jason_Duval_01.6e287338.jpg',
    role: 'Protagonist',
  },
  {
    name: 'Lucia Caminos',
    tagline:
      "Lucia's father taught her to fight as soon as she could walk.",
    description:
      "Life has been coming at her swinging ever since. Fighting for her family landed her in the Leonida Penitentiary. Sheer luck got her out. Fresh out of prison and ready to change the odds in her favor, Lucia's committed to her plan — no matter what it takes.",
    image:
      'https://www.rockstargames.com/VI/_next/static/media/Lucia_Caminos_01.f5023e0f.jpg',
    role: 'Protagonist',
  },
  {
    name: 'Raul Bautista',
    tagline: 'Experience counts.',
    description:
      "Confidence, charm, and cunning — Raul's a seasoned bank robber always on the hunt for talent ready to take the risks that bring the biggest rewards. His recklessness raises the stakes with every score.",
    image:
      'https://www.rockstargames.com/VI/_next/static/media/Raul_Bautista_01.b4438643.jpg',
    role: 'Heist Crew',
  },
  {
    name: 'Cal Hampton',
    tagline: 'What if everything on the internet was true?',
    description:
      "Jason's friend and a fellow associate of Brian's, Cal feels safest hanging at home, deep in conspiracy forums and internet rabbit holes. A useful contact for anyone who needs information — or misinformation.",
    image:
      'https://www.rockstargames.com/VI/_next/static/media/Cal_Hampton_01.86793e65.jpg',
    role: 'Associate',
  },
  {
    name: 'Brian Heder',
    tagline: 'Nothing better than a Mudslide at sunset.',
    description:
      "A classic drug runner from the golden age of smuggling in the Keys. Still moving product through his boat yard with his third wife, Lori. Brian's been around long enough to let others do his dirty work — and he's letting Jason live rent-free at one of his properties.",
    image:
      'https://www.rockstargames.com/VI/_next/static/media/Brian_Heder_01.10393e61.jpg',
    role: 'Criminal Underworld',
  },
  {
    name: 'Boobie Ike',
    tagline: "It's all about heart — the Jack of Hearts.",
    description:
      "A local Vice City legend who transformed his time in the streets into an empire spanning real estate, a strip club, and a recording studio. All smiles until it's time to talk business. His partnership with Dre'Quan for Only Raw Records is what he's most invested in.",
    image:
      'https://www.rockstargames.com/VI/_next/static/media/Boobie_Ike_01.8aee3bef.jpg',
    role: 'Vice City Legend',
  },
  {
    name: "Dre'Quan Priest",
    tagline: 'Only Raw... Records',
    description:
      "Always more of a hustler than a gangster. Even when dealing on the streets to make ends meet, breaking into music was the goal. Now that he's signed the Real Dimez, his days of booking acts into Boobie's strip club might be numbered.",
    image:
      'https://www.rockstargames.com/VI/_next/static/media/DreQuan_Priest_01.10a7473c.jpg',
    role: 'Music Industry',
  },
  {
    name: 'Real Dimez',
    tagline: 'Viral videos. Viral hooks.',
    description:
      "Bae-Luxe and Roxy have been friends since high school — girls with the savvy to turn their time shaking down local dealers into cold, hard cash via spicy rap tracks and a relentless social media presence. Now signed to Only Raw Records, they're hoping lightning can strike twice.",
    image:
      'https://www.rockstargames.com/VI/_next/static/media/Real_Dimez_01.c74db009.jpg',
    role: 'Music Industry',
  },
];

export default function CharactersPage() {
  return (
    <main className="min-h-screen pt-24 pb-20">
      {/* Header */}
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 mb-16">
        <p className="text-xs uppercase tracking-[0.25em] text-accent-pink mb-4">
          Grand Theft Auto VI
        </p>
        <h1 className="text-4xl sm:text-6xl font-black text-white mb-4">
          Characters
        </h1>
        <p className="text-sm sm:text-base text-white/40 max-w-xl leading-relaxed">
          The cast of GTA VI — protagonists, criminals, hustlers, and legends
          tangled in the criminal underworld of Leonida.
        </p>
      </div>

      {/* Protagonists — featured large */}
      <section className="max-w-[1400px] mx-auto px-6 sm:px-8 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {characters
            .filter((c) => c.role === 'Protagonist')
            .map((char) => (
              <div
                key={char.name}
                className="group relative rounded-2xl overflow-hidden bg-white/[0.03] border border-white/5 hover:border-accent-pink/30 transition-all duration-500"
              >
                <div className="aspect-[3/4] sm:aspect-[4/5] relative overflow-hidden">
                  <img
                    src={char.image}
                    alt={char.name}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                    <span className="inline-block text-[10px] uppercase tracking-[0.2em] text-accent-cyan bg-accent-cyan/10 px-3 py-1 rounded-full mb-3">
                      {char.role}
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-black text-white mb-2">
                      {char.name}
                    </h2>
                    <p className="text-sm text-accent-pink font-medium italic mb-3">
                      &ldquo;{char.tagline}&rdquo;
                    </p>
                    <p className="text-sm text-white/60 leading-relaxed max-w-md">
                      {char.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </section>

      {/* Supporting Cast */}
      <section className="max-w-[1400px] mx-auto px-6 sm:px-8">
        <h2 className="text-xs uppercase tracking-[0.25em] text-white/30 mb-8">
          Supporting Cast
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {characters
            .filter((c) => c.role !== 'Protagonist')
            .map((char) => (
              <div
                key={char.name}
                className="group relative rounded-xl overflow-hidden bg-white/[0.03] border border-white/5 hover:border-accent-cyan/20 transition-all duration-500"
              >
                <div className="aspect-square relative overflow-hidden">
                  <img
                    src={char.image}
                    alt={char.name}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <span className="inline-block text-[9px] uppercase tracking-[0.2em] text-accent-cyan/70 mb-2">
                      {char.role}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black text-white mb-1">
                      {char.name}
                    </h3>
                    <p className="text-xs text-accent-pink/80 italic mb-2">
                      &ldquo;{char.tagline}&rdquo;
                    </p>
                  </div>
                </div>
                <div className="p-5 pt-3">
                  <p className="text-xs text-white/40 leading-relaxed">
                    {char.description}
                  </p>
                </div>
              </div>
            ))}
        </div>
      </section>

      {/* Source attribution */}
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 mt-16">
        <p className="text-[10px] text-white/15 text-center">
          Character images and info sourced from{' '}
          <a
            href="https://www.rockstargames.com/VI"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-white/30 transition-colors"
          >
            rockstargames.com/VI
          </a>
          . All rights belong to Rockstar Games.
        </p>
      </div>
    </main>
  );
}
