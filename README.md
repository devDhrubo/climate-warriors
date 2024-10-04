# Waters on the Rise: A Climate Crisis Unveiled 🌊

**Waters on the Rise** is an interactive web platform designed to deliver real-time insights and tools for individuals, communities, and policymakers to combat the growing risk of climate-induced flooding. Our project focuses on visualizing scientific data, offering user-driven insights, and encouraging community participation to improve preparedness and response to flood events caused by climate change.

## 🌍 Key Features

### 1. **Real-Time Flood Insights**

This feature provides immediate access to crucial data on climate-related threats:

- **Flood Alerts and Warnings**: Our system gathers data from multiple reliable sources to provide timely flood alerts, keeping users informed about current risks.
- **Emergency Assistance**: Users can request help in real-time via an emergency button, which sends their location to the nearest authorities or helpline.
- **Shelter Locations**: We provide a map with nearby shelters in case of emergency evacuations.
- **Water Gauge Monitoring**: Current water levels are displayed using live data from water gauges, enabling users to track rising water levels and predict flood conditions.
- **Future Plans**: We plan to collaborate with NASA to incorporate satellite data for more accurate real-time monitoring of climate hazards.

### 2. **Crowdsourced Newsfeed and Reports**

Empower communities by giving them a platform to share real-time updates:

- **User Reports**: Individuals can report flood situations in their area, increasing local awareness and improving community safety.
- **Crowdsourced Insights**: These reports, combined with official data, provide a more complete and immediate picture of flooding risks and impacts.

### 3. **Personalized Flood Impact Calculator**

Our **Flood Impact Calculator** provides tailored analyses of potential impacts from rising sea levels and increased rainfall:

- **Custom Inputs**: Users input their location, proximity to water bodies, infrastructure type, and the year of interest to generate a personalized flood risk report.
- **Visualized Impact**: By utilizing data from the European Space Agency (ESA) and NASA, we help users visualize how sea level rise and rainfall increases could affect their region, highlighting potential social and economic consequences.

### 4. **Data Visualization and Analysis**

Interactive maps and data-driven visualizations allow users to explore potential flood scenarios:

- **Data Sources**: We collect data from the [https://climate.esa.int/en/data/#/search],[https://catalogue.ceda.ac.uk/uuid/142052b9dc754f6da47a631e35ec4609/] and NASA, among other sources, to track sea-level rise and rainfall patterns.
- **Data Optimization**: Large datasets (over 10GB) were processed and converted into a 63MB CSV format to improve performance. Custom Python scripts were developed to manage missing data and optimize the platform.
- **Interactive Maps**: Users can explore the impacts of rising sea levels on different regions through our interactive maps, which provide a visual understanding of geographic vulnerability.

### 5. **USGS Flood Event Viewer**

By integrating the **USGS Flood Event Viewer**, our platform offers real-time data on historical and ongoing flood events in the United States, helping users stay informed and prepared for potential threats.

## 🧑‍💻 Technologies and Tools

- **Data Processing**: Python, Pandas, NumPy
- **Visualization**: Folium, Matplotlib, Plotly
- **APIs**: USGS Flood Event Viewer, NASA (future integration)
- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Flask (Python)
- **Data Sources**: ESA Climate Change Initiative, NASA, US GHG Center

## 🔧 Challenges and Future Development

Handling large datasets and ensuring platform performance were key challenges during development. By converting and optimizing the data, we were able to maintain functionality and responsiveness.

Our future plans include:

- **NASA Data Integration**: We aim to incorporate real-time satellite data from NASA to enhance flood monitoring and predictions.
- **Improved Machine Learning**: We plan to refine our data gap-filling algorithms by collaborating with experts in machine learning and climate data.
- **Expanding Data Sources**: We’ll continue to add real-time data from global climate organizations to broaden the scope of our platform’s predictive capabilities.

## 🚀 Addressing a Global Crisis

This platform was created during a hackathon focused on transforming climate data into meaningful tools for the public. Using datasets from NASA, ESA, and the US GHG Center, we aim to raise awareness and empower communities to take action against the impacts of climate change.

By providing easy access to complex climate data, we enable users to make informed decisions and take proactive steps in adapting to rising flood risks. Our platform fosters resilience and preparation in the face of an escalating global climate emergency.
