import image1 from "../../assets/Image/1.png";
import image2 from "../../assets/Image/2.png";
import image3 from "../../assets/Image/3.png";

const Stats = () => {
    return (
        <div className="min-h-screen">
            <h2 className="text-3xl font-bold text-center mt-10">Rainfall Visualisation</h2>
            <p className="text-lg text-center">Annual Average Rainfall</p>

            <div>
                <div className="flex gap-20 items-center justify-center mt-10">
                    <div className="flex-1">
                        <h2 className="text-3xl font-bold">Annual Rainfall Comparison Bar Chart (2017 vs. 2018):</h2>
                        <p className="mt-5">This bar chart visualizes the annual average rainfall for different districts in Bangladesh, comparing the years 2017 and 2018. It highlights variations in rainfall patterns, making it easy to see how different regions have experienced changes in precipitation over time.</p>
                    </div>
                    <div>
                        <img className="w-[600px]" src={image1} alt="First Image" />
                    </div>
                </div>
                <div className="flex gap-20 mt-20">
                    <div>
                        <img className="w-[600px]" src={image2} alt="2nd Image" />
                    </div>
                    <div className="flex-1 mt-20">
                        <h2 className="text-3xl font-bold">Correlation Heatmap</h2>
                        <p className="mt-5">The correlation heatmap provides an overview of the relationships between key variables, such as district area, rainfall averages, and rainfall volume. Strong correlations can indicate how factors like district size or climate trends influence overall flood risks.</p>
                    </div>
                </div>
                <div className="flex gap-20 mt-20">
                    <div className="flex-1 mt-20">
                        <h2 className="text-3xl font-bold">Rainfall Volume Trend Line (2017 vs. 2018):</h2>
                        <p className="mt-5">This line chart shows the trends in rainfall volume across various districts between 2017 and 2018. By tracking these changes, the visualization emphasizes how rainfall intensities have shifted, helping to identify regions that may be more vulnerable to flooding.</p>
                    </div>
                    <div>
                        <img className="w-[600px]" src={image3} alt="3rd Image" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Stats;