export default function Home() {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-fixed bg-no-repeat px-4 py-16"
      style={{
        backgroundImage: "url('/pozadina.jpg')",
      }}
    >
      <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-lg">
        <h1 className="text-4xl font-bold text-green-700 mb-6">Dobrodošli!</h1>
        <p className="text-lg text-gray-700 mb-4">
          Dobro došli na zvaničnu prezentaciju porodičnog rasadnika cvijeća <strong>Simeunović</strong>!
        </p>
        <p className="text-base text-gray-700 leading-relaxed mb-4">
          Godinama s ljubavlju i posvećenošću uzgajamo širok asortiman biljaka: pelargonije, surfinije, dipladenije, begonije, fuksije, verbene, milion bels, vinke, bidense, lavandu i ružmarin. Naše biljke se pažljivo gaje u plastenicima sa automatskim navodnjavanjem i ventilacijom.
        </p>
        <p className="text-base text-gray-700 leading-relaxed">
          Bilo da uređujete vrt, terasu, balkon ili vodite vrtni centar – naše biljke će unijeti boju, svježinu i kvalitet u svaki prostor. Pogledajte našu galeriju i saznajte više o nama.
        </p>
      </div>
    </div>
  );
}
