import Image from 'next/image'
export default async function Fechdata({ city }){
  console.log(city)
  try{
    const url = `https://ai-weather-by-meteosource.p.rapidapi.com/current?place_id=${city}&timezone=auto&language=en&units=auto`;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '514b91b944mshc2d5adc5d9cf7aep1daaf8jsn1dbcc079a62a',
        'X-RapidAPI-Host': 'ai-weather-by-meteosource.p.rapidapi.com'
      }
    };

    const response = await fetch(url, options);
    const data = await response.json();
    // console.log(data);
    const today = new Date();
    
    return (
      <section className="w-full max-w-6xl mx-auto p-4 md:p-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          
          {/* Compact Bento Hero */}
          <div className="lg:col-span-8 bg-white border border-zinc-100 rounded-[2rem] p-8 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.03)] flex flex-col justify-between min-h-[300px] relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-48 h-48 bg-zinc-50 rounded-full blur-3xl -mr-16 -mt-16 opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
            
            <div className="relative z-10 flex justify-between items-start">
              <div>
                <p className="text-zinc-400 font-bold tracking-[0.2em] uppercase text-[9px] mb-1">Live Forecast</p>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-zinc-900 capitalize">{city}</h2>
              </div>
              <div className="text-right">
                <p className="text-xl font-mono font-bold text-zinc-900">{today.getHours()+":"+today.getMinutes()}</p>
                <p className="text-zinc-400 text-[10px] font-medium tracking-tight">Local Time</p>
              </div>
            </div>
            
            <div className="relative z-10 flex flex-col md:flex-row items-center md:items-end gap-6 mt-6">
              <div className="relative w-32 h-32 md:w-36 md:h-36 drop-shadow-xl hover:scale-105 transition-transform duration-500">
                <Image 
                  src={`/bigicon_2/${data.current.icon_num}.png`} 
                  alt="icon" 
                  width={200}
                  height={200}
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col items-center md:items-start">
                <div className="flex items-start">
                  <span className="text-6xl md:text-7xl font-bold tracking-tighter text-zinc-900 leading-none">
                    {data.current.temperature}
                  </span>
                  <span className="text-3xl md:text-4xl font-bold text-zinc-300 mt-1">°C</span>
                </div>
                <p className="text-lg text-zinc-400 font-medium tracking-tight mt-1 capitalize">
                  {data.current.summary}
                </p>
              </div>
            </div>
          </div>

          {/* Compact Stats Grid */}
          <div className="lg:col-span-4 grid grid-cols-2 lg:grid-cols-1 gap-4">
            <StatCard label="Clouds" value={`${data.current ? data.current.cloud_cover : "-"} %`} />
            <StatCard label="Winds" value={`${data.current ? data.current.wind.speed : "-"} km/h`} />
            <StatCard label="Humidity" value={`${data.current ? data.current.humidity : "-"} %`} />
            <StatCard label="Visibility" value={`${data.current ? data.current.visibility : "-"} m`} />
          </div>

        </div>
      </section>
    );
  } catch {
    return <div className='mt-24 text-xl font-semibold text-center text-zinc-400'>City Not Found</div>    
  }
}

function StatCard({ label, value }) {
  return (
    <div className="bg-white border border-zinc-100 rounded-[1.5rem] p-6 shadow-[0_5px_15px_-10px_rgba(0,0,0,0.02)] hover:shadow-[0_10px_25px_-15px_rgba(0,0,0,0.05)] transition-all duration-500 flex flex-col justify-center">
      <p className="text-zinc-400 text-[9px] font-bold tracking-[0.2em] uppercase mb-1">{label}</p>
      <p className="text-2xl font-mono font-bold text-zinc-900 tracking-tighter">{value}</p>
    </div>
  );
}

