const EmbeddedWebsite = () => {
  return (
    <div style={{ width: '100%', height: '100vh', border: 'none' }}>
      <iframe
        src="https://www.google.com" // The website you want to embed
        title="Embedded Website"
        style={{ width: '100%', height: '100%', border: 'none' }}
      />
    </div>
  );
};

export default EmbeddedWebsite;
