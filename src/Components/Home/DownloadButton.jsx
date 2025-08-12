export default function DownloadButton() {
  const handleDownload = () => {
    const url = 'https://docs.google.com/document/d/1yo_3areeUIoRH-hgKO1zzehQC6nOzro5-Q2Y8arlwWY/export?format=pdf';
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <button
      onClick={handleDownload}
      style={{
        padding: '10px 20px',
        backgroundColor: '#2563EB',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
      }}
    >
      Resume (PDF)
    </button>
  );
}
