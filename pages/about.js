export default function About() {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-fixed bg-no-repeat px-4 py-16"
      style={{
        backgroundImage: "url('/pozadina.jpg')",
      }}
    >
      <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-lg">
        <h1 className="text-4xl font-bold text-green-700 mb-6">O nama</h1>
        <p className="text-lg text-gray-700 mb-4">
          Dobrodošli u <strong>Rasadnik cvijeća Simeunović</strong> – mjesto gdje se ljubav prema biljkama pretvara u stručno njegovanje i profesionalnu proizvodnju.
        </p>
        <p className="text-base text-gray-700 leading-relaxed mb-4">
          Naš porodični rasadnik njeguje tradiciju i kvalitet više od jedne decenije. Biljke uzgajamo u savremenim plastenicima sa automatskim navodnjavanjem i ventilacijom, koristeći vrhunski sadni materijal i supstrate.
        </p>
        <p className="text-base text-gray-700 leading-relaxed mb-4">
          U ponudi imamo pelargonije, surfinije, dipladenije, begonije, fuksije, verbene, milion bels, vinke, bidense, lavandu, ružmarin i još mnogo toga. Svaka biljka prolazi stručnu selekciju i njegu.
        </p>
        <p className="text-base text-gray-700 leading-relaxed">
          Naše biljke krase dvorišta, terase, vrtove i poslovne prostore širom regiona. Hvala vam na povjerenju koje nam ukazujete iz godine u godinu!
        </p>
      </div>
    </div>
  );
}
