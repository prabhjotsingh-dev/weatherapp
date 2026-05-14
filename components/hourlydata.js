import Image from 'next/image'
export default async function Fechhourlydata({ city }){
    console.log(city)
    try{
    const url = `https://ai-weather-by-meteosource.p.rapidapi.com/hourly?place_id=${city}&timezone=auto&language=en&units=auto`;

    const options = {
        method: 'GET',
      headers: {
            'X-RapidAPI-Key': '514b91b944mshc2d5adc5d9cf7aep1daaf8jsn1dbcc079a62a',
            'X-RapidAPI-Host': 'ai-weather-by-meteosource.p.rapidapi.com'
        }
    };

    const response = await fetch(url, options);
    const { hourly } = await response.json();
    const today = new Date();
    return (
      <section className="px-6 pb-12 mx-auto space-y-10 w-full max-w-6xl duration-1000 animate-in fade-in slide-in-from-bottom-8">
        {/* Today's Section */}
        <div className="space-y-4">
          <div className="flex gap-4 items-center">
            <div className="h-[1px] flex-1 bg-zinc-100" />
            <h2 className="text-[10px] font-bold tracking-[0.3em] uppercase text-zinc-400 px-2">
              Today
            </h2>
            <div className="h-[1px] flex-1 bg-zinc-100" />
          </div>

          <div className="flex overflow-x-auto gap-4 px-6 pb-6 -mx-6 no-scrollbar">
            {hourly.data
              .filter(
                (item) =>
                  new Date(item.date).getDate() === today.getDate() &&
                  new Date(item.date).getHours() >= today.getHours(),
              )
              .map((item, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-32 bg-white border border-zinc-100 rounded-[1.5rem] p-6 flex flex-col items-center justify-between shadow-[0_4px_20px_-10px_rgba(0,0,0,0.03)] hover:shadow-[0_15px_30px_-15px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-500 group cursor-default"
                >
                  <p className="text-[9px] font-bold tracking-[0.2em] text-zinc-400 uppercase mb-3">
                    {new Date(item.date).getHours() === 12 ||
                    new Date(item.date).getHours() === 0
                      ? new Date(item.date).getHours() === 0
                        ? "12 AM"
                        : "12 PM"
                      : new Date(item.date).getHours() > 12
                        ? new Date(item.date).getHours() - 12 + " PM"
                        : new Date(item.date).getHours() + " AM"}
                  </p>
                  <div className="relative mb-4 w-12 h-12 transition-transform duration-500 group-hover:scale-110">
                    <Image
                      src={`/bigicon_2/${item.icon}.png`}
                      alt={`icon${item.icon}`}
                      width={48}
                      height={48}
                      className="object-contain"
                    />
                  </div>
                  <div className="flex items-start">
                    <span className="font-mono text-xl font-bold tracking-tighter transition-colors text-zinc-900 group-hover:text-zinc-600">
                      {item.temperature}
                    </span>
                    <span className="mt-0.5 ml-0.5 text-[10px] font-bold text-zinc-300">
                      °
                    </span>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* Tomorrow's Section */}
        <div className="space-y-4">
          <div className="flex gap-4 items-center">
            <div className="h-[1px] flex-1 bg-zinc-100" />
            <h2 className="text-[10px] font-bold tracking-[0.3em] uppercase text-zinc-400 px-2">
              Tomorrow
            </h2>
            <div className="h-[1px] flex-1 bg-zinc-100" />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
            {hourly.data
              .filter(
                (item) => new Date(item.date).getDate() === today.getDate() + 1,
              )
              .map((item, index) => (
                <div
                  key={index}
                  className="bg-white border border-zinc-100 rounded-[1.5rem] p-6 flex flex-col items-center justify-between shadow-[0_4px_20px_-10px_rgba(0,0,0,0.03)] hover:shadow-[0_15px_30px_-15px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-500 group cursor-default"
                >
                  <p className="text-[9px] font-bold tracking-[0.2em] text-zinc-400 uppercase mb-3">
                    {new Date(item.date).getHours() === 12 ||
                    new Date(item.date).getHours() === 0
                      ? new Date(item.date).getHours() === 0
                        ? "12 AM"
                        : "12 PM"
                      : new Date(item.date).getHours() > 12
                        ? new Date(item.date).getHours() - 12 + " PM"
                        : new Date(item.date).getHours() + " AM"}
                  </p>
                  <div className="relative mb-4 w-12 h-12 transition-transform duration-500 group-hover:scale-110">
                    <Image
                      src={`/bigicon_2/${item.icon}.png`}
                      alt={`icon${item.icon}`}
                      width={48}
                      height={48}
                      className="object-contain"
                    />
                  </div>
                  <div className="flex items-start">
                    <span className="font-mono text-xl font-bold tracking-tighter transition-colors text-zinc-900 group-hover:text-zinc-600">
                      {item.temperature}
                    </span>
                    <span className="mt-0.5 ml-0.5 text-[10px] font-bold text-zinc-300">
                      °
                    </span>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
    );
  } catch {
    return (
      <div className="mt-12 text-xl font-semibold text-center text-zinc-400">
        Not Found
      </div>
    );
  }
}
