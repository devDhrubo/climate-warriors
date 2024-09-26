const Charts = () => {
    return (
        <div className="container mx-auto min-h-[500px]">
            <div className="text-center mt-10">
                <h1 className="text-4xl font-bold">Flood Data & Interactive Charts</h1>
                <p>Track Water Levels, Rainfall, and Risk Areas</p>
            </div>
            <div className="mt-16">
                <div
                    className="hero h-56"
                    style={{
                        backgroundImage: "url(https://i.ibb.co.com/fXLF5zq/chart.png)",
                    }}>
                    {/* <div className="hero-overlay bg-opacity-50"></div> */}
                    <div className="hero-content text-neutral-content text-center">
                        <div className="max-w-md">
                            <button>
                                <a href="https://tidesandcurrents.noaa.gov/map/index.html?region=Oregon" className="px-5 py-3 bg-[#1565C0] text-white rounded-md text-sm cursor-pointer font-bold">Learn More</a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Charts;