const Charts = () => {
    return (
        <div id="chart-data" className="container mx-auto min-h-[500px]">
            <div className="text-center mt-10">
                <h1 className="text-4xl font-bold">Flood Data & Interactive Charts</h1>
                <p className="my-4 mx-auto line-clamp-4">We’ve integrated the USGS Flood Event Viewer to provide real-time flood data from across the United States. This tool allows users to monitor water levels, streamflow, and rainfall, offering up-to-date flood conditions and historical data. With this integration, users can access reliable flood information to stay informed and prepared for flood events, enhancing the effectiveness of our climate impact tools.</p>
            </div>

            <div className="mt-16">
                <a href="https://stn.wim.usgs.gov/FEV/">
                    <div
                        className="hero min-h-[400px] cursor-pointer hover:bg-gray-600 duration-500"
                        style={{
                            backgroundImage: "url(https://i.ibb.co.com/f25FHG1/chart.png)",
                        }}>
                    </div>
                </a>
            </div>

        </div>
    );
};

export default Charts;