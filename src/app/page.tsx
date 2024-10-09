export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-slate-400">
      <h1>Page Header</h1>
      <p>Some content</p>
      <h2>This is another iframe</h2>
      <iframe
        title="test"
        src="https://210e-64-98-234-180.ngrok-free.app" // linked to 3000
        // data-openreplay-capture="true"
        width="800"
        height="800"
        data-domain="ngrok-free.app">
      </iframe>
    </div>
  );
}
